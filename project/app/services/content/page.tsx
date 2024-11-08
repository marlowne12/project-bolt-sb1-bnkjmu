import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, PenTool, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Content Creation Services | Digital Helper',
  description: 'Professional content creation services including copywriting, blog posts, social media content, and visual content.',
};

export default function ContentPage() {
  const contentTypes = [
    {
      icon: <FileText className="h-12 w-12 text-primary mb-4" />,
      title: "Blog Content",
      description: "SEO-optimized blog posts and articles"
    },
    {
      icon: <PenTool className="h-12 w-12 text-primary mb-4" />,
      title: "Copywriting",
      description: "Compelling website and marketing copy"
    },
    {
      icon: <ImageIcon className="h-12 w-12 text-primary mb-4" />,
      title: "Visual Content",
      description: "Eye-catching graphics and videos"
    }
  ];

  return (
    <>
      <section className="pt-24 pb-12 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Content Creation</Badge>
              <h1 className="text-4xl font-bold mb-6">
                Tell Your Story with Compelling Content
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Create engaging content that resonates with your audience and
                drives meaningful engagement.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Content Creation"
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