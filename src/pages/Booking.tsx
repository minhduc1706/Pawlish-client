import { useEffect, useState } from "react"

import { Link, useLocation } from "react-router-dom"
import { CalendarIcon, Check, ChevronLeft, CreditCard, Dog, Info, Loader2, Mail, MapPin, Phone } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const services = [
  {
    id: "basic",
    name: "Basic Grooming",
    description: "Bath, blow dry, brush out, nail trimming, ear cleaning",
    price: 50,
    duration: 60, // minutes
  },
  {
    id: "full",
    name: "Full Grooming",
    description: "Basic grooming plus haircut, styling, teeth brushing, paw pad trimming",
    price: 80,
    duration: 90, // minutes
  },
  {
    id: "spa",
    name: "Spa Package",
    description: "Full grooming plus aromatherapy massage, paw moisturizing, facial scrub",
    price: 120,
    duration: 120, // minutes
  },
]

const petTypes = ["Dog", "Cat", "Rabbit", "Other"]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

type BookingStep = "service" | "datetime" | "pet" | "contact" | "payment" | "confirmation"

export default function BookingPage() {


  const location = useLocation()

  const [currentStep, setCurrentStep] = useState<BookingStep>("service")
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [selectedService, setSelectedService] = useState<string>("")
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [petInfo, setPetInfo] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    specialNeeds: "",
  })
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<string>("card")
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  })

  // Initialize selected service from URL parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const serviceParam = searchParams.get("service")
    if (serviceParam && services.some((s) => s.id === serviceParam)) {
      setSelectedService(serviceParam)
    }
  }, [location.search])

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
  }

  const handlePetInfoChange = (field: string, value: string) => {
    setPetInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleContactInfoChange = (field: string, value: string) => {
    setContactInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleCardInfoChange = (field: string, value: string) => {
    setCardInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    const steps: BookingStep[] = ["service", "datetime", "pet", "contact", "payment", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)

    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
      window.scrollTo(0, 0)
    }
  }

  const handlePreviousStep = () => {
    const steps: BookingStep[] = ["service", "datetime", "pet", "contact", "payment", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)

    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
      window.scrollTo(0, 0)
    }
  }

  const handleSubmitPayment = () => {
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep("confirmation")
      window.scrollTo(0, 0)
    }, 2000)
  }

  const getSelectedServiceDetails = () => {
    return services.find((service) => service.id === selectedService)
  }

  const renderStepIndicator = () => {
    const steps = [
      { id: "service", label: "Service" },
      { id: "datetime", label: "Date & Time" },
      { id: "pet", label: "Pet Info" },
      { id: "contact", label: "Contact" },
      { id: "payment", label: "Payment" },
    ]

    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium",
                  currentStep === step.id
                    ? "bg-blue-500 text-white"
                    : steps.indexOf(steps.find((s) => s.id === currentStep)!) > index
                      ? "bg-blue-100 text-blue-500"
                      : "bg-gray-100 text-gray-500",
                )}
              >
                {steps.indexOf(steps.find((s) => s.id === currentStep)!) > index ? (
                  <Check className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-8 h-0.5",
                    steps.indexOf(steps.find((s) => s.id === currentStep)!) > index ? "bg-blue-100" : "bg-gray-100",
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
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Select a Service</h2>
          <p className="text-gray-500">Choose the grooming service that best fits your pet's needs.</p>
        </div>

        <div className="grid gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={cn(
                "cursor-pointer transition-colors hover:bg-gray-50",
                selectedService === service.id && "border-blue-500",
              )}
              onClick={() => handleServiceSelect(service.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>{service.name}</CardTitle>
                  <div className="text-xl font-bold">${service.price}</div>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 text-sm text-gray-500">Duration: {service.duration} minutes</CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button onClick={handleNextStep} disabled={!selectedService}>
            Continue
          </Button>
        </div>
      </div>
    )
  }

  const renderDateTimeSelection = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Select Date & Time</h2>
          <p className="text-gray-500">Choose when you'd like to bring your pet in for grooming.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-gray-500")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={
                    (date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 // Disable Sundays
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Select Time</Label>
            <Select onValueChange={setTimeSlot} value={timeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousStep}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button onClick={handleNextStep} disabled={!date || !timeSlot}>
            Continue
          </Button>
        </div>
      </div>
    )
  }

  const renderPetInfoForm = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Pet Information</h2>
          <p className="text-gray-500">Tell us about your pet so we can provide the best care.</p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="pet-name">Pet Name</Label>
            <Input
              id="pet-name"
              value={petInfo.name}
              onChange={(e) => handlePetInfoChange("name", e.target.value)}
              placeholder="e.g., Buddy"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="pet-type">Pet Type</Label>
            <Select onValueChange={(value) => handlePetInfoChange("type", value)} value={petInfo.type}>
              <SelectTrigger id="pet-type">
                <SelectValue placeholder="Select pet type" />
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

          <div className="grid gap-2">
            <Label htmlFor="pet-breed">Breed</Label>
            <Input
              id="pet-breed"
              value={petInfo.breed}
              onChange={(e) => handlePetInfoChange("breed", e.target.value)}
              placeholder="e.g., Golden Retriever"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="pet-age">Age (years)</Label>
            <Input
              id="pet-age"
              value={petInfo.age}
              onChange={(e) => handlePetInfoChange("age", e.target.value)}
              placeholder="e.g., 3"
              type="number"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="special-needs">Special Needs or Instructions</Label>
            <Textarea
              id="special-needs"
              value={petInfo.specialNeeds}
              onChange={(e) => handlePetInfoChange("specialNeeds", e.target.value)}
              placeholder="Any allergies, sensitivities, or special handling instructions..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousStep}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button onClick={handleNextStep} disabled={!petInfo.name || !petInfo.type}>
            Continue
          </Button>
        </div>
      </div>
    )
  }

  const renderContactInfoForm = () => {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-gray-500">Please provide your contact details for booking confirmation.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              value={contactInfo.firstName}
              onChange={(e) => handleContactInfoChange("firstName", e.target.value)}
              placeholder="e.g., John"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              value={contactInfo.lastName}
              onChange={(e) => handleContactInfoChange("lastName", e.target.value)}
              placeholder="e.g., Smith"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex">
              <Mail className="mr-2 h-4 w-4 mt-3 text-gray-500" />
              <Input
                id="email"
                type="email"
                value={contactInfo.email}
                onChange={(e) => handleContactInfoChange("email", e.target.value)}
                placeholder="e.g., john.smith@example.com"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex">
              <Phone className="mr-2 h-4 w-4 mt-3 text-gray-500" />
              <Input
                id="phone"
                value={contactInfo.phone}
                onChange={(e) => handleContactInfoChange("phone", e.target.value)}
                placeholder="e.g., (555) 123-4567"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <div className="flex">
              <MapPin className="mr-2 h-4 w-4 mt-3 text-gray-500" />
              <Input
                id="address"
                value={contactInfo.address}
                onChange={(e) => handleContactInfoChange("address", e.target.value)}
                placeholder="e.g., 123 Main St, City, State, ZIP"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousStep}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={handleNextStep}
            disabled={!contactInfo.firstName || !contactInfo.email || !contactInfo.phone}
          >
            Continue
          </Button>
        </div>
      </div>
    )
  }

  const renderPaymentForm = () => {
    const selectedServiceDetails = getSelectedServiceDetails()

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Payment</h2>
          <p className="text-gray-500">Complete your booking by providing payment details.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Service:</span>
              <span className="font-medium">{selectedServiceDetails?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span className="font-medium">{date ? format(date, "PPP") : ""}</span>
            </div>
            <div className="flex justify-between">
              <span>Time:</span>
              <span className="font-medium">{timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span>Pet:</span>
              <span className="font-medium">
                {petInfo.name} ({petInfo.type})
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${selectedServiceDetails?.price.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-gray-900 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500"
                >
                  <CreditCard className="mb-3 h-6 w-6" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-gray-900 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500"
                >
                  <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.5 8.5H4.5C3.4 8.5 2.5 9.4 2.5 10.5V17.5C2.5 18.6 3.4 19.5 4.5 19.5H19.5C20.6 19.5 21.5 18.6 21.5 17.5V10.5C21.5 9.4 20.6 8.5 19.5 8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 15.5H7.01"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 11.5H20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  PayPal
                </Label>
              </div>
              <div>
                <RadioGroupItem value="applepay" id="applepay" className="peer sr-only" />
                <Label
                  htmlFor="applepay"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-gray-900 peer-data-[state=checked]:border-blue-500 [&:has([data-state=checked])]:border-blue-500"
                >
                  <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14C8 14 9 16 12 16C15 16 16 14 16 14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9H9.01"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9H15.01"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Apple Pay
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  value={cardInfo.number}
                  onChange={(e) => handleCardInfoChange("number", e.target.value)}
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input
                  id="card-name"
                  value={cardInfo.name}
                  onChange={(e) => handleCardInfoChange("name", e.target.value)}
                  placeholder="John Smith"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    value={cardInfo.expiry}
                    onChange={(e) => handleCardInfoChange("expiry", e.target.value)}
                    placeholder="MM/YY"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    value={cardInfo.cvc}
                    onChange={(e) => handleCardInfoChange("cvc", e.target.value)}
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-start space-x-2 pt-2">
            <div className="flex items-center h-5 mt-1">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-500"
                required
              />
            </div>
            <div className="text-sm">
              <label htmlFor="terms" className="font-medium text-gray-900">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePreviousStep}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={handleSubmitPayment}
            disabled={
              isLoading ||
              (paymentMethod === "card" && (!cardInfo.number || !cardInfo.name || !cardInfo.expiry || !cardInfo.cvc))
            }
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>Pay ${getSelectedServiceDetails()?.price.toFixed(2)}</>
            )}
          </Button>
        </div>
      </div>
    )
  }

  const renderConfirmation = () => {
    const selectedServiceDetails = getSelectedServiceDetails()

    return (
      <div className="space-y-8 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-50 p-4">
            <Check className="h-12 w-12 text-blue-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
          <p className="text-gray-500">
            Thank you for booking with PetSpa. We've sent a confirmation email to {contactInfo.email}.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium">{selectedServiceDetails?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">
                  {date ? format(date, "PPP") : ""} at {timeSlot}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Pet</p>
                <p className="font-medium">
                  {petInfo.name} ({petInfo.breed})
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Paid</p>
                <p className="font-medium">${selectedServiceDetails?.price.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Info className="h-4 w-4" />
            <p>Please arrive 10 minutes before your appointment time.</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Dog className="h-4 w-4" />
            <p>Remember to bring your pet's vaccination records if this is your first visit.</p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl py-10">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Book Your Pet's Grooming Appointment</h1>
      </div>

      {currentStep !== "confirmation" && renderStepIndicator()}

      <div className="bg-white rounded-lg border p-6 shadow-sm">
        {currentStep === "service" && renderServiceSelection()}
        {currentStep === "datetime" && renderDateTimeSelection()}
        {currentStep === "pet" && renderPetInfoForm()}
        {currentStep === "contact" && renderContactInfoForm()}
        {currentStep === "payment" && renderPaymentForm()}
        {currentStep === "confirmation" && renderConfirmation()}
      </div>
    </div>
  )
}

