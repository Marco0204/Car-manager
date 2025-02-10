"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Car = {
  id: number
  make: string
  model: string
  year: number
  color: string
  price: number
  mileage: number
  vin: string
  status: "available" | "sold" | "reserved"
}

const initialCars: Car[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Silver",
    price: 28000,
    mileage: 0,
    vin: "1HGBH41JXMN109186",
    status: "available",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2022,
    color: "Blue",
    price: 24000,
    mileage: 5000,
    vin: "2HGES16364H123456",
    status: "sold",
  },
  {
    id: 3,
    make: "Ford",
    model: "F-150",
    year: 2023,
    color: "Red",
    price: 45000,
    mileage: 1000,
    vin: "1FTEW1E53MFA12345",
    status: "available",
  },
  {
    id: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "White",
    price: 52000,
    mileage: 100,
    vin: "5YJ3E1EA1JF123456",
    status: "reserved",
  },
]

export function InventoryList() {
  const [cars, setCars] = useState<Car[]>(initialCars)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  })
  const { toast } = useToast()

  const fetchCars = () => {
    setLoading(true)
    // Simulate API call delay
    setTimeout(() => {
      let filteredCars = [...initialCars]

      if (filters.make)
        filteredCars = filteredCars.filter((car) => car.make.toLowerCase().includes(filters.make.toLowerCase()))
      if (filters.model)
        filteredCars = filteredCars.filter((car) => car.model.toLowerCase().includes(filters.model.toLowerCase()))
      if (filters.year) filteredCars = filteredCars.filter((car) => car.year === Number.parseInt(filters.year))
      if (filters.status) filteredCars = filteredCars.filter((car) => car.status === filters.status)
      if (filters.minPrice) filteredCars = filteredCars.filter((car) => car.price >= Number.parseInt(filters.minPrice))
      if (filters.maxPrice) filteredCars = filteredCars.filter((car) => car.price <= Number.parseInt(filters.maxPrice))

      setCars(filteredCars)
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    fetchCars()
  }, [filters]) // Added filters to the dependency array

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Input placeholder="Make" value={filters.make} onChange={(e) => handleFilterChange("make", e.target.value)} />
        <Input
          placeholder="Model"
          value={filters.model}
          onChange={(e) => handleFilterChange("model", e.target.value)}
        />
        <Select value={filters.year} onValueChange={(value) => handleFilterChange("year", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {[...Array(30)].map((_, i) => (
              <SelectItem key={i} value={(new Date().getFullYear() - i).toString()}>
                {new Date().getFullYear() - i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="sold">Sold</SelectItem>
            <SelectItem value="reserved">Reserved</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Min Price"
          type="number"
          value={filters.minPrice}
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
        <Input
          placeholder="Max Price"
          type="number"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
      </div>
      <Button onClick={fetchCars}>Apply Filters</Button>

      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Mileage</TableHead>
                <TableHead>VIN</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cars.map((car) => (
                <TableRow key={car.id}>
                  <TableCell>{car.make}</TableCell>
                  <TableCell>{car.model}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.color}</TableCell>
                  <TableCell>${car.price.toLocaleString()}</TableCell>
                  <TableCell>{car.mileage.toLocaleString()} miles</TableCell>
                  <TableCell>{car.vin}</TableCell>
                  <TableCell>{car.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

