import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Users, MessageSquare, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Social Media Marketing | Digital Helper',
  description: 'Strategic social media marketing services to build your brand, engage your audience, and drive conversions.',
};

export default function SocialMediaPage() {
  const platforms = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "Twitter",
    "TikTok",
    "YouTube"
  ];

  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Social Media Marketing</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Build Your Brand on Social Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create meaningful connections with your audience through strategic
                social media marketing campaigns.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Growing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Social Media Marketing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections similar to other service pages */}
    </>
  );
}