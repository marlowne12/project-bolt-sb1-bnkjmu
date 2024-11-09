import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, Settings, Globe, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'SEO Services | Digital Helper',
  description: 'Comprehensive SEO services to improve your search rankings and drive organic traffic.',
};

const seoServices = [
  {
    icon: <Search className="h-12 w-12 text-primary mb-4" />,
    title: "On-Page SEO",
    description: "Optimize your website content and structure for better search visibility.",
    href: "/services/seo/on-page-seo"
  },
  {
    icon: <Globe className="h-12 w-12 text-primary mb-4" />,
    title: "Off-Page SEO",
    description: "Build authority through quality backlinks and online presence.",
    href: "/services/seo/off-page-seo"
  },
  {
    icon: <Settings className="h-12 w-12 text-primary mb-4" />,
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers.",
    href: "/services/seo/local-seo"
  },
  {
    icon: <Code className="h-12 w-12 text-primary mb-4" />,
    title: "Technical SEO",
    description: "Optimize your website's technical aspects for better crawling and indexing.",
    href: "/services/seo/technical-seo"
  }
];

export default function SEOPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">SEO Services</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Boost Your Search Rankings
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Drive organic traffic and increase conversions with our comprehensive
                SEO services. We use data-driven strategies to improve your search
                visibility.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="SEO Services"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="p-6">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" asChild>
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
                alt="SEO Results"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our SEO Services?</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Data-driven strategies based on thorough analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Comprehensive technical and on-page optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Quality link building and content strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span>Regular reporting and performance tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business achieve better visibility in search results.
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