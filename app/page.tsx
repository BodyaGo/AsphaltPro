import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Shield, Truck, Award, CheckCircle, Star, Menu, Leaf, DollarSign, Timer } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function AsphaltCompanyWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AsphaltPro</h1>
                <p className="text-xs text-gray-600">Преміальні асфальтові рішення</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-orange-600 font-medium">
                Головна
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-600 font-medium">
                Послуги
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-orange-600 font-medium">
                Проєкти
              </Link>
              <Link href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium">
                Ціни
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Контакти
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">050 47 000 44</p>
                <p className="text-sm font-semibold text-gray-900">093 47 000 44</p>
                <p className="text-sm font-semibold text-gray-900">096 788 88 93</p>
                <p className="text-xs text-gray-600">Цілодобове аварійне обслуговування</p>
              </div>
              <Button className="bg-orange-600 hover:bg-orange-700">Отримати кошторис</Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="#home" className="text-gray-700 hover:text-orange-600 font-medium">
                    Головна
                  </Link>
                  <Link href="#services" className="text-gray-700 hover:text-orange-600 font-medium">
                    Послуги
                  </Link>
                  <Link href="#about" className="text-gray-700 hover:text-orange-600 font-medium">
                    Про нас
                  </Link>
                  <Link href="#projects" className="text-gray-700 hover:text-orange-600 font-medium">
                    Проєкти
                  </Link>
                  <Link href="#pricing" className="text-gray-700 hover:text-orange-600 font-medium">
                    Ціни
                  </Link>
                  <Link href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">
                    Контакти
                  </Link>
                  <Button className="bg-orange-600 hover:bg-orange-700 mt-4">Отримати кошторис</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-20 lg:py-32"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src="https://moscow.roads-pro.ru/site/img/new/banner-price-1920-xs.webp"
          alt="Професійне асфальтне будівництво"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="bg-orange-600 text-white mb-6">№1 підрядник з асфальтування в регіоні</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Преміальні асфальтові рішення для
              <span className="text-orange-400"> довговічних доріг</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl">
              Швидка доставка, конкурентні ціни та безкомпромісна якість. Ми постачаємо міцні асфальтові рішення, що
              витримують випробування часом.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8 max-w-md">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-8 w-8 text-orange-400" />
                <div className="text-center">
                  <p className="text-sm text-gray-200 mb-1">Зателефонуйте зараз для безкоштовного кошторису</p>
                  <a
                    href="tel:050 47 000 44"
                    className="text-2xl lg:text-3xl font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    050 47 000 44
                  </a><br />
                  <a
                    href="tel:093 47 000 44"
                    className="text-2xl lg:text-3xl font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    093 47 000 44
                  </a><br />
                  <a
                    href="tel:096 788 88 93"
                    className="text-2xl lg:text-3xl font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    096 788 88 93
                  </a>
                  <p className="text-xs text-gray-300">Цілодобове аварійне обслуговування</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                Замовити безкоштовний кошторис
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent"
              >
                Переглянути наші роботи
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Timer className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="font-semibold">Доставка в той самий день</p>
                  <p className="text-sm text-gray-300">Аварійне обслуговування доступне</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="font-semibold">25-річна гарантія</p>
                  <p className="text-sm text-gray-300">Гарантована якість</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-orange-400" />
                <div>
                  <p className="font-semibold">Сертифікована якість</p>
                  <p className="text-sm text-gray-300">Стандарти, що ведуть галузь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Наші послуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Повний спектр асфальтових рішень</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Від приватних доріжок до комерційних трас — ми надаємо комплексні асфальтові послуги з неперевершеною
              якістю та надійністю.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Гарячий асфальтобетон</CardTitle>
                <CardDescription>Преміальний гарячий асфальт для відмінної міцності та довговічності</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Високотемпературне змішування
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Висока щільність
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Стійкий до погодних умов
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Екологічна суміш</CardTitle>
                <CardDescription>Стійкі асфальтові рішення з вторинних матеріалів</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    30% вторинних матеріалів
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Зниження викидів
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Сертифіковано за LEED
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Холодний асфальтобетон</CardTitle>
                <CardDescription>Універсальне рішення для ремонтів і тимчасових застосувань</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Застосування при будь-якій погоді
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Швидкий ремонт
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Економічно вигідний
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Чому обирають AsphaltPro</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Довговічність та вигідна ціна</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ми поєднуємо передові технології з десятиліттями досвіду, щоб надавати асфальтові рішення, які
                перевищують очікування та вкладаються в бюджет.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex items-start space-x-3">
                  <Timer className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Швидка доставка</h3>
                    <p className="text-sm text-gray-600">Опції в той самий та наступний день</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Гарантія якості</h3>
                    <p className="text-sm text-gray-600">3-роки гарантія на всі роботи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Екологічність</h3>
                    <p className="text-sm text-gray-600">Стійкі матеріали та процеси</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Професійне асфальтне покриття"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Виконаних проєктів</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Відгуки</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Що кажуть наші клієнти</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "AsphaltPro зробили саме те, що обіцяли. Швидко, професійно, а якість просто чудова. Наша стоянка
                виглядає приголомшливо!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Менеджер нерухомості, Metro Plaza</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Найкращі ціни в регіоні, і вони ніколи не йдуть на компроміс із якістю. Ми використовували їх для трьох
                великих проєктів, і вони кожного разу перевищували очікування."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Mike Rodriguez</p>
                  <p className="text-sm text-gray-500">Генеральний підрядник, BuildRight Inc.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Аварійне обслуговування саме тоді, коли це було потрібно найбільше. Вони відновили дорогу і відновили
                рух за лічені години. Неймовірна швидкість реагування!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">David Chen</p>
                  <p className="text-sm text-gray-500">Інженер міста, Metro City</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Ціни</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Прозорі та конкурентні ціни</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Жодних прихованих платежів, жодних сюрпризів. Отримайте преміальний асфальт за цінами, які мають сенс для
              вашого бюджету.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стандартна суміш</CardTitle>
                <CardDescription>Ідеально для приватного та легкого комерційного використання</CardDescription>
                <div className="text-4xl font-bold text-orange-600 mt-4">
                  $85<span className="text-lg text-gray-500">/тонна</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Стандартна міцність
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    5-річна гарантія
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Доставка наступного дня
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Мінімум 5 тонн
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Отримати кошторис
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-orange-200 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-600 text-white">Найпопулярніша</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Преміальна суміш</CardTitle>
                <CardDescription>Підвищена довговічність для зон з великим трафіком</CardDescription>
                <div className="text-4xl font-bold text-orange-600 mt-4">
                  $105<span className="text-lg text-gray-500">/тонна</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Підвищена довговічність
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    15-річна гарантія
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Доставка в той самий день
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Мінімум 3 тонни
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">Отримати кошторис</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Екологічна суміш</CardTitle>
                <CardDescription>Стійке рішення з вторсировини</CardDescription>
                <div className="text-4xl font-bold text-orange-600 mt-4">
                  $95<span className="text-lg text-gray-500">/тонна</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    30% вторинного вмісту
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    10-річна гарантія
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Сертифіковано за LEED
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Мінімум 5 тонн
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Отримати кошторис
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Прайс-лист на асфальтні роботи</h3>
              <p className="text-lg text-gray-600">
                Повний перелік послуг з влаштування асфальтових покриттів та основ
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Перелік послуг</th>
                    <th className="px-6 py-4 text-center font-semibold">Шар (до ущільн.)</th>
                    <th className="px-6 py-4 text-center font-semibold">Ціна, грн./м²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Асфальтні покриття */}
                  <tr className="bg-orange-50">
                    <td className="px-6 py-3 font-bold text-gray-900" colSpan={3}>
                      1. Асфальтні (асфальтобетонні) покриття
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Влаштування верхнього шару з асфальту В-10
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">4-5 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">550,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Влаштування нижнього шару з асфальту КЗ-10
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">5-6 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">460,00</span>
                    </td>
                  </tr>

                  {/* Підстави */}
                  <tr className="bg-orange-50">
                    <td className="px-6 py-3 font-bold text-gray-900" colSpan={3}>
                      2. Підстави
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Влаштування піщаної основи</td>
                    <td className="px-6 py-4 text-center text-gray-600">5-10 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">60,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900"></td>
                    <td className="px-6 py-4 text-center text-gray-600">15 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">80,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Влаштування щебеневої основи (фр. 20х40)</td>
                    <td className="px-6 py-4 text-center text-gray-600">12 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">130,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900"></td>
                    <td className="px-6 py-4 text-center text-gray-600">15 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">156,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Влаштування двошарової щебеневої основи (фр. 40х70 + 20х40)
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">20 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">245,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Пристрій основи із суміші 0х40 (відсів, 5х20, 20х40)
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">5-10 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">170,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Влаштування основи з асфальтної крихти</td>
                    <td className="px-6 py-4 text-center text-gray-600">5 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">100,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900"></td>
                    <td className="px-6 py-4 text-center text-gray-600">10 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">180,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">Влаштування основи з відсіву</td>
                    <td className="px-6 py-4 text-center text-gray-600">5-10 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">80,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Влаштування основи з сухої цементно-піщаної суміші (гарцівка, «худий» бетон)
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">5 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">175,00</span>
                    </td>
                  </tr>

                  {/* Земляні роботи */}
                  <tr className="bg-orange-50">
                    <td className="px-6 py-3 font-bold text-gray-900" colSpan={3}>
                      3. Земляні роботи
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Планування ґрунту (легке профільування поверхні без вивезення ґрунту) та його ущільнення
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">до 10 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">35,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Пристрій «корита» - виїмка, вивезення до 30км, планування та ущільнення ґрунту
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">до 20 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">110,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900"></td>
                    <td className="px-6 py-4 text-center text-gray-600">до 30 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">150,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Пристрій «корита» - виїмка, вивезення до 30км, планування та ущільнення ґрунту
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">5 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">80,00</span>
                    </td>
                  </tr>

                  {/* Ямковий ремонт */}
                  <tr className="bg-orange-50">
                    <td className="px-6 py-3 font-bold text-gray-900" colSpan={3}>
                      4. Ямковий ремонт доріг у Києві
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Ямковий ремонт асфальтового покриття доріг з урахуванням нарізки швів, демонтажу та вивезення старого а/б покриття, підсипки основи, проливки швів бітумом, асфальтування — повний комплекс робіт
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">асф. до 5 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">620,00</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">
                      Ямковий ремонт доріг методом простого асфальтування
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">асф. до 5 см</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-xl font-bold text-orange-600">550,00</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Гарантія якості</h4>
                <p className="text-gray-600 text-sm">
                  Всі роботи виконуються з дотриманням ДБН та ДСТУ
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Власна техніка</h4>
                <p className="text-gray-600 text-sm">
                  Сучасне обладнання для всіх видів асфальтних робіт
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Timer className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Швидке виконання</h4>
                <p className="text-gray-600 text-sm">
                  Дотримання термінів згідно з договором
                </p>
              </Card>
            </div>

            <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Додаткова інформація:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li>• Ціни вказані без ПДВ</li>
                    <li>• Мінімальний обсяг робіт - 100 м²</li>
                    <li>• Знижки при обсязі понад 1000 м²</li>
                    <li>• Безкоштовний виїзд для оцінки робіт</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Зв’яжіться з нами</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Готові розпочати свій проєкт?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Отримайте безкоштовний кошторис сьогодні або поспілкуйтесь з нашими експертами з асфальту щодо ваших
              потреб.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактна інформація</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">(555) 123-ROAD</p>
                    <p className="text-sm text-gray-500">Цілодобове аварійне обслуговування</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Електронна пошта</h4>
                    <p className="text-gray-600">info@asphaltpro.com</p>
                    <p className="text-sm text-gray-500">Відповідаємо протягом 2 годин</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Години роботи</h4>
                    <p className="text-gray-600">
                      Пн-Пт: 7:00 - 18:00
                      <br />
                      Сб-Нд: 9:00 - 18:00
                    </p>
                    <p className="text-sm text-gray-500">Аварійне обслуговування доступне 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Запросити кошторис</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ім’я</label>
                    <Input placeholder="Іван" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Прізвище</label>
                    <Input placeholder="Іваненко" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Електронна пошта</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип проєкту</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Виберіть тип проєкту</option>
                    <option>Приватна доріжка</option>
                    <option>Комерційна парковка</option>
                    <option>Будівництво дороги</option>
                    <option>Ремонт та обслуговування</option>
                    <option>Інше</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Деталі проєкту</label>
                  <Textarea placeholder="Розкажіть про свій проєкт: розміри, терміни, особливі вимоги..." rows={4} />
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                  Отримати безкоштовний кошторис
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">AsphaltPro</h3>
                  <p className="text-xs text-gray-400">Преміальні асфальтові рішення</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Ваш надійний партнер для преміальних асфальтових рішень. Якість, надійність та сервіс, на які можна
                розраховувати.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Послуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Гарячий асфальтобетон
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Холодний асфальтобетон
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Екологічна суміш
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Аварійні ремонти
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компанія</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Наші проєкти
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Кар’єра
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Новини
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакти</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(555) 123-ROAD</li>
                <li>info@asphaltpro.com</li>
                <li>
                  1234 Industrial Blvd
                  <br />
                  Metro City, ST 12345
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} AsphaltPro. Усі права захищені.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Політика конфіденційності
              </Link>
              <Link href="#" className="hover:text-white">
                Умови користування
              </Link>
              <Link href="#" className="hover:text-white">
                Карта сайту
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
