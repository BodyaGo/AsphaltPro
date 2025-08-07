import { redirect } from 'next/navigation'
import { checkAdminAuth, getSubmissions } from '@/app/actions/admin'
import AdminDashboard from '@/components/admin-dashboard'

interface PageProps {
  searchParams: Promise<{
    page?: string
    status?: string
    search?: string
  }>
}

export default async function AdminDashboardPage({ searchParams }: PageProps) {
  const isAuthenticated = await checkAdminAuth()
  
  if (!isAuthenticated) {
    redirect('/admin/login')
  }

  const params = await searchParams
  const page = parseInt(params.page || '1')
  const status = params.status || 'all'
  const search = params.search || ''

  const result = await getSubmissions(page, 10, status, search)

  if (!result.success) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Помилка завантаження</h1>
          <p className="text-gray-600">{result.message}</p>
        </div>
      </div>
    )
  }

  return <AdminDashboard initialData={result.data} />
}
