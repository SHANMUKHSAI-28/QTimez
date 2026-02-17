import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/page-layout";
import storyImage from "@assets/generated_images/modern_tech_consulting_office.png";

export default function StoryPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Journey</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">Story</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              From a small team with a big vision to a leading tech consulting firm — discover the journey that shaped QTimez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 md:py-24 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div 
              style={{ scale, opacity }}
              className="relative perspective-1000"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-2xl opacity-50 animate-pulse" />
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="transform-style-3d"
              >
                <img 
                  src={storyImage} 
                  alt="QTimez Tech Consulting" 
                  className="relative rounded-lg border border-primary/20 shadow-2xl w-full object-cover h-[400px] md:h-[500px] z-10"
                />
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 -bottom-8 bg-card/90 backdrop-blur-md p-6 rounded-lg border border-primary/30 shadow-xl z-20 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">System Status</p>
                      <p className="font-mono text-primary font-bold">ONLINE</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovating with <span className="text-primary">Precision</span></h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At QTimez, we are a forward-thinking tech consulting firm dedicated to delivering high-impact digital solutions for businesses of all sizes.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With deep expertise in cutting-edge technologies and a relentless focus on innovation, we help our clients navigate the complexities of the digital landscape.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <h3 className="text-xl font-bold text-primary group-hover:translate-x-2 transition-transform">Strategy</h3>
                  <p className="text-sm text-muted-foreground">Cloud Strategy & Enterprise Migration solutions.</p>
                </div>
                <div className="space-y-2 group">
                  <h3 className="text-xl font-bold text-primary group-hover:translate-x-2 transition-transform">Automation</h3>
                  <p className="text-sm text-muted-foreground">DevOps & Automation for streamlined operations.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our <span className="text-primary">Journey</span>
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:-translate-x-px" />

            {[
              { year: "2014", title: "Founded", desc: "QTimez was born from a passion for technology and a vision to help businesses thrive in the digital age." },
              { year: "2016", title: "First Major Client", desc: "Secured our first enterprise client, delivering a complete cloud migration that set the standard for our work." },
              { year: "2019", title: "Team Expansion", desc: "Grew our team to 50+ specialists across cloud, software, and data analytics domains." },
              { year: "2021", title: "Global Reach", desc: "Expanded operations globally, serving clients across 15+ countries with cutting-edge solutions." },
              { year: "2024", title: "Innovation Hub", desc: "Launched our Innovation Hub for R&D in AI, ML, and next-generation technology solutions." },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
                  <div className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <span className="text-primary font-mono font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join the growing list of businesses that trust QTimez for their digital transformation journey.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 rounded-none clip-path-slant hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
