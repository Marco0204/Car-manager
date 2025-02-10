"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialInventory = [
  { id: 1, make: "Toyota", model: "Camry", year: 2023, price: 28000, status: "Available" },
  { id: 2, make: "Honda", model: "Civic", year: 2022, price: 24000, status: "Sold" },
  { id: 3, make: "Ford", model: "F-150", year: 2023, price: 45000, status: "Available" },
  { id: 4, make: "Tesla", model: "Model 3", year: 2023, price: 52000, status: "Reserved" },
]

export default function InventoryPage() {
  const [inventory, setInventory] = useState(initialInventory)
  const [newCar, setNewCar] = useState({ make: "", model: "", year: "", price: "", status: "Available" })

  const addCar = () => {
    if (newCar.make && newCar.model && newCar.year && newCar.price) {
      setInventory([...inventory, { id: inventory.length + 1, ...newCar }])
      setNewCar({ make: "", model: "", year: "", price: "", status: "Available" })
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Make"
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            />
            <Input
              placeholder="Model"
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            />
            <Input
              placeholder="Year"
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            />
            <Input
              placeholder="Price"
              value={newCar.price}
              onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            />
            <Button onClick={addCar}>Add Car</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.make}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>${car.price.toLocaleString()}</TableCell>
                  <TableCell>{car.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

