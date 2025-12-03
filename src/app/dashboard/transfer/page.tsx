'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function TransferPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    toast({
        title: "Transfer Successful!",
        description: "Rp1.000.000 has been sent to John Doe.",
    });
    setStep(4); // Show success screen
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          {step > 1 && step < 4 && <Button variant="ghost" size="icon" onClick={handleBack}><ArrowLeft /></Button>}
          <div>
            <CardTitle>Transfer Funds</CardTitle>
            <CardDescription>Securely send money to another account.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dest-bank">Destination Bank</Label>
              <Select defaultValue="BCA">
                <SelectTrigger id="dest-bank">
                  <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BCA">BCA</SelectItem>
                  <SelectItem value="mandiri">Mandiri</SelectItem>
                  <SelectItem value="bni">BNI</SelectItem>
                  <SelectItem value="bri">BRI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dest-account">Account Number</Label>
              <Input id="dest-account" placeholder="e.g., 1234567890" defaultValue="08123456789" />
            </div>
            <Button className="w-full" onClick={handleNext}>Continue</Button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div className="p-4 rounded-md border bg-secondary">
                <p className="text-sm text-muted-foreground">Recipient</p>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm">BCA - 08123456789</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" placeholder="Rp 0" defaultValue="1000000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transfer-method">Transfer Method</Label>
              <Select defaultValue="bifast">
                <SelectTrigger id="transfer-method">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bifast">BI-FAST (Rp 2.500)</SelectItem>
                  <SelectItem value="rtgs">RTGS (Rp 25.000)</SelectItem>
                  <SelectItem value="online">Online Transfer (Rp 6.500)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" onClick={handleNext}>Continue</Button>
          </div>
        )}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <CardTitle>Confirmation</CardTitle>
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex justify-between"><span className="text-muted-foreground">To</span><span className="font-semibold">John Doe</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Bank</span><span className="font-semibold">BCA</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Amount</span><span className="font-semibold">Rp 1.000.000</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Fee</span><span className="font-semibold">Rp 2.500</span></div>
              <hr />
              <div className="flex justify-between font-bold text-lg"><span className="text-muted-foreground">Total</span><span>Rp 1.002.500</span></div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="pin">Enter PIN</Label>
                <Input id="pin" type="password" placeholder="******" maxLength={6} className="text-center text-2xl tracking-[1em]" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : 'Confirm & Transfer'}
            </Button>
          </form>
        )}
        {step === 4 && (
            <div className="text-center py-8 space-y-4 flex flex-col items-center">
                <CheckCircle2 className="h-16 w-16 text-primary"/>
                <h3 className="text-2xl font-bold">Transfer Successful</h3>
                <p className="text-muted-foreground max-w-xs">You have successfully sent Rp1.000.000 to John Doe.</p>
                <Button onClick={() => setStep(1)}>Make another transfer</Button>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
