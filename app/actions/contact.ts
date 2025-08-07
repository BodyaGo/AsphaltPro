'use server'

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.9ellb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = uri ? new MongoClient(uri) : null

export async function submitContactForm(formData: FormData) {
  try {
    // Отримуємо дані з форми
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const projectType = formData.get('projectType') as string
    const projectDetails = formData.get('projectDetails') as string

    // Валідація обов'язкових полів
    if (!firstName || !lastName || !email || !phone) {
      return {
        success: false,
        message: 'Будь ласка, заповніть всі обов\'язкові поля'
      }
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Будь ласка, введіть коректну електронну адресу'
      }
    }

    if (!client) {
      // Return success for demo purposes when database is not configured
      return {
        success: true,
        message: 'Дякуємо за звернення! Ми зв\'яжемося з вами найближчим часом. (Demo mode - no database)',
        id: 'demo-' + Date.now()
      }
    }

    // Підключення до MongoDB
    await client.connect()
    const database = client.db('asphalt_company')
    const collection = database.collection('AsphaltPro')

    // Створюємо документ для збереження
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      projectType,
      projectDetails,
      submittedAt: new Date(),
      status: 'new', // new, contacted, completed
      source: 'website_contact_form'
    }

    // Зберігаємо дані
    const result = await collection.insertOne(contactData)

    if (result.insertedId) {
      return {
        success: true,
        message: 'Дякуємо за звернення! Ми зв\'яжемося з вами найближчим часом.',
        id: result.insertedId.toString()
      }
    } else {
      throw new Error('Помилка при збереженні даних')
    }

  } catch (error) {
    console.error('Помилка при обробці форми:', error)
    return {
      success: false,
      message: 'Виникла помилка при відправці форми. Спробуйте ще раз або зателефонуйте нам.'
    }
  } finally {
    try {
      if (client) {
        await client.close()
      }
    } catch (closeError) {
      console.error('Error closing MongoDB connection:', closeError)
    }
  }
}
