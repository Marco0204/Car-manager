"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

type Car = {
  id: number
  make: string
  model: string
  year: number
  color: string
  price: number
}

export function CarList() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchCars()
  }, [])

  async function fetchCars() {
    try {
      setLoading(true)
      let query = supabase.from("cars").select("*")

      if (filters.make) query = query.ilike("make", `%${filters.make}%`)
      if (filters.model) query = query.ilike("model", `%${filters.model}%`)
      if (filters.year) query = query.eq("year", filters.year)
      if (filters.color) query = query.ilike("color", `%${filters.color}%`)
      if (filters.minPrice) query = query.gte("price", filters.minPrice)
      if (filters.maxPrice) query = query.lte("price", filters.maxPrice)

      const { data, error } = await query

      if (error) throw error
      setCars(data || [])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch cars. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

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
        <Input
          placeholder="Color"
          value={filters.color}
          onChange={(e) => handleFilterChange("color", e.target.value)}
        />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">
                {car.make} {car.model}
              </h2>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-600">Color: {car.color}</p>
              <p className="text-gray-600">Price: ${car.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

