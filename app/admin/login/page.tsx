'use client'

import { useState, useTransition } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AlertCircle, Loader2, Shield } from 'lucide-react'
import { adminLogin } from '@/app/actions/admin'

interface LoginState {
  success?: boolean
  message?: string
}

export default function AdminLogin() {
  const [state, setState] = useState<LoginState | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await adminLogin(formData)
      if (result) {
        setState(result)
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Адмін панель</CardTitle>
          <CardDescription>
            Увійдіть для управління заявками AsphaltPro
          </CardDescription>
        </CardHeader>
        <CardContent>
          {state && !state.success && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <p className="text-sm text-red-800">{state.message}</p>
            </div>
          )}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Логін
              </label>
              <Input
                name="username"
                type="text"
                placeholder="admin"
                required
                disabled={isPending}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                disabled={isPending}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Вхід...
                </>
              ) : (
                'Увійти'
              )}
            </Button>
          </form>

          <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800">
              <strong>Демо креденшали:</strong><br />
              Логін: admin<br />
              Пароль: asphalt2024
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
