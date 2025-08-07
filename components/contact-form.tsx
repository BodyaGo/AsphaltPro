'use client'

import { useState, useTransition } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { submitContactForm } from '@/app/actions/contact'

interface FormState {
  success?: boolean
  message?: string
}

export default function ContactForm() {
  const [state, setState] = useState<FormState | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setState(result)
    })
  }

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Запросити кошторис</h3>
      
      {/* Повідомлення про результат */}
      {state && (
        <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
          state.success 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {state.success ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}

      <form action={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ім'я <span className="text-red-500">*</span>
            </label>
            <Input 
              name="firstName"
              placeholder="Іван" 
              required
              disabled={isPending}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Прізвище <span className="text-red-500">*</span>
            </label>
            <Input 
              name="lastName"
              placeholder="Іваненко" 
              required
              disabled={isPending}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Електронна пошта <span className="text-red-500">*</span>
          </label>
          <Input 
            name="email"
            type="email" 
            placeholder="ivan@example.com" 
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Телефон <span className="text-red-500">*</span>
          </label>
          <Input 
            name="phone"
            type="tel" 
            placeholder="+380 XX XXX XX XX" 
            required
            disabled={isPending}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Тип проєкту
          </label>
          <select 
            name="projectType"
            className="w-full p-3 border border-gray-300 rounded-md disabled:opacity-50"
            disabled={isPending}
          >
            <option value="">Виберіть тип проєкту</option>
            <option value="residential_driveway">Приватна доріжка</option>
            <option value="commercial_parking">Комерційна парковка</option>
            <option value="road_construction">Будівництво дороги</option>
            <option value="repairs_maintenance">Ремонт та обслуговування</option>
            <option value="pothole_repair">Ямковий ремонт</option>
            <option value="other">Інше</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Деталі проєкту
          </label>
          <Textarea 
            name="projectDetails"
            placeholder="Розкажіть про свій проєкт: розміри, терміни, особливі вимоги..." 
            rows={4}
            disabled={isPending}
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Відправляємо...
            </>
          ) : (
            'Отримати безкоштовний кошторис'
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Або зателефонуйте нам: 
          <a href="tel:+380504700044" className="font-semibold text-orange-600 hover:text-orange-700 ml-1">
            050 47 000 44
          </a>
        </p>
      </div>
    </Card>
  )
}
