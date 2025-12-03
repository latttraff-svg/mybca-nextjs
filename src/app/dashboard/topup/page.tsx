import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Smartphone, Shield } from 'lucide-react';

const topUpAmounts = [25000, 50000, 100000, 200000, 300000, 500000];

export default function TopUpPage() {
  const formatCurrency = (amount: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(amount);

  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Top Up</CardTitle>
          <CardDescription>Recharge mobile credits or e-wallets.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Service Type</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-1 border-2 border-primary">
                <Smartphone className="w-6 h-6 text-primary"/>
                Mobile Credit
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-1">
                <Shield className="w-6 h-6 text-primary"/>
                E-Wallet
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone-number">Mobile / Account Number</Label>
            <Input id="phone-number" placeholder="e.g., 081234567890" />
          </div>
          
          <div className="space-y-2">
            <Label>Choose Amount</Label>
            <div className="grid grid-cols-3 gap-2">
              {topUpAmounts.map(amount => (
                <Button key={amount} variant="outline">
                  {formatCurrency(amount).replace('Rp', 'Rp ')}
                </Button>
              ))}
            </div>
          </div>
          
          <Button className="w-full">Proceed to Top Up</Button>
        </CardContent>
      </Card>
    </div>
  );
}
