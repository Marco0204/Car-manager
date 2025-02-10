"use client"

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const monthData = [
  { name: "Jan", sales: 4000, profit: 2400 },
  { name: "Feb", sales: 3000, profit: 1398 },
  { name: "Mar", sales: 2000, profit: 9800 },
  { name: "Apr", sales: 2780, profit: 3908 },
  { name: "May", sales: 1890, profit: 4800 },
  { name: "Jun", sales: 2390, profit: 3800 },
]

const yearData = [
  { name: "2018", sales: 24000, profit: 12400 },
  { name: "2019", sales: 29000, profit: 15398 },
  { name: "2020", sales: 22000, profit: 11800 },
  { name: "2021", sales: 32780, profit: 18908 },
  { name: "2022", sales: 38900, profit: 22800 },
]

export function PerformanceChart({ type, period }) {
  const data = period === "month" ? monthData : yearData
  const dataKey = type === "sales" ? "sales" : "profit"

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

