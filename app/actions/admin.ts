'use server'

import { MongoClient, ObjectId } from 'mongodb'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const uri = ""
const client = new MongoClient(uri)

// Простий логін для адміна (в реальному проекті використовуйте більш безпечну аутентифікацію)
export async function adminLogin(formData: FormData) {
  try {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    // Прості креденшали для демо (в реальному проекті використовуйте хешування паролів)
    if (username === 'admin' && password === 'asphalt2024') {
      const cookieStore = await cookies()
      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 // 24 години
      })
      redirect('/admin/dashboard')
    }

    return {
      success: false,
      message: 'Невірний логін або пароль'
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      message: 'Помилка при вході в систему'
    }
  }
}

export async function adminLogout() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
    redirect('/admin/login')
  } catch (error) {
    console.error('Logout error:', error)
    redirect('/admin/login')
  }
}

export async function checkAdminAuth() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')
    return session?.value === 'authenticated'
  } catch (error) {
    console.error('Auth check error:', error)
    return false
  }
}

// Отримання всіх заявок
export async function getSubmissions(page = 1, limit = 10, status = 'all', search = '') {
  try {
    const isAuthenticated = await checkAdminAuth()
    if (!isAuthenticated) {
      redirect('/admin/login')
    }

    await client.connect()
    const database = client.db('asphalt_company')
    const collection = database.collection('AsphaltPro')

    // Створюємо фільтр
    let filter: any = {}
    
    if (status !== 'all') {
      filter.status = status
    }

    if (search) {
      filter.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { projectType: { $regex: search, $options: 'i' } }
      ]
    }

    // Підрахунок загальної кількості
    const total = await collection.countDocuments(filter)

    // Отримання даних з пагінацією
    const submissions = await collection
      .find(filter)
      .sort({ submittedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    return {
      success: true,
      data: {
        submissions: submissions.map(sub => ({
          ...sub,
          _id: sub._id.toString()
        })),
        pagination: {
          current: page,
          total: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1
        },
        stats: {
          total,
          new: await collection.countDocuments({ status: 'new' }),
          contacted: await collection.countDocuments({ status: 'contacted' }),
          completed: await collection.countDocuments({ status: 'completed' })
        }
      }
    }
  } catch (error) {
    console.error('Помилка при отриманні заявок:', error)
    return {
      success: false,
      message: 'Помилка при завантаженні даних'
    }
  } finally {
    try {
      await client.close()
    } catch (closeError) {
      console.error('Error closing MongoDB connection:', closeError)
    }
  }
}

// Оновлення статусу заявки
export async function updateSubmissionStatus(id: string, status: string) {
  try {
    const isAuthenticated = await checkAdminAuth()
    if (!isAuthenticated) {
      return { success: false, message: 'Не авторизовано' }
    }

    await client.connect()
    const database = client.db('asphalt_company')
    const collection = database.collection('AsphaltPro')

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status,
          updatedAt: new Date()
        }
      }
    )

    if (result.modifiedCount > 0) {
      return {
        success: true,
        message: 'Статус успішно оновлено'
      }
    } else {
      return {
        success: false,
        message: 'Заявку не знайдено'
      }
    }
  } catch (error) {
    console.error('Помилка при оновленні статусу:', error)
    return {
      success: false,
      message: 'Помилка при оновленні статусу'
    }
  } finally {
    try {
      await client.close()
    } catch (closeError) {
      console.error('Error closing MongoDB connection:', closeError)
    }
  }
}

// Видалення заявки
export async function deleteSubmission(id: string) {
  try {
    const isAuthenticated = await checkAdminAuth()
    if (!isAuthenticated) {
      return { success: false, message: 'Не авторизовано' }
    }

    await client.connect()
    const database = client.db('asphalt_company')
    const collection = database.collection('AsphaltPro')

    const result = await collection.deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount > 0) {
      return {
        success: true,
        message: 'Заявку успішно видалено'
      }
    } else {
      return {
        success: false,
        message: 'Заявку не знайдено'
      }
    }
  } catch (error) {
    console.error('Помилка при видаленні заявки:', error)
    return {
      success: false,
      message: 'Помилка при видаленні заявки'
    }
  } finally {
    try {
      await client.close()
    } catch (closeError) {
      console.error('Error closing MongoDB connection:', closeError)
    }
  }
}
