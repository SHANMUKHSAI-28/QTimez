import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Code, BarChart, Monitor, CheckCircle, Trophy, Users, Clock, Menu, ArrowLeft, ArrowRight, Github, Linkedin, Twitter, Instagram, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TiltCard } from "@/components/ui/tilt-card";
import { ParticleBackground } from "@/components/ui/particle-background";
import heroImage from "@assets/generated_images/futuristic_ai_robot_hero_image.png";
import storyImage from "@assets/generated_images/modern_tech_consulting_office.png";

// Navigation Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Story", href: "#story" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold tracking-wider text-primary text-glow">
          QTimez
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-none clip-path-slant">
            Get Started
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-primary/20">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-display font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full bg-primary text-primary-foreground">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 perspective-1000">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Digital Future Abstract" 
            className="w-full h-full object-cover object-center opacity-60"
          />
        </motion.div>
        {/* Removed potentially conflicting gradients */}
        <div className="absolute inset-0 bg-background/50" />
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50, rotateY: 20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6 transform-style-3d"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm"
          >
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Digital Future</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Empowering Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500 text-glow filter drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">Digital Future</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg border-l-2 border-primary/50 pl-4"
          >
            At QTimez, we craft technology solutions that address your unique business needs, helping you thrive in the digital era.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4 relative z-50"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 rounded-none clip-path-slant hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover More
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 rounded-none clip-path-slant hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    { title: "Cloud Infrastructure", icon: Cloud, desc: "Scalable, secure, and efficient solutions to optimize performance while reducing costs." },
    { title: "Custom Software", icon: Code, desc: "Tailored software solutions designed to meet your unique business needs." },
    { title: "Digital Transformation", icon: Monitor, desc: "Implementing technologies to streamline operations and enhance customer experiences." },
    { title: "Data Analytics", icon: BarChart, desc: "Unlock insights from your data to drive informed decision-making and growth." },
  ];

  return (
    <section id="services" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-muted-foreground">QTimez specializes in technology consulting services that accelerate your business. From cloud solutions to software development, we help you navigate the complex tech landscape.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <TiltCard className="h-full">
                <Card className="bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-colors h-full overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary/50 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                      <service.icon className="w-7 h-7 text-primary" aria-label={`${service.title} icon`} />
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Story Section
const CompanyStory = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section id="story" className="py-24 bg-muted/10 relative overflow-hidden">
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
              {/* Floating tech element */}
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
  );
};

// Why Choose Us
const WhyChooseUs = () => {
  const features = [
    { title: "10+ Years", icon: Clock, text: "Years of experience delivering excellence in tech consulting." },
    { title: "20+ Techs", icon: Trophy, text: "Experts in over 20+ cutting-edge technologies." },
    { title: "5000+ Hours", icon: Users, text: "Hours of consulting provided to satisfied clients." },
    { title: "900+ Reviews", icon: CheckCircle, text: "Positive client reviews reflecting our dedication." },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose QTimez?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
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
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Carousel/Gallery Section
const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { title: "Web Development", desc: "Robust & Scalable Web Apps" },
    { title: "UI/UX Design", desc: "Intuitive & Engaging Interfaces" },
    { title: "E-Commerce", desc: "Seamless Online Shopping Experiences" },
    { title: "Data Analytics", desc: "Insightful Business Intelligence" },
  ];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section id="gallery" className="py-24 bg-muted/20 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Innovation Gallery</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              aria-label="Go to previous section"
              className="rounded-full border-primary/30 hover:bg-primary/20"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              aria-label="Go to next section"
              className="rounded-full border-primary/30 hover:bg-primary/20"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] w-full bg-card rounded-2xl overflow-hidden border border-white/10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                zIndex: activeIndex === index ? 10 : 0 
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center p-12"
            >
              <div className="text-center space-y-4 z-10">
                <h3 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                  {item.title}
                </h3>
                <p className="text-xl text-primary tracking-widest uppercase">{item.desc}</p>
              </div>
              {/* Abstract BG for each slide */}
              <div className={`absolute inset-0 opacity-30 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="text-2xl font-display font-bold tracking-wider text-primary mb-6 block">
              QTimez
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Solutions That Drive Innovation. Partner with us for solutions that position your business for success.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contact@qtimez.com</p>
              <p>+1 (555) 012-3456</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Services", "About Us", "Careers", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: Github, label: "Visit our Github" },
                { icon: Linkedin, label: "Visit our LinkedIn" },
                { icon: Twitter, label: "Visit our Twitter" },
                { icon: Instagram, label: "Visit our Instagram" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2024 QTimez. All rights reserved.
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary"
          >
            Back to Top <ChevronUp className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CompanyStory />
        <WhyChooseUs />
        <GalleryCarousel />
      </main>
      <Footer />
    </div>
  );
}
