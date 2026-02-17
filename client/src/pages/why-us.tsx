import { motion } from "framer-motion";
import { CheckCircle, Trophy, Users, Clock, Shield, Zap, HeartHandshake, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/page-layout";

const stats = [
  { title: "10+ Years", icon: Clock, text: "Years of experience delivering excellence in tech consulting." },
  { title: "20+ Techs", icon: Trophy, text: "Experts in over 20+ cutting-edge technologies." },
  { title: "5000+ Hours", icon: Users, text: "Hours of consulting provided to satisfied clients." },
  { title: "900+ Reviews", icon: CheckCircle, text: "Positive client reviews reflecting our dedication." },
];

const reasons = [
  { 
    icon: Shield, 
    title: "Proven Expertise", 
    desc: "Our team comprises industry veterans with deep knowledge across cloud, software, data, and digital transformation domains." 
  },
  { 
    icon: Zap, 
    title: "Agile Delivery", 
    desc: "We follow agile methodologies to deliver solutions quickly and iteratively, ensuring you see results fast." 
  },
  { 
    icon: HeartHandshake, 
    title: "Client-First Approach", 
    desc: "Your success is our priority. We build long-term partnerships by understanding your unique challenges and goals." 
  },
  { 
    icon: Target, 
    title: "Result-Oriented", 
    desc: "Every solution we deliver is designed to create measurable business impact and drive real growth." 
  },
];

export default function WhyUsPage() {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Edge</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">QTimez</span>?
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              We don't just deliver technology — we deliver transformation. Here's why businesses trust us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/30 p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:bg-card/50 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" aria-label={feature.title} />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Reasons */}
      <section className="py-16 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            What Sets Us <span className="text-primary">Apart</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-card/30 rounded-xl border border-white/5 hover:border-primary/30 transition-all hover:bg-card/50 group"
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-primary/20">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the QTimez Difference?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's start a conversation about how we can help your business grow.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 rounded-none clip-path-slant hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
