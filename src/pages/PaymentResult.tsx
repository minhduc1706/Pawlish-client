import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { CheckCircle, XCircle, AlertCircle, Home, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type PaymentStatusType = "success" | "error" | "unknown" | "loading"

const PaymentResult = () => {
  const location = useLocation()
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<PaymentStatusType>("loading")
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const responseCode = queryParams.get("vnp_ResponseCode")
    const txnRef = queryParams.get("vnp_TxnRef")

    setOrderId(txnRef)

    if (responseCode) {
      if (responseCode === "00") {
        setPaymentStatus("Thanh toán thành công")
        setStatusType("success")
      } else if (responseCode === "99") {
        setPaymentStatus("Có lỗi xảy ra trong quá trình thanh toán")
        setStatusType("error")
      } else {
        setPaymentStatus(`Thanh toán thất bại (Mã lỗi: ${responseCode})`)
        setStatusType("error")
      }
    } else {
      setPaymentStatus("Không tìm thấy thông tin thanh toán")
      setStatusType("unknown")
    }
  }, [location.search])

  const getStatusIcon = () => {
    switch (statusType) {
      case "success":
        return <CheckCircle className="h-16 w-16 text-green-500" />
      case "error":
        return <XCircle className="h-16 w-16 text-red-500" />
      case "unknown":
        return <AlertCircle className="h-16 w-16 text-amber-500" />
      case "loading":
        return <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
    }
  }

  const getStatusColor = () => {
    switch (statusType) {
      case "success":
        return "bg-green-50 border-green-100"
      case "error":
        return "bg-red-50 border-red-100"
      case "unknown":
        return "bg-amber-50 border-amber-100"
      case "loading":
        return "bg-blue-50 border-blue-100"
    }
  }

  return (
    <div className=" flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg border-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center">Kết quả thanh toán</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                {getStatusIcon()}
              </motion.div>

              <div className={`w-full rounded-lg p-6 border ${getStatusColor()} text-center`}>
                {statusType === "loading" ? (
                  <p className="text-lg font-medium">Đang xử lý...</p>
                ) : (
                  <>
                    <p className="text-lg font-medium mb-2">{paymentStatus}</p>
                    {orderId && statusType === "success" && (
                      <p className="text-sm text-gray-600">Mã đơn hàng: {orderId}</p>
                    )}
                    {statusType === "error" && (
                      <p className="text-sm text-gray-600 mt-2">Vui lòng liên hệ hỗ trợ hoặc thử lại</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </CardContent>

          <Separator className="my-2" />

          <CardFooter className="flex flex-col gap-3 pt-4">
            <Link to="/" className="w-full">
              <Button className="w-full gap-2 bg-gray-200 hover:bg-gray-300 cursor-pointer">
                <Home className="h-4 w-4" />
                Quay về trang chủ
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

export default PaymentResult

