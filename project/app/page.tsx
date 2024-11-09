import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart, Globe, MessageSquare, Rocket, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and engagement across all digital channels.",
      href: "/services/digital-marketing"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and increase organic traffic with data-driven SEO.",
      href: "/services/seo"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Media",
      description: "Build and engage your community with compelling social media strategies.",
      href: "/services/social-media"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with your audience.",
      href: "/services/content"
    }
  ];

  const testimonials = [
    {
      quote: "Digital Helper transformed our online presence and doubled our leads within 6 months.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Their strategic approach to digital marketing helped us achieve record-breaking growth.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-buildings-during-night-time-41465-large.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4">Leading Digital Agency</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We help businesses grow through innovative digital marketing strategies
              and data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the existing sections remain the same */}
    </>
  );
}