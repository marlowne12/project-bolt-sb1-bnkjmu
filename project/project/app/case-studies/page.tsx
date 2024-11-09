import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart2, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Case Studies | Digital Helper',
  description: 'Explore our client success stories and see how we help businesses achieve their digital marketing goals.',
};

const caseStudies = [
  {
    client: "TechStart Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200&h=200",
    industry: "SaaS",
    challenge: "Struggling to generate qualified leads and had low conversion rates from their website traffic.",
    solution: "Implemented comprehensive SEO strategy and conversion rate optimization.",
    results: [
      "250% increase in organic traffic",
      "185% improvement in conversion rate",
      "312 new qualified leads per month"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    client: "GrowthCo Retail",
    logo: "https://images.unsplash.com/photo-1599305019347-8b5229892374?auto=format&fit=crop&q=80&w=200&h=200",
    industry: "E-commerce",
    challenge: "High cart abandonment rates and ineffective social media presence.",
    solution: "Developed targeted social media campaigns and optimized checkout process.",
    results: [
      "45% reduction in cart abandonment",
      "3x increase in social media engagement",
      "127% increase in monthly revenue"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    client: "InnovateMed",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200&h=200",
    industry: "Healthcare",
    challenge: "Limited online visibility and outdated digital presence.",
    solution: "Complete digital transformation including website redesign and content strategy.",
    results: [
      "400% increase in website traffic",
      "200+ new patient inquiries monthly",
      "68% increase in appointment bookings"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Case Studies</Badge>
            <h1 className="text-4xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses achieve remarkable growth
              through strategic digital marketing solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-[300px] lg:h-full">
                    <Image
                      src={study.image}
                      alt={study.client}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={study.logo}
                          alt={`${study.client} logo`}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{study.client}</h2>
                        <Badge variant="secondary">{study.industry}</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your digital presence.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}