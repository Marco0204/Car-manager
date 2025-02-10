"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialCustomers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "345-678-9012" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", phone: "456-789-0123" },
]

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" })

  const addCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone) {
      setCustomers([...customers, { id: customers.length + 1, ...newCustomer }])
      setNewCustomer({ name: "", email: "", phone: "" })
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Name"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              value={newCustomer.email}
              onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
            />
            <Input
              placeholder="Phone"
              value={newCustomer.phone}
              onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
            />
            <Button onClick={addCustomer}>Add Customer</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

