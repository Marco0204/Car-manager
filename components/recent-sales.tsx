import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type React from "react"

export const RecentSales: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={sale.avatar} alt="Avatar" />
                <AvatarFallback>
                  {sale.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.name}</p>
                <p className="text-sm text-muted-foreground">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">+${sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const recentSales = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    amount: "32,000",
    avatar: "/placeholder.svg",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    amount: "28,500",
    avatar: "/placeholder.svg",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    amount: "45,200",
    avatar: "/placeholder.svg",
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    amount: "39,700",
    avatar: "/placeholder.svg",
  },
]

