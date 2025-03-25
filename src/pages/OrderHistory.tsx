import { useState, useEffect } from "react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  CalendarIcon,
  SearchIcon,
  EyeIcon,
  PackageIcon,
  TruckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ArrowUpDownIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Order } from "@/interfaces/Order";
import { useAppSelector } from "@/store/hooks";
import { useCustomerOrder } from "@/queries/useOrder";

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return (
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1"
        >
          <ClockIcon className="h-3 w-3" /> Chờ xác nhận
        </Badge>
      );
    case "processing":
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1"
        >
          <PackageIcon className="h-3 w-3" /> Đang xử lý
        </Badge>
      );
    case "shipped":
      return (
        <Badge
          variant="outline"
          className="bg-indigo-50 text-indigo-700 border-indigo-200 flex items-center gap-1"
        >
          <TruckIcon className="h-3 w-3" /> Đang giao
        </Badge>
      );
    case "delivered":
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
        >
          <CheckCircleIcon className="h-3 w-3" /> Đã giao
        </Badge>
      );
    case "canceled":
      return (
        <Badge
          variant="outline"
          className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1"
        >
          <XCircleIcon className="h-3 w-3" /> Đã hủy
        </Badge>
      );
    default:
      return <Badge variant="outline">Không xác định</Badge>;
  }
};

const OrderHistory = () => {
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | "all">("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  const { data: orders, isLoading, error } = useCustomerOrder(user?._id || "");

  useEffect(() => {
    if (!orders) {
      console.log("Orders is null or undefined");
      setFilteredOrders([]);
      return;
    }
    console.log("Orders from API:", orders);

    let result: Order[] = orders;

    if (searchTerm) {
      result = result.filter((order) => {
        const idMatch = order._id
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());
        const productMatch = order.products?.some((item) =>
          item.product_id.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return idMatch || productMatch;
      });
    }

    if (statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter);
    }

    if (date && date instanceof Date) {
      result = result.filter((order) => {
        const orderDate = order.order_date ? new Date(order.order_date) : null;
        return (
          orderDate &&
          orderDate.getDate() === date.getDate() &&
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getFullYear() === date.getFullYear()
        );
      });
    }

    result = result.sort((a, b) => {
      const dateA = a.order_date ? new Date(a.order_date).getTime() : 0;
      const dateB = b.order_date ? new Date(b.order_date).getTime() : 0;
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    console.log("Filtered orders:", result);
    setFilteredOrders(result);
  }, [orders, searchTerm, statusFilter, sortOrder, date]);

  const handleViewDetail = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setDate(undefined);
    setSortOrder("desc");
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="container mx-auto py-6 px-4 max-w-6xl">
      <Card className="border-none">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold">
                Lịch sử đơn hàng
              </CardTitle>
              <CardDescription>
                Xem và quản lý các đơn hàng của bạn
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetFilters}
                className="h-9"
              >
                Đặt lại bộ lọc
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={toggleSortOrder}
                className="h-9 flex items-center gap-1"
              >
                <ArrowUpDownIcon className="h-4 w-4" />
                {sortOrder === "desc" ? "Mới nhất" : "Cũ nhất"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm theo mã đơn hàng hoặc sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => {
                    console.log("Search term:", e.target.value);
                    setSearchTerm(e.target.value);
                  }}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Select
                  value={statusFilter}
                  onValueChange={(value) => setStatusFilter(value)}
                >
                  <SelectTrigger className="w-[180px] cursor-pointer">
                    <SelectValue placeholder="Trạng thái" />
                  </SelectTrigger>
                  <SelectContent className="rounded-sm border-none bg-gray-50 text-base">
                    <SelectItem value="all">Tất cả trạng thái</SelectItem>
                    <SelectItem value="pending">Chờ xác nhận</SelectItem>
                    <SelectItem value="processing">Đang xử lý</SelectItem>
                    <SelectItem value="shipped">Đang giao</SelectItem>
                    <SelectItem value="delivered">Đã giao</SelectItem>
                    <SelectItem value="canceled">Đã hủy</SelectItem>
                  </SelectContent>
                </Select>

                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[180px] justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "dd/MM/yyyy", { locale: vi })
                      ) : (
                        <span>Chọn ngày</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        setIsCalendarOpen(false);
                      }}
                      initialFocus
                      className="rounded-md border border-gray-200 bg-white p-3"
                      modifiers={{
                        today: new Date(),
                      }}
                      modifiersClassNames={{
                        today: "today-bold",
                      }}
                    />
                    {date && (
                      <div className="p-3 border-t border-border">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDate(undefined)}
                          className="w-full"
                        >
                          Xóa ngày đã chọn
                        </Button>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-8 w-[250px]" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <XCircleIcon className="mx-auto h-12 w-12 text-red-500" />
                <h3 className="mt-4 text-lg font-semibold">
                  Lỗi khi tải đơn hàng
                </h3>
                <p className="text-muted-foreground mt-2">
                  Không thể tải danh sách đơn hàng.
                </p>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <PackageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">
                  Không tìm thấy đơn hàng
                </h3>
                <p className="text-muted-foreground mt-2">
                  Không có đơn hàng nào phù hợp với bộ lọc của bạn.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={handleResetFilters}
                >
                  Xóa bộ lọc
                </Button>
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Mã đơn hàng</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Ngày đặt
                      </TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="text-right">Tổng tiền</TableHead>
                      <TableHead className="w-[100px] text-center">
                        Thao tác
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell className="font-medium">
                          {order._id}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {order.order_date
                            ? format(new Date(order.order_date), "dd/MM/yyyy", {
                                locale: vi,
                              })
                            : "Chưa xác định"}
                        </TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="text-right font-medium">
                          {formatCurrency(order.total_amount)}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleViewDetail(order)}
                          >
                            <EyeIcon className="h-4 w-4" />
                            <span className="sr-only">Xem chi tiết</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedOrder && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  Chi tiết đơn hàng #{selectedOrder._id}
                </DialogTitle>
                <DialogDescription>
                  Đặt ngày{" "}
                  {selectedOrder.order_date
                    ? format(new Date(selectedOrder.order_date), "dd/MM/yyyy", {
                        locale: vi,
                      })
                    : "Chưa xác định"}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Trạng thái đơn hàng
                    </h3>
                    <div className="mt-1">
                      {getStatusBadge(selectedOrder.status)}
                    </div>
                  </div>
                  <div className="text-right">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Phương thức thanh toán
                    </h3>
                    <p className="mt-1 font-medium">VNPay</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Sản phẩm</h3>
                  <div className="space-y-4">
                    {selectedOrder.products.map((item) => (
                      <div key={item.product_id._id} className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <img
                            src={
                              item.product_id.imgUrl ||
                              "/placeholder.svg?height=80&width=80"
                            }
                            alt={item.product_id.name}
                            className="h-16 w-16 rounded-md object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium">{item.product_id.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatCurrency(item.product_id.price)} x {item.quantity}
                          </p>
                        </div>
                        <div className="text-right font-medium">
                          {formatCurrency(item.product_id.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Địa chỉ giao hàng</h3>
                  <div className="rounded-md border p-4 bg-muted/40">
                    <p className="font-medium">
                      {selectedOrder.user_id.full_name || "N/A"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedOrder.shipping_address || "Chưa cung cấp"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Tổng cộng</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Tạm tính</span>
                      <span>
                        {formatCurrency(selectedOrder.total_amount * 0.9)}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Phí vận chuyển
                      </span>
                      <span>{formatCurrency(30000)}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">
                        Thuế (VAT 10%)
                      </span>
                      <span>
                        {formatCurrency(selectedOrder.total_amount * 0.1)}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between py-1 font-medium">
                      <span>Tổng cộng</span>
                      <span>{formatCurrency(selectedOrder.total_amount)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button
                className="cursor-pointer"
                  variant="outline"
                  onClick={() => setIsDetailOpen(false)}
                >
                  Đóng
                </Button>
                {(selectedOrder.status === "pending" ||
                  selectedOrder.status === "processing") && (
                  <Button variant="destructive">Hủy đơn hàng</Button>
                )}
                {selectedOrder.status === "delivered" && (
                  <Button variant="default">Mua lại</Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderHistory;
