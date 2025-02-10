"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PerformanceChart } from "@/components/performance-chart"
import { TopPerformers } from "@/components/top-performers"

export default function PerformancePage() {
  const [period, setPeriod] = useState("month")

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Vehicle Performance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart type="sales" period={period} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profit Margins</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart type="profit" period={period} />
          </CardContent>
        </Card>
      </div>
      <TopPerformers />
    </div>
  )
}

