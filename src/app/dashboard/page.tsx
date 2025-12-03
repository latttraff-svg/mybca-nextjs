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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightLeft, Receipt, Wallet } from "lucide-react";

const transactions = [
  { id: "txn_1", description: "Starbucks", date: "Oct 26", amount: -75000, status: "Success" },
  { id: "txn_2", description: "Monthly Salary", date: "Oct 25", amount: 15000000, status: "Success" },
  { id: "txn_3", description: "Netflix", date: "Oct 24", amount: -169000, status: "Success" },
  { id: "txn_4", description: "Transfer to Jane", date: "Oct 22", amount: -1500000, status: "Success" },
  { id: "txn_5", description: "Electricity Bill", date: "Oct 20", amount: -450000, status: "Pending" },
];

export default function DashboardPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardDescription>Total Balance</CardDescription>
            <CardTitle className="text-4xl font-bold tracking-tight">
              {formatCurrency(58750000)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Savings Account: **** **** 7890
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="flex h-auto flex-col aspect-square justify-center gap-1 p-2" asChild>
              <Link href="/dashboard/transfer">
                <ArrowRightLeft className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Transfer</span>
              </Link>
            </Button>
            <Button variant="outline" className="flex h-auto flex-col aspect-square justify-center gap-1 p-2" asChild>
              <Link href="/dashboard/payment">
                <Receipt className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Bill Pay</span>
              </Link>
            </Button>
            <Button variant="outline" className="flex h-auto flex-col aspect-square justify-center gap-1 p-2" asChild>
              <Link href="/dashboard/topup">
                <Wallet className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium">Top Up</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest account activity.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Details</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>
                    <div className="font-medium">{tx.description}</div>
                    <div className="text-sm text-muted-foreground">{tx.date}</div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={tx.status === 'Success' ? 'default' : 'secondary'}>
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(tx.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
