import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cpu, 
  Bot, 
  BrainCircuit, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Settings, 
  ArrowRight, 
  ArrowLeft, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import heroImage from "@assets/generated_images/futuristic_ai_robot_hero_image.png";
import storyImage from "@assets/generated_images/modern_robotics_lab.png";

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
          ARTIFICE<span className="text-foreground">.AI</span>
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Futuristic AI Robot" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Next Gen Robotics</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Empowering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 text-glow">Future</span> With <br />
            AI & Robotics
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
            We bridge the gap between biological intelligence and mechanical precision. 
            Experience the next evolution of automation.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 rounded-none clip-path-slant">
              Explore More
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 rounded-none clip-path-slant">
              Watch Video
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    { title: "AI Integration", icon: BrainCircuit, desc: "Seamlessly embed neural networks into your existing infrastructure." },
    { title: "ML Solutions", icon: Cpu, desc: "Adaptive machine learning algorithms that evolve with your data." },
    { title: "Robotics Automation", icon: Bot, desc: "High-precision mechanical systems for industrial efficiency." },
    { title: "Computer Vision", icon: Eye, desc: "Advanced optical recognition for autonomous navigation and QC." },
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
          <p className="text-muted-foreground">Cutting-edge solutions designed to accelerate your transition into the autonomous era.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-primary/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-6 h-6" aria-label={`${service.title} icon`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Story Section
const CompanyStory = () => {
  return (
    <section id="story" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-2xl opacity-50" />
            <img 
              src={storyImage} 
              alt="Artifice Robotics Laboratory" 
              className="relative rounded-lg border border-primary/20 shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
            />
          </motion.div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Forging the Future</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At Artifice AI, we believe that the synthesis of artificial intelligence and robotics is not just an industrial upgrade—it is the next step in human evolution.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our mission is to create autonomous systems that amplify human potential, solving complex problems with speed and precision previously thought impossible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Mission</h3>
                <p className="text-sm text-muted-foreground">To democratize advanced robotics for every industry.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Vision</h3>
                <p className="text-sm text-muted-foreground">A world where humans and machines collaborate seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us
const WhyChooseUs = () => {
  const features = [
    { title: "Easy Integration", icon: Settings, text: "Plug-and-play modules designed for universal compatibility." },
    { title: "New Technology", icon: Zap, text: "Always ahead of the curve with the latest neural architectures." },
    { title: "Reliability", icon: ShieldCheck, text: "Industrial-grade durability tested in extreme environments." },
    { title: "Security", icon: Bot, text: "Military-grade encryption for all autonomous communications." }, // Reusing Bot icon or finding generic Lock
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Artifice?</h2>
        
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
    { title: "Project Alpha", desc: "Autonomous Drone Swarm" },
    { title: "Project Beta", desc: "Deep Sea Exploration Unit" },
    { title: "Project Gamma", desc: "Micro-Surgery Assistant" },
    { title: "Project Delta", desc: "Atmospheric Processor" },
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
              ARTIFICE<span className="text-foreground">.AI</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Redefining the boundaries of what machines can do. We build the intelligence that powers tomorrow.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contact@artifice.ai</p>
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
            © 2024 Artifice AI Robotics. All rights reserved.
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
