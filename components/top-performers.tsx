import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topPerformers = [
  { rank: 1, model: "Toyota Camry", sales: 1234, profit: 246800 },
  { rank: 2, model: "Honda Civic", sales: 1156, profit: 208080 },
  { rank: 3, model: "Ford F-150", sales: 987, profit: 345450 },
  { rank: 4, model: "Tesla Model 3", sales: 876, profit: 306600 },
  { rank: 5, model: "Nissan Altima", sales: 765, profit: 137700 },
]

export function TopPerformers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Vehicles</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPerformers.map((performer) => (
              <TableRow key={performer.rank}>
                <TableCell>{performer.rank}</TableCell>
                <TableCell>{performer.model}</TableCell>
                <TableCell>{performer.sales}</TableCell>
                <TableCell>${performer.profit.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

