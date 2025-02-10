"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialAppointments = [
  { id: 1, customer: "Alice Johnson", type: "Test Drive", date: "2023-06-01", time: "10:00 AM" },
  { id: 2, customer: "Bob Smith", type: "Service", date: "2023-06-02", time: "2:00 PM" },
  { id: 3, customer: "Charlie Brown", type: "Sales Consultation", date: "2023-06-03", time: "11:30 AM" },
]

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [newAppointment, setNewAppointment] = useState({ customer: "", type: "", date: "", time: "" })

  const addAppointment = () => {
    if (newAppointment.customer && newAppointment.type && newAppointment.date && newAppointment.time) {
      setAppointments([...appointments, { id: appointments.length + 1, ...newAppointment }])
      setNewAppointment({ customer: "", type: "", date: "", time: "" })
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Appointment Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Customer"
              value={newAppointment.customer}
              onChange={(e) => setNewAppointment({ ...newAppointment, customer: e.target.value })}
            />
            <Select
              value={newAppointment.type}
              onValueChange={(value) => setNewAppointment({ ...newAppointment, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Test Drive">Test Drive</SelectItem>
                <SelectItem value="Service">Service</SelectItem>
                <SelectItem value="Sales Consultation">Sales Consultation</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={newAppointment.date}
              onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
            />
            <Input
              type="time"
              value={newAppointment.time}
              onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
            />
            <Button onClick={addAppointment}>Add Appointment</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.customer}</TableCell>
                  <TableCell>{appointment.type}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

