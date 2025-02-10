import { DashboardMetrics } from "@/components/dashboard-metrics"
import { RecentSales } from "@/components/recent-sales"
import { InventoryOverview } from "@/components/inventory-overview"
import { InventoryList } from "@/components/inventory-list"

export default function PreviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">DealerMaster Preview</h1>
      <DashboardMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecentSales />
        <InventoryOverview />
      </div>
      <h2 className="text-2xl font-bold mt-8">Inventory Management</h2>
      <InventoryList />
    </div>
  )
}

