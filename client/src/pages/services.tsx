import { motion } from "framer-motion";
import { Cloud, Code, BarChart, Monitor, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import PageLayout from "@/components/layout/page-layout";

const servicesData = [
  { 
    title: "Cloud Infrastructure", 
    icon: Cloud, 
    desc: "Scalable, secure, and efficient solutions to optimize performance while reducing costs.",
    details: [
      "Cloud migration & strategy",
      "AWS, Azure, GCP expertise",
      "Infrastructure as Code (IaC)",
      "Cost optimization & monitoring",
      "High availability architecture",
      "Disaster recovery planning"
    ]
  },
  { 
    title: "Custom Software", 
    icon: Code, 
    desc: "Tailored software solutions designed to meet your unique business needs.",
    details: [
      "Full-stack web applications",
      "Mobile app development",
      "API design & integration",
      "Legacy system modernization",
      "Microservices architecture",
      "Quality assurance & testing"
    ]
  },
  { 
    title: "Digital Transformation", 
    icon: Monitor, 
    desc: "Implementing technologies to streamline operations and enhance customer experiences.",
    details: [
      "Business process automation",
      "Digital workflow design",
      "CRM & ERP implementation",
      "Change management support",
      "Employee training programs",
      "ROI measurement & analysis"
    ]
  },
  { 
    title: "Data Analytics", 
    icon: BarChart, 
    desc: "Unlock insights from your data to drive informed decision-making and growth.",
    details: [
      "Business intelligence dashboards",
      "Predictive analytics & ML",
      "Data pipeline engineering",
      "Real-time data processing",
      "Data governance & security",
      "Custom reporting solutions"
    ]
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">What We Do</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              QTimez specializes in technology consulting services that accelerate your business. From cloud solutions to software development, we help you navigate the complex tech landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <TiltCard className="h-full">
                  <Card className="bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-colors h-full overflow-hidden group relative p-8">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative z-10 p-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/50 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                        <service.icon className="w-8 h-8 text-primary" aria-label={`${service.title} icon`} />
                      </div>
                      <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors text-base mb-6">
                        {service.desc}
                      </CardDescription>
                    </CardHeader>
                    <ul className="space-y-3 relative z-10">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how our services can help you achieve your goals. Get in touch with us today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 rounded-none clip-path-slant hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
