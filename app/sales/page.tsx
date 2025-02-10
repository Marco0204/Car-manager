"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialSales = [
  { id: 1, customer: "Alice Johnson", car: "2023 Toyota Camry", price: 28000, date: "2023-05-15" },
  { id: 2, customer: "Bob Smith", car: "2022 Honda Civic", price: 24000, date: "2023-05-18" },
  { id: 3, customer: "Charlie Brown", car: "2023 Ford F-150", price: 45000, date: "2023-05-20" },
  { id: 4, customer: "Diana Prince", car: "2023 Tesla Model 3", price: 52000, date: "2023-05-22" },
]

export default function SalesPage() {
  const [sales, setSales] = useState(initialSales)
  const [newSale, setNewSale] = useState({ customer: "", car: "", price: "", date: "" })

  const addSale = () => {
    if (newSale.customer && newSale.car && newSale.price && newSale.date) {
      setSales([...sales, { id: sales.length + 1, ...newSale, price: Number.parseInt(newSale.price) }])
      setNewSale({ customer: "", car: "", price: "", date: "" })
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Sales Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Customer"
              value={newSale.customer}
              onChange={(e) => setNewSale({ ...newSale, customer: e.target.value })}
            />
            <Input
              placeholder="Car"
              value={newSale.car}
              onChange={(e) => setNewSale({ ...newSale, car: e.target.value })}
            />
            <Input
              placeholder="Price"
              type="number"
              value={newSale.price}
              onChange={(e) => setNewSale({ ...newSale, price: e.target.value })}
            />
            <Input
              type="date"
              value={newSale.date}
              onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
            />
            <Button onClick={addSale}>Add Sale</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Car</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell>{sale.car}</TableCell>
                  <TableCell>${sale.price.toLocaleString()}</TableCell>
                  <TableCell>{sale.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

