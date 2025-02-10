import Link from "next/link"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { RecentSales } from "@/components/recent-sales"
import { InventoryOverview } from "@/components/inventory-overview"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type React from "react" // Import React

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dealership Dashboard</h1>
      <DashboardMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentSales />
        <InventoryOverview />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <QuickAccessCard
          title="Inventory Management"
          description="View and manage your car inventory"
          href="/inventory"
        />
        <QuickAccessCard title="Sales Tracking" description="Track and manage your sales" href="/sales" />
        <QuickAccessCard title="Customer Management" description="Manage your customer database" href="/customers" />
        <QuickAccessCard title="Appointments" description="Schedule and manage appointments" href="/appointments" />
        <QuickAccessCard
          title="Vehicle Performance"
          description="Analyze vehicle sales and profit performance"
          href="/performance"
        />
      </div>
    </div>
  )
}

function QuickAccessCard({ title, description, href }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href} passHref>
          <Button className="w-full">Go to {title}</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default Home

