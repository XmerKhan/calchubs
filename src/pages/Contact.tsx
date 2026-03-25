import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Vidify Calculators | Get in Touch</title>
        <meta name="description" content="Have questions or suggestions? Contact the Vidify Calculators team. We're here to help." />
        <link rel="canonical" href="https://vidify.site/contact" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Email Us</h3>
                <p className="text-muted-foreground text-sm mt-1">support@vidify.site</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <MessageSquare className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Live Chat</h3>
                <p className="text-muted-foreground text-sm mt-1">Available 9 AM - 5 PM EST</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground">Response Time</h3>
                <p className="text-muted-foreground text-sm mt-1">Within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been sent. We'll get back to you soon.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Your Name</Label>
                      <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input id="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea id="message" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us more about your inquiry..." className="mt-2" />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;