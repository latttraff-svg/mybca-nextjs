import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

const allTransactions = [
  { id: "1", date: "2023-10-26", desc: "Starbucks", amount: -75000, balance: 58750000 },
  { id: "2", date: "2023-10-25", desc: "Monthly Salary", amount: 15000000, balance: 58825000 },
  { id: "3", date: "2023-10-24", desc: "Netflix", amount: -169000, balance: 43825000 },
  { id: "4", date: "2023-10-22", desc: "Transfer to Jane", amount: -1500000, balance: 43994000 },
  { id: "5", date: "2023-10-20", desc: "Electricity Bill", amount: -450000, balance: 45494000 },
  { id: "6", date: "2023-10-19", desc: "Gojek Ride", amount: -35000, balance: 45944000 },
  { id: "7", date: "2023-10-18", desc: "Tokopedia Purchase", amount: -350000, balance: 45979000 },
  { id: "8", date: "2023-10-15", desc: "Cash Deposit", amount: 5000000, balance: 46329000 },
];

export default function AccountsPage() {
  const formatCurrency = (amount: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount);

  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Savings Account</CardTitle>
          <CardDescription>IDR Account No. 123-456-7890</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{formatcurrency(58750000)}</div>
          <p className="text-sm text-muted-foreground">Available Balance</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Detailed view of your account activity.</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filter</Button>
              <Button><Download className="mr-2 h-4 w-4" /> Download</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right hidden sm:table-cell">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                  <TableCell className="font-medium">{tx.desc}</TableCell>
                  <TableCell className="text-right font-medium">{formatCurrency(tx.amount)}</TableCell>
                  <TableCell className="text-right text-muted-foreground hidden sm:table-cell">{formatCurrency(tx.balance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
