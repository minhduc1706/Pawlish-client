import { format } from "date-fns"
import { Calendar, ChevronLeft, Clock, CreditCard, FileText, PawPrintIcon as Paw, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useAppointment } from "@/queries/useAppointment"
import { vi } from "date-fns/locale"
import { AppointmentStatus } from "@/interfaces/Appointment"

export default function AppointmentHistoryPage() {
  const { data: appointments, isLoading, error } = useAppointment()

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl py-10 px-4 md:px-6">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4 group">
            <Link to="/">
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Trở về trang chủ
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-center md:text-left">Lịch sử đặt lịch</h1>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="shadow-sm overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j}>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-5 w-full" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-red-500 mb-4 text-center">
          <p className="text-lg font-medium">Có lỗi xảy ra khi tải lịch sử.</p>
          <p className="text-sm text-muted-foreground mt-1">Vui lòng thử lại sau.</p>
        </div>
        <Button onClick={() => window.location.reload()}>Thử lại</Button>
      </div>
    )
  }

  const getStatusDetails = (status: AppointmentStatus) => {
    switch (status) {
      case "confirmed":
        return { label: "Đã xác nhận", variant: "success", color: "bg-green-100 text-green-800" }
      case "pending":
        return { label: "Đang chờ", variant: "secondary", color: "bg-yellow-100 text-yellow-800" }
      case "cancelled":
        return { label: "Đã hủy", variant: "destructive", color: "bg-red-100 text-red-800" }
      default:
        return { label: status, variant: "outline", color: "bg-gray-100 text-gray-800" }
    }
  }

  return (
    <div className="container mx-auto max-w-4xl py-10 px-4 md:px-6">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4 group">
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Trở về trang chủ
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-center md:text-left">Lịch sử đặt lịch</h1>
      </div>

      <div className="space-y-6">
        {appointments && appointments.length > 0 ? (
          appointments.map((appointment) => {
            const statusDetails = getStatusDetails(appointment.status!)
            return (
              <Card
                key={appointment._id}
                className="shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-l-4"
                style={{
                  borderLeftColor:
                    appointment.status === "confirmed"
                      ? "rgb(34, 197, 94)"
                      : appointment.status === "pending"
                        ? "rgb(234, 179, 8)"
                        : "rgb(239, 68, 68)",
                }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{appointment.service_id.name}</span>
                    <Badge className={`${statusDetails.color} px-3 py-1 rounded-full text-xs font-medium`}>
                      {statusDetails.label}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                    <div className="flex items-start space-x-3">
                      <Paw className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Thú cưng</p>
                        <p className="font-medium">
                          {appointment.pet_id.name}
                          <span className="text-sm text-muted-foreground ml-1">({appointment.pet_id.species})</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Nhân viên</p>
                        <p className="font-medium">{appointment.staff_id.full_name}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex space-x-1 mt-0.5 flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Ngày & Giờ</p>
                        <p className="font-medium">
                          {format(new Date(appointment.date), "EEEE, dd/MM/yyyy", { locale: vi })}
                          <span className="font-semibold text-primary ml-1">{appointment.time}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CreditCard className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Chi phí</p>
                        <p className="font-medium text-primary">{appointment.amount.toLocaleString()} VND</p>
                      </div>
                    </div>

                    {appointment.notes && (
                      <div className="col-span-1 md:col-span-2 flex items-start space-x-3 mt-2 bg-muted/30 p-3 rounded-lg">
                        <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Ghi chú</p>
                          <p className="font-medium">{appointment.notes}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })
        ) : (
          <div className="text-center py-16 px-4 rounded-lg border-2 border-dashed">
            <Paw className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Chưa có lịch hẹn nào</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Bạn chưa đặt lịch hẹn nào cho thú cưng của mình. Hãy đặt lịch để chăm sóc thú cưng của bạn.
            </p>
            <Button asChild>
              <Link to="/booking">Đặt lịch ngay</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

