import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Search, FileText, Layout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'On-Page SEO Services | Digital Helper',
  description: 'Expert on-page SEO services to optimize your website content and structure for better search visibility.',
};

const features = [
  {
    icon: <Search className="h-12 w-12 text-primary mb-4" />,
    title: "Keyword Optimization",
    description: "Strategic keyword placement and optimization throughout your content."
  },
  {
    icon: <FileText className="h-12 w-12 text-primary mb-4" />,
    title: "Content Optimization",
    description: "Optimize headlines, meta descriptions, and content structure."
  },
  {
    icon: <Layout className="h-12 w-12 text-primary mb-4" />,
    title: "URL Structure",
    description: "Clean and SEO-friendly URL structure for better crawling."
  }
];

export default function OnPageSEOPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">On-Page SEO</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Optimize Your Website Content
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Improve your search rankings with expert on-page SEO optimization
                that focuses on your content, structure, and user experience.
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
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=800&h=600"
                alt="On-Page SEO"
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
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Content?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's improve your website's search visibility with expert on-page SEO.
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