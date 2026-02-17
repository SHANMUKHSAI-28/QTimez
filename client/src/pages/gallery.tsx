import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/page-layout";

const galleryItems = [
  { 
    title: "Web Development", 
    desc: "Robust & Scalable Web Apps",
    longDesc: "We build high-performance web applications using modern frameworks and best practices. Our solutions are designed for scalability, security, and exceptional user experience.",
    gradient: "from-cyan-500/20 to-blue-600/20"
  },
  { 
    title: "UI/UX Design", 
    desc: "Intuitive & Engaging Interfaces",
    longDesc: "Our design team creates pixel-perfect, user-centered interfaces that delight users and drive engagement. We combine aesthetics with functionality.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  { 
    title: "E-Commerce", 
    desc: "Seamless Online Shopping Experiences",
    longDesc: "From custom storefronts to marketplace integrations, we build e-commerce solutions that convert visitors into loyal customers with smooth checkout flows.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  { 
    title: "Data Analytics", 
    desc: "Insightful Business Intelligence",
    longDesc: "Transform raw data into actionable insights with our analytics solutions. We build custom dashboards, reporting tools, and predictive models.",
    gradient: "from-orange-500/20 to-amber-500/20"
  },
  { 
    title: "Mobile Apps", 
    desc: "Native & Cross-Platform Solutions",
    longDesc: "We develop mobile applications for iOS and Android platforms, delivering native performance with cross-platform efficiency using React Native and Flutter.",
    gradient: "from-red-500/20 to-rose-500/20"
  },
  { 
    title: "Cloud Solutions", 
    desc: "Scalable Infrastructure Design",
    longDesc: "Architect and deploy cloud-native applications on AWS, Azure, and GCP. We optimize for performance, cost, and reliability.",
    gradient: "from-indigo-500/20 to-violet-500/20"
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Explore the breadth of our expertise through our showcase of capabilities and solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Capabilities</h2>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                aria-label="Previous"
                className="rounded-full border-primary/30 hover:bg-primary/20"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                aria-label="Next"
                className="rounded-full border-primary/30 hover:bg-primary/20"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative h-[350px] md:h-[450px] w-full bg-card rounded-2xl overflow-hidden border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
              >
                <div className="text-center space-y-6 z-10 max-w-2xl">
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                    {galleryItems[activeIndex].title}
                  </h3>
                  <p className="text-xl text-primary tracking-widest uppercase">{galleryItems[activeIndex].desc}</p>
                  <p className="text-muted-foreground text-base md:text-lg">{galleryItems[activeIndex].longDesc}</p>
                </div>
                <div className={`absolute inset-0 opacity-30 bg-gradient-to-tr ${galleryItems[activeIndex].gradient} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {galleryItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-primary" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">All Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative h-[250px] rounded-xl border border-white/10 overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-60 transition-opacity`} />
                <div className="absolute inset-0 bg-card/60 group-hover:bg-card/40 transition-colors" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-primary text-sm tracking-wider uppercase mb-3">{item.desc}</p>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.longDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's build something incredible together. Reach out and let's discuss your vision.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 rounded-none clip-path-slant hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
