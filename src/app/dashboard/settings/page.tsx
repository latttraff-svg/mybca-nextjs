import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SettingsPage() {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" defaultValue="User" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="user@email.com" />
              </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+62 812 3456 7890" />
              </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password. Make sure it's a strong one.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transaction Limits</CardTitle>
            <CardDescription>Manage your daily transaction limits for added security.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="transfer-limit">Transfer Limit</Label>
                <Input id="transfer-limit" defaultValue="Rp 100.000.000" />
              </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to be notified.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="push-notifs">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive updates on your mobile device.</p>
              </div>
              <Switch id="push-notifs" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="email-notifs">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Get summaries and alerts in your inbox.</p>
              </div>
              <Switch id="email-notifs" defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <Label htmlFor="sms-notifs">SMS Notifications</Label>
                <p className="text-sm text-muted-foreground">For critical alerts and OTPs.</p>
              </div>
              <Switch id="sms-notifs" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
       <Button>Save Changes</Button>
    </Tabs>
  );
}
