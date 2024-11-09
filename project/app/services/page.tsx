import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { ArrowRight, BarChart, Globe, MessageSquare, PenTool } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Our Services | Digital Helper',
  description: 'Comprehensive digital marketing services including SEO, social media, content creation, and more.',
};

const services = [
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth and engagement across all digital channels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/services/digital-marketing"
  },
  {
    icon: BarChart,
    title: "SEO Optimization",
    description: "Boost your search rankings and increase organic traffic with data-driven SEO.",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/services/seo"
  },
  {
    icon: MessageSquare,
    title: "Social Media",
    description: "Build and engage your community with compelling social media strategies.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/services/social-media"
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging content that tells your story and connects with your audience.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/services/content"
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl font-bold mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your digital presence with our full suite of marketing services.
              We help businesses grow through innovative strategies and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your digital presence.
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