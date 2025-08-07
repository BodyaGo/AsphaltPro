'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Users, Clock, CheckCircle, UserCheck, Search, LogOut, Trash2, ChevronLeft, ChevronRight, Eye, Phone, Mail } from 'lucide-react'
import { adminLogout, updateSubmissionStatus, deleteSubmission } from '@/app/actions/admin'

interface Submission {
  _id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  projectDetails: string
  status: string
  submittedAt: string
  source: string
}

interface AdminDashboardProps {
  initialData: {
    submissions: Submission[]
    pagination: {
      current: number
      total: number
      hasNext: boolean
      hasPrev: boolean
    }
    stats: {
      total: number
      new: number
      contacted: number
      completed: number
    }
  }
}

const statusLabels = {
  new: 'Нова',
  contacted: 'Зв\'язались',
  completed: 'Завершена'
}

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800'
}

const projectTypeLabels = {
  residential_driveway: 'Приватна доріжка',
  commercial_parking: 'Комерційна парковка',
  road_construction: 'Будівництво дороги',
  repairs_maintenance: 'Ремонт та обслуговування',
  pothole_repair: 'Ямковий ремонт',
  other: 'Інше'
}

export default function AdminDashboard({ initialData }: AdminDashboardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)

  const handleStatusChange = async (id: string, newStatus: string) => {
    startTransition(async () => {
      const result = await updateSubmissionStatus(id, newStatus)
      if (result.success) {
        router.refresh()
      }
    })
  }

  const handleDelete = async (id: string) => {
    startTransition(async () => {
      const result = await deleteSubmission(id)
      if (result.success) {
        router.refresh()
      }
    })
  }

  const handleSearch = (search: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (search) {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    params.set('page', '1')
    router.push(`/admin/dashboard?${params.toString()}`)
  }

  const handleStatusFilter = (status: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (status === 'all') {
      params.delete('status')
    } else {
      params.set('status', status)
    }
    params.set('page', '1')
    router.push(`/admin/dashboard?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`/admin/dashboard?${params.toString()}`)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('uk-UA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AsphaltPro</h1>
                <p className="text-sm text-gray-600">Адмін панель</p>
              </div>
            </div>
            <form action={adminLogout}>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Вийти
              </Button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Всього заявок</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{initialData.stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Нові</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{initialData.stats.new}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">В роботі</CardTitle>
              <UserCheck className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{initialData.stats.contacted}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Завершені</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{initialData.stats.completed}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Фільтри та пошук</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Пошук за ім'ям, email, телефоном..."
                    className="pl-10"
                    defaultValue={searchParams.get('search') || ''}
                    onChange={(e) => {
                      const timer = setTimeout(() => {
                        handleSearch(e.target.value)
                      }, 500)
                      return () => clearTimeout(timer)
                    }}
                  />
                </div>
              </div>
              <Select
                defaultValue={searchParams.get('status') || 'all'}
                onValueChange={handleStatusFilter}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Всі статуси</SelectItem>
                  <SelectItem value="new">Нові</SelectItem>
                  <SelectItem value="contacted">Зв'язались</SelectItem>
                  <SelectItem value="completed">Завершені</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Submissions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Заявки клієнтів</CardTitle>
            <CardDescription>
              Управління заявками на асфальтні роботи
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Клієнт</TableHead>
                    <TableHead>Контакти</TableHead>
                    <TableHead>Тип проєкту</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Дії</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {initialData.submissions.map((submission) => (
                    <TableRow key={submission._id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {submission.firstName} {submission.lastName}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="h-3 w-3 mr-1" />
                            {submission.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-3 w-3 mr-1" />
                            {submission.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {projectTypeLabels[submission.projectType as keyof typeof projectTypeLabels] || submission.projectType}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Select
                          defaultValue={submission.status}
                          onValueChange={(value) => handleStatusChange(submission._id, value)}
                          disabled={isPending}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue>
                              <Badge className={statusColors[submission.status as keyof typeof statusColors]}>
                                {statusLabels[submission.status as keyof typeof statusLabels]}
                              </Badge>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">Нова</SelectItem>
                            <SelectItem value="contacted">Зв'язались</SelectItem>
                            <SelectItem value="completed">Завершена</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-600">
                          {formatDate(submission.submittedAt)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedSubmission(submission)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Видалити заявку?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Ця дія незворотна. Заявка буде повністю видалена з бази даних.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Скасувати</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(submission._id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Видалити
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {initialData.pagination.total > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600">
                  Сторінка {initialData.pagination.current} з {initialData.pagination.total}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(initialData.pagination.current - 1)}
                    disabled={!initialData.pagination.hasPrev || isPending}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Попередня
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(initialData.pagination.current + 1)}
                    disabled={!initialData.pagination.hasNext || isPending}
                  >
                    Наступна
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Submission Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Деталі заявки</CardTitle>
              <CardDescription>
                Заявка від {formatDate(selectedSubmission.submittedAt)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Ім'я</label>
                  <p className="text-gray-900">{selectedSubmission.firstName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Прізвище</label>
                  <p className="text-gray-900">{selectedSubmission.lastName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{selectedSubmission.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Телефон</label>
                  <p className="text-gray-900">{selectedSubmission.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Тип проєкту</label>
                  <p className="text-gray-900">
                    {projectTypeLabels[selectedSubmission.projectType as keyof typeof projectTypeLabels] || selectedSubmission.projectType}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Статус</label>
                  <Badge className={statusColors[selectedSubmission.status as keyof typeof statusColors]}>
                    {statusLabels[selectedSubmission.status as keyof typeof statusLabels]}
                  </Badge>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700">Деталі проєкту</label>
                <p className="text-gray-900 mt-1 p-3 bg-gray-50 rounded-lg">
                  {selectedSubmission.projectDetails || 'Деталі не вказані'}
                </p>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedSubmission(null)}
                >
                  Закрити
                </Button>
                <Button asChild>
                  <a href={`tel:${selectedSubmission.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Зателефонувати
                  </a>
                </Button>
                <Button asChild>
                  <a href={`mailto:${selectedSubmission.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Написати email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
