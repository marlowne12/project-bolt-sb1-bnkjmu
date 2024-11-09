import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ValueCard } from "@/components/value-card";
import { StatItem } from "@/components/stat-item";
import { ArrowRight, Globe, Link as LinkIcon, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Off-Page SEO Services | Digital Helper',
  description: 'Build your website authority with our expert off-page SEO services including link building and brand mentions.',
};

const strategies = [
  {
    icon: LinkIcon,
    title: "Link Building",
    description: "Strategic acquisition of high-quality backlinks from authoritative websites."
  },
  {
    icon: Globe,
    title: "Brand Mentions",
    description: "Increase online visibility through strategic brand mentions and citations."
  },
  {
    icon: MessageSquare,
    title: "Guest Posting",
    description: "Create valuable content for relevant industry publications and blogs."
  },
  {
    icon: Share2,
    title: "Social Signals",
    description: "Boost your social media presence to support SEO efforts."
  }
];

const stats = [
  { value: "500+", label: "Backlinks Built" },
  { value: "85%", label: "Domain Authority" },
  { value: "200+", label: "Guest Posts" },
  { value: "45%", label: "Traffic Increase" }
];

export default function OffPageSEOPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Off-Page SEO</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Build Your Online Authority
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Enhance your website's authority and rankings through strategic
                off-page SEO techniques and quality link building.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Off-Page SEO"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Off-Page SEO Strategies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use proven off-page SEO techniques to build your website's authority
              and improve search rankings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <ValueCard key={index} {...strategy} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the results we've achieved for our clients through effective
              off-page SEO strategies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Link Building Strategy"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Link Building Process</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Identify high-authority websites in your industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Create valuable, shareable content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Build relationships with industry influencers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Monitor and analyze backlink performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Online Authority?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create a comprehensive off-page SEO strategy for your business.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}