import { Link } from "wouter";
import { Github, Linkedin, Twitter, Instagram, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-display font-bold tracking-wider text-primary mb-6 block">
              QTimez
            </Link>
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
              {[
                { name: "Services", href: "/services" },
                { name: "Our Story", href: "/story" },
                { name: "Why Us", href: "/why-us" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
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

export default Footer;
