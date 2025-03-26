"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Phone } from "lucide-react";
import { useUser } from "@/queries/useUser";
import { useAppSelector } from "@/store/hooks";


// UserProfile component
export default function UserProfile() {
const {user}= useAppSelector( state => state.auth) 
 const { data, isLoading, isError } = useUser(user?._id || "");
 console.log(data)

  if (isLoading) {
    return <div className="text-center py-12">Loading user profile...</div>;
  }

  if (isError || !data) {
    return <div className="text-center py-12 text-red-500">Error loading user profile</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=100&width=100" alt={data.full_name || data.email} />
            <AvatarFallback>{(data.full_name || data.email).charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{data.full_name || "Unnamed data"}</CardTitle>
            <p className="text-muted-foreground capitalize">{data.role}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{data.email}</span>
              </div>
              {data.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{data.phone}</span>
                </div>
              )}
              {data.address && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{data.address}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}