import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import type React from "react"

export const InventoryOverview: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={inventoryData}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

const inventoryData = [
  {
    name: "Sedan",
    total: 40,
  },
  {
    name: "SUV",
    total: 30,
  },
  {
    name: "Truck",
    total: 20,
  },
  {
    name: "Sports",
    total: 15,
  },
  {
    name: "Luxury",
    total: 10,
  },
  {
    name: "Electric",
    total: 25,
  },
]

