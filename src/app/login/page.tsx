'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BcaLogo } from '@/components/bca-logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Fingerprint } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, you'd have validation and API calls here.
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');

    if (username === 'ycdev2025' && formData.get('password') === '250305') {
      toast({
        title: "Login Successful",
        description: "Welcome back! Redirecting to your dashboard.",
      });
      router.push('/dashboard');
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
      });
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="items-center text-center space-y-4">
          <BcaLogo className="h-10 w-auto" />
          <CardTitle className="text-2xl font-bold">Welcome to myBCA</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">User ID</Label>
              <Input id="username" name="username" placeholder="your.userid" required defaultValue="ycdev2025" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required defaultValue="250305" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : 'Log In'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" className="w-full">
            <Fingerprint className="mr-2 h-4 w-4" />
            Log in with Biometrics
          </Button>
          <p className="text-xs text-muted-foreground">
            Forgot password? | Need help?
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
