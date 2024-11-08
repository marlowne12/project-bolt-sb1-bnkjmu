import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, BarChart2, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Digital Marketing Services | Digital Helper',
  description: 'Comprehensive digital marketing solutions to grow your business online. PPC, display advertising, email marketing, and more.',
};

export default function DigitalMarketingPage() {
  const benefits = [
    "Data-driven campaign strategies",
    "Cross-channel marketing integration",
    "Real-time performance tracking",
    "Continuous optimization",
    "Regular reporting and insights",
    "ROI-focused approach"
  ];

  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Digital Marketing</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Drive Growth with Strategic Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your online presence with our comprehensive digital marketing solutions. 
                We create data-driven strategies that deliver measurable results.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Digital Marketing Strategy"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">PPC Advertising</h3>
              <p className="text-muted-foreground">
                Strategic paid advertising campaigns across Google, social media, and display networks.
              </p>
            </Card>
            <Card className="p-6">
              <BarChart2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics & Tracking</h3>
              <p className="text-muted-foreground">
                Comprehensive tracking and analysis of campaign performance and ROI.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conversion Optimization</h3>
              <p className="text-muted-foreground">
                Continuous optimization to improve conversion rates and reduce acquisition costs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Digital Marketing Services?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Digital Marketing Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Grow Your Business?</h2>
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}