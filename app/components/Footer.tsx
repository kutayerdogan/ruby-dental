import Link from "next/link";
import {
  Gem,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/90 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-ruby-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Gem className="w-6 h-6 text-ruby-primary" />
              <span className="text-xl font-bold tracking-wider text-white">
                RUBY<span className="text-ruby-primary">DENTAL</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the future of dentistry. Where technology meets comfort
              in a premium, glass-inspired environment.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-ruby-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-ruby-primary"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              Quick Links
              <span className="h-px flex-1 bg-white/10 ml-2"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {["Home", "About Us", "Treatments", "Technology", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-ruby-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-ruby-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              Treatments
              <span className="h-px flex-1 bg-white/10 ml-2"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {[
                "Cosmetic Dentistry",
                "Dental Implants",
                "Orthodontics",
                "Teeth Whitening",
                "General Care",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-ruby-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-ruby-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              Contact
              <span className="h-px flex-1 bg-white/10 ml-2"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-ruby-primary shrink-0" />
                <span>123 Dental Street, Medical District, Tech City</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-ruby-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-ruby-primary shrink-0" />
                <span>contact@rubydental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-black/50 p-4 rounded-xl">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ruby Dental. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
