"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Check, ChevronLeft, Dog, Info, Loader2, Mail, MapPin, Phone, CreditCard, Clock, User } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useService } from "@/queries/useService"
import { useStaff } from "@/queries/useStaff"
import { useServiceCategory } from "@/queries/useServiceCategory"
import type { Appointment, Pet, Staff } from "@/interfaces/Appointment"
import type { User as UserType } from "@/interfaces/User"
import type { Service } from "@/interfaces/Service"
import { createVNPayPayment } from "@/api/payment"

const petTypes = ["Dog", "Cat", "Rabbit", "Other"]
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

type BookingStep = "service" | "staff" | "datetime" | "pet" | "contact" | "payment" | "confirmation"

export default function BookingPage() {
  const { data: services, isLoading: isServicesLoading, error: servicesError } = useService()
  const { data: staffs, isLoading: isStaffLoading, error: staffError } = useStaff()
  const { data: serviceCategories, isLoading: isServiceCategoryLoading } = useServiceCategory()
  const location = useLocation()

  const [currentStep, setCurrentStep] = useState<BookingStep>("service")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>("all")
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null)

  // Form state
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [petInfo, setPetInfo] = useState<Pet>({
    name: "",
    species: "",
    breed: "",
    age: 0,
    weight: 0,
    gender: "",
    user_id: { full_name: "", email: "", phone: "", address: "" },
  })
  const [contactInfo, setContactInfo] = useState<UserType>({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [notes, setNotes] = useState<string>("")

  // Initialize selected service from URL parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const serviceParam = searchParams.get("service")
    if (serviceParam && services) {
      const service = services.find((s) => s._id === serviceParam)
      if (service) setSelectedService(service)
    }
  }, [location.search, services])

  // Handle VNPay response
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const responseCode = queryParams.get("vnp_ResponseCode")
    const orderId = queryParams.get("vnp_TxnRef")

    if (responseCode) {
      if (responseCode === "00") {
        setPaymentStatus(`Thanh toán thành công cho đơn hàng ${orderId}`)
        setCurrentStep("confirmation")
      } else {
        setPaymentStatus("Thanh toán thất bại. Vui lòng thử lại.")
      }
    }
  }, [location.search])

  const handleServiceSelect = (serviceId: string) => {
    const service = services?.find((s) => s._id === serviceId)
    if (service) {
      setSelectedService(service)
      setSelectedStaff(null)
    }
  }

  const handleStaffSelect = (staffId: string) => {
    const staff = Array.isArray(staffs) ? staffs.find((s) => s._id === staffId) : null
    if (staff) setSelectedStaff(staff)
  }

  const handlePetInfoChange = (field: keyof Pet, value: string | number) => {
    setPetInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleContactInfoChange = (field: keyof UserType, value: string) => {
    setContactInfo((prev) => ({ ...prev, [field]: value }))
    setPetInfo((prev) => ({ ...prev, user_id: { ...prev.user_id, [field]: value } }))
  }

  const handleNextStep = () => {
    const steps: BookingStep[] = ["service", "staff", "datetime", "pet", "contact", "payment", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePreviousStep = () => {
    const steps: BookingStep[] = ["service", "staff", "datetime", "pet", "contact", "payment", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePayment = async () => {
    if (!selectedService || !selectedStaff || !date || !timeSlot) {
      alert("Vui lòng hoàn thành tất cả các bước trước khi thanh toán!")
      return
    }

    setIsLoading(true)
    try {
      const appointment: Appointment = {
        user_id: contactInfo,
        pet_id: petInfo,
        service_id: selectedService,
        date: date!,
        time: timeSlot,
        status: "pending",
        staff_id: selectedStaff,
        notes: notes || undefined,
        category_id: selectedService.category_id,
      }

      // Call VNPay API
      const paymentUrl = await createVNPayPayment({
        amount: selectedService.price,
        products: [{ product_id: selectedService._id, quantity: 1 }],
      })
      window.location.href = paymentUrl
    } catch (error) {
      console.error("Error initiating VNPay payment:", error)
      alert("Có lỗi xảy ra khi khởi tạo thanh toán VNPay!")
      setIsLoading(false)
    }
  }

  const renderStepIndicator = () => {
    const steps = [
      { id: "service", label: "Dịch vụ", icon: <Dog className="h-4 w-4" /> },
      { id: "staff", label: "Nhân viên", icon: <User className="h-4 w-4" /> },
      { id: "datetime", label: "Ngày & Giờ", icon: <Clock className="h-4 w-4" /> },
      { id: "pet", label: "Thú cưng", icon: <Dog className="h-4 w-4" /> },
      { id: "contact", label: "Liên hệ", icon: <Phone className="h-4 w-4" /> },
      { id: "payment", label: "Thanh toán", icon: <CreditCard className="h-4 w-4" /> },
    ]

    return (
      <div className="mb-8 overflow-x-auto">
        <div className="flex justify-between min-w-max">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
                    currentStep === step.id
                      ? "bg-primary text-primary-foreground shadow-lg scale-110"
                      : steps.indexOf(steps.find((s) => s.id === currentStep)!) > index
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {steps.indexOf(steps.find((s) => s.id === currentStep)!) > index ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium hidden md:block",
                    currentStep === step.id ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-12 h-0.5 mx-1",
                    steps.indexOf(steps.find((s) => s.id === currentStep)!) > index ? "bg-primary/20" : "bg-muted",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderServiceSelection = () => {
    if (isServicesLoading || isServiceCategoryLoading) {
      return (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-lg">Đang tải dịch vụ...</span>
        </div>
      )
    }

    if (servicesError) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-red-500 mb-4">Không thể tải dịch vụ. Vui lòng thử lại sau.</p>
          <Button onClick={() => window.location.reload()}>Tải lại trang</Button>
        </div>
      )
    }

    const filteredServices =
      selectedCategoryId && selectedCategoryId !== "all"
        ? services?.filter((service) => service.category_id._id === selectedCategoryId)
        : services

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-center md:text-left">Chọn dịch vụ</h2>
          <p className="text-muted-foreground text-center md:text-left">
            Chọn dịch vụ chăm sóc phù hợp nhất với thú cưng của bạn.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Label htmlFor="category-filter" className="md:whitespace-nowrap">
            Lọc theo danh mục:
          </Label>
          <Select value={selectedCategoryId || "all"} onValueChange={setSelectedCategoryId}>
            <SelectTrigger id="category-filter" className="w-full md:w-[250px]">
              <SelectValue placeholder="Tất cả danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              {serviceCategories?.map((category) => (
                <SelectItem key={category._id} value={category._id!}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices?.map((service) => (
            <Card
              key={service._id}
              className={cn(
                "cursor-pointer transition-all hover:shadow-md",
                selectedService?._id === service._id
                  ? "border-primary shadow-md ring-2 ring-primary/20"
                  : "hover:border-primary/20",
              )}
              onClick={() => handleServiceSelect(service._id)}
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {service.category_id.name}
                    </Badge>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{service.duration} phút</span>
                  </div>
                  <div className="text-lg font-bold text-primary">${service.price.toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleNextStep}
            disabled={!selectedService}
            className="transition-all duration-200 hover:scale-105"
            size="lg"
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    )
  }

  const renderStaffSelection = () => {
    if (isStaffLoading) {
      return (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-lg">Đang tải thông tin nhân viên...</span>
        </div>
      )
    }

    if (staffError) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-red-500 mb-4">Không thể tải thông tin nhân viên. Vui lòng thử lại sau.</p>
          <Button onClick={() => window.location.reload()}>Tải lại trang</Button>
        </div>
      )
    }

    const availableStaff =
      Array.isArray(staffs) &&
      staffs?.filter((staff) => staff.service_id?.some((service: Service) => service._id === selectedService?._id))

    if (!availableStaff || availableStaff.length === 0) {
      return (
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Chọn nhân viên</h2>
            <p className="text-muted-foreground">Không có nhân viên nào cho dịch vụ {selectedService?.name}.</p>
          </div>
          <div className="flex justify-center pt-4">
            <Button variant="outline" onClick={handlePreviousStep} size="lg">
              <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
            </Button>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-bold">Chọn nhân viên</h2>
          <p className="text-muted-foreground">
            Chọn người sẽ chăm sóc thú cưng của bạn cho dịch vụ {selectedService?.name}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availableStaff.map((staff) => (
            <Card
              key={staff._id}
              className={cn(
                "cursor-pointer transition-all hover:shadow-md overflow-hidden",
                selectedStaff?._id === staff._id
                  ? "border-primary shadow-md ring-2 ring-primary/20"
                  : "hover:border-primary/20",
              )}
              onClick={() => handleStaffSelect(staff._id!)}
            >
              <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                <User className="h-16 w-16 text-primary/70" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-center">{staff.full_name}</CardTitle>
                <CardDescription className="text-center">{staff.email}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={handlePreviousStep} size="lg">
            <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
          </Button>
          <Button
            onClick={handleNextStep}
            disabled={!selectedStaff}
            className="transition-all duration-200 hover:scale-105"
            size="lg"
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    )
  }

  const renderDateTimeSelection = () => (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold">Chọn ngày và giờ</h2>
        <p className="text-muted-foreground">Chọn thời gian bạn muốn đưa thú cưng đến.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
      <Card className="overflow-hidden">
  <CardHeader>
    <CardTitle className="text-center">Chọn ngày</CardTitle>
  </CardHeader>
  <CardContent className="p-0">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0}
      className="custom-calendar"
    />
  </CardContent>
</Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Chọn giờ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={timeSlot === slot ? "default" : "outline"}
                  className={cn(
                    "w-full justify-center",
                    timeSlot === slot
                      ? "bg-primary text-primary-foreground font-bold shadow-md hover:bg-primary/90"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setTimeSlot(slot)}
                >
                  {slot}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handlePreviousStep} size="lg">
          <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={!date || !timeSlot}
          className="transition-all duration-200 hover:scale-105"
          size="lg"
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  )

  const renderPetInfoForm = () => (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold">Thông tin thú cưng</h2>
        <p className="text-muted-foreground">
          Cho chúng tôi biết về thú cưng của bạn để chúng tôi có thể chăm sóc tốt nhất.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="pet-name" className="text-sm font-medium">
                Tên thú cưng
              </Label>
              <Input
                id="pet-name"
                value={petInfo.name}
                onChange={(e) => handlePetInfoChange("name", e.target.value)}
                placeholder="VD: Buddy"
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pet-species" className="text-sm font-medium">
                Loài
              </Label>
              <Select onValueChange={(value) => handlePetInfoChange("species", value)} value={petInfo.species}>
                <SelectTrigger id="pet-species" className="transition-all focus:ring-2 focus:ring-primary/20">
                  <SelectValue placeholder="Chọn loài thú cưng" />
                </SelectTrigger>
                <SelectContent>
                  {petTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pet-breed" className="text-sm font-medium">
                Giống
              </Label>
              <Input
                id="pet-breed"
                value={petInfo.breed}
                onChange={(e) => handlePetInfoChange("breed", e.target.value)}
                placeholder="VD: Golden Retriever"
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pet-gender" className="text-sm font-medium">
                Giới tính
              </Label>
              <Select onValueChange={(value) => handlePetInfoChange("gender", value)} value={petInfo.gender}>
                <SelectTrigger id="pet-gender" className="transition-all focus:ring-2 focus:ring-primary/20">
                  <SelectValue placeholder="Chọn giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Đực</SelectItem>
                  <SelectItem value="female">Cái</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pet-age" className="text-sm font-medium">
                Tuổi (năm)
              </Label>
              <Input
                id="pet-age"
                value={petInfo.age || ""}
                onChange={(e) => handlePetInfoChange("age", Number.parseInt(e.target.value) || 0)}
                placeholder="VD: 3"
                type="number"
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pet-weight" className="text-sm font-medium">
                Cân nặng (kg)
              </Label>
              <Input
                id="pet-weight"
                value={petInfo.weight || ""}
                onChange={(e) => handlePetInfoChange("weight", Number.parseFloat(e.target.value) || 0)}
                placeholder="VD: 5"
                type="number"
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handlePreviousStep} size="lg">
          <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={!petInfo.name || !petInfo.species || !petInfo.gender}
          className="transition-all duration-200 hover:scale-105"
          size="lg"
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  )

  const renderContactInfoForm = () => (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
        <p className="text-muted-foreground">Vui lòng cung cấp thông tin liên hệ của bạn để xác nhận đặt lịch.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="full-name" className="text-sm font-medium">
                Họ và tên
              </Label>
              <Input
                id="full-name"
                value={contactInfo.full_name}
                onChange={(e) => handleContactInfoChange("full_name", e.target.value)}
                placeholder="VD: Nguyễn Văn A"
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => handleContactInfoChange("email", e.target.value)}
                  placeholder="VD: example@gmail.com"
                  className="pl-10 transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Số điện thoại
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) => handleContactInfoChange("phone", e.target.value)}
                  placeholder="VD: 0912345678"
                  className="pl-10 transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Địa chỉ
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="address"
                  value={contactInfo.address}
                  onChange={(e) => handleContactInfoChange("address", e.target.value)}
                  placeholder="VD: 123 Đường ABC, Quận XYZ, TP. HCM"
                  className="pl-10 transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="notes" className="text-sm font-medium">
                Ghi chú (Tùy chọn)
              </Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Các hướng dẫn hoặc ghi chú bổ sung..."
                rows={3}
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handlePreviousStep} size="lg">
          <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Button
          onClick={handleNextStep}
          disabled={!contactInfo.full_name || !contactInfo.email || !contactInfo.phone}
          className="transition-all duration-200 hover:scale-105"
          size="lg"
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  )

  const renderPaymentForm = () => (
    <div className="space-y-6">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold">Thanh toán</h2>
        <p className="text-muted-foreground">Hoàn tất đặt lịch bằng cách thanh toán.</p>
      </div>

      {/* Payment status notification */}
      {paymentStatus && (
        <div
          className={cn(
            "mt-4 p-6 rounded-lg border shadow-sm transition-all duration-300 animate-fade-in",
            paymentStatus.includes("thành công") ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200",
          )}
        >
          <p
            className={cn(
              "text-center text-lg font-medium",
              paymentStatus.includes("thành công") ? "text-green-600" : "text-red-600",
            )}
          >
            {paymentStatus}
          </p>
          <Button
            onClick={() => setPaymentStatus(null)}
            className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white"
            variant="secondary"
          >
            Đóng
          </Button>
        </div>
      )}

      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardTitle className="text-center">Tóm tắt đặt lịch</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Dịch vụ</p>
                <p className="font-medium">{selectedService?.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Danh mục</p>
                <p className="font-medium">{selectedService?.category_id.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nhân viên</p>
                <p className="font-medium">{selectedStaff?.full_name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ngày</p>
                <p className="font-medium">{date ? format(date, "PPP") : ""}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Giờ</p>
                <p className="font-medium">{timeSlot}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Thú cưng</p>
                <p className="font-medium">
                  {petInfo.name} ({petInfo.species})
                </p>
              </div>
            </div>

            {notes && (
              <div>
                <p className="text-sm text-muted-foreground">Ghi chú</p>
                <p className="font-medium">{notes}</p>
              </div>
            )}

            <Separator className="my-4" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Tổng cộng:</span>
              <span className="text-2xl font-bold text-primary">${selectedService?.price.toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={handlePreviousStep} size="lg">
          <ChevronLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Button
          onClick={handlePayment}
          disabled={isLoading}
          className="bg-[#4CAF50] hover:bg-[#45a049] text-white transition-all duration-200 hover:scale-105"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Đang xử lý...
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              Thanh toán VNPay ${selectedService?.price.toLocaleString()}
            </>
          )}
        </Button>
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-full bg-green-100 p-6 mb-4">
          <Check className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-center">Đặt lịch thành công!</h2>
        <p className="text-muted-foreground text-center mt-2">
          Cảm ơn bạn đã đặt lịch tại PetSpa. Chúng tôi đã gửi email xác nhận đến {contactInfo.email}.
        </p>
      </div>

      <Card className="overflow-hidden border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-100 to-green-50">
          <CardTitle className="text-center">Chi tiết đặt lịch</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Dịch vụ</p>
              <p className="font-medium">{selectedService?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Danh mục</p>
              <p className="font-medium">{selectedService?.category_id.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Nhân viên</p>
              <p className="font-medium">{selectedStaff?.full_name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ngày & Giờ</p>
              <p className="font-medium">
                {date ? format(date, "PPP") : ""} lúc {timeSlot}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Thú cưng</p>
              <p className="font-medium">
                {petInfo.name} ({petInfo.breed})
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Đã thanh toán</p>
              <p className="font-medium text-green-600">${selectedService?.price.toLocaleString()}</p>
            </div>
            {notes && (
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Ghi chú</p>
                <p className="font-medium">{notes}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
        <h3 className="font-medium text-blue-800 mb-3">Lưu ý quan trọng:</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-blue-700">Vui lòng đến sớm 10 phút trước giờ hẹn.</p>
          </div>
          <div className="flex items-start space-x-3">
            <Dog className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-blue-700">
              Nhớ mang theo hồ sơ tiêm chủng của thú cưng nếu đây là lần đầu tiên bạn đến.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button asChild size="lg" className="transition-all duration-200 hover:scale-105">
          <Link to="/">Trở về trang chủ</Link>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="mx-auto max-w-4xl py-10 px-4 md:px-6">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 group">
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Trở về trang chủ
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center md:text-left">Đặt lịch chăm sóc thú cưng</h1>
      </div>

      {currentStep !== "confirmation" && renderStepIndicator()}

      <div className="bg-white rounded-lg border shadow-sm p-6 transition-all duration-300">
        {currentStep === "service" && renderServiceSelection()}
        {currentStep === "staff" && renderStaffSelection()}
        {currentStep === "datetime" && renderDateTimeSelection()}
        {currentStep === "pet" && renderPetInfoForm()}
        {currentStep === "contact" && renderContactInfoForm()}
        {currentStep === "payment" && renderPaymentForm()}
        {currentStep === "confirmation" && renderConfirmation()}
      </div>
    </div>
  )
}

