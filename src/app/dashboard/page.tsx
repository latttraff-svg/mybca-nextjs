"use client";

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
import { ArrowRightLeft, Receipt, Wallet, MoreHorizontal } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const transactions = [
  { id: "txn_1", description: "Starbucks", date: "Oct 26", amount: -75000, status: "Success" },
  { id: "txn_2", description: "Monthly Salary", date: "Oct 25", amount: 15000000, status: "Success" },
  { id: "txn_3", description: "Netflix", date: "Oct 24", amount: -169000, status: "Success" },
  { id: "txn_4", description: "Transfer to Jane", date: "Oct 22", amount: -1500000, status: "Success" },
  { id: "txn_5", description: "Electricity Bill", date: "Oct 20", amount: -450000, status: "Pending" },
];

const spendingData = [
    { name: 'Food', value: 1250000 },
    { name: 'Transport', value: 450000 },
    { name: 'Bills', value: 890000 },
    { name: 'Shopping', value: 2100000 },
    { name: 'Entertainment', value: 670000 },
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
       <Card className="shadow-lg bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardDescription className="text-primary-foreground/80">Total Balance</CardDescription>
                <CardTitle className="text-4xl font-bold tracking-tight">
                {formatCurrency(58750000)}
                </CardTitle>
            </div>
             <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <MoreHorizontal />
             </Button>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-primary-foreground/90">
              Savings Account: **** **** 7890
            </p>
          </CardContent>
        </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle>Spending Overview</CardTitle>
            <CardDescription>Your spending breakdown for this month.</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spendingData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${Number(value) / 1000000} Jt`} />
                    <Tooltip
                        cursor={{fill: 'hsl(var(--muted))'}}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <p className="font-bold">{`${payload[0].name}`}</p>
                                <p className="text-sm text-primary">{formatCurrency(payload[0].value as number)}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="flex h-auto flex-col aspect-square justify-center gap-1 p-2" asChild>
              <Link href="/dashboard/transfer">
                <ArrowRightLeft className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center">Transfer</span>
              </Link>
            </Button>
            <Button variant="outline" className="flex h-auto flex-col aspect-square justify-center gap-1 p-2" asChild>
              <Link href="/dashboard/payment">
                <Receipt className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center">Bill Pay</span>
              </Link>
            </Button>
            <Button variant="outline" className="flex h-auto flex-col aspect-square justify-center gap-1 p-2" asChild>
              <Link href="/dashboard/topup">
                <Wallet className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center">Top Up</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Link href="/dashboard/accounts" className="text-sm font-medium text-primary hover:underline">
              View All
            </Link>
          </div>
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
