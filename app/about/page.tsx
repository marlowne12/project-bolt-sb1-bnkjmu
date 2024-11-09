import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ValueCard } from "@/components/value-card";
import { StatItem } from "@/components/stat-item";
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'About Us | Digital Helper',
  description: 'Learn about Digital Helper, our mission, values, and the team behind our success.',
};

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive real business growth."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships with our clients."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of digital trends to deliver cutting-edge solutions."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparency and honesty are at the core of everything we do."
  }
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "150M+", label: "Ad Spend Managed" },
  { value: "10+", label: "Years Experience" }
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Us</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Transforming Digital Presence Since 2013
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Digital Helper is a full-service digital marketing agency helping businesses
                achieve exceptional growth through innovative digital strategies.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Digital Helper Team"
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
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver exceptional
              results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're on a mission to help businesses thrive in the digital age by providing
                innovative, results-driven marketing solutions that drive real growth and ROI.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experts combines creativity with data-driven strategies to
                deliver exceptional results that exceed client expectations.
              </p>
              <Button variant="outline" asChild>
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business achieve its goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}