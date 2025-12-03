import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Zap, HeartPulse } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Pay Bills</CardTitle>
          <CardDescription>Easily pay your monthly bills and utilities.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-1">
                <CreditCard className="w-6 h-6 text-primary"/>
                Credit Card
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-1">
                <Zap className="w-6 h-6 text-primary"/>
                Electricity
              </Button>
               <Button variant="outline" className="h-20 flex-col gap-1">
                <HeartPulse className="w-6 h-6 text-primary"/>
                Insurance
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customer-id">Customer / Policy Number</Label>
            <Input id="customer-id" placeholder="Enter number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" placeholder="Enter amount to pay" />
          </div>
          
          <Button className="w-full">Continue to Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}
