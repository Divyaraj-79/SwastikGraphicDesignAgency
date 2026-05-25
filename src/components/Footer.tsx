import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 px-margin-mobile md:px-margin-desktop py-16 max-w-max-width mx-auto">
        <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col justify-between">
          <div>
            <Link href="/" className="relative h-12 w-48 block mb-6">
              <Image
                src="/swastik-logo-new.png"
                alt="Swastik Branding Agency Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </Link>
            <p className="font-inter text-xs text-on-surface-variant max-w-xs mb-8 leading-relaxed">
              Premium graphic design and branding solutions. Shaping visual identity through creative precision and high-fidelity print.
            </p>
          </div>
          <p className="font-inter text-[10px] text-on-surface-variant/60 hidden md:block">
            © {new Date().getFullYear()} Swastik Branding Agency.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-zt font-black text-xs text-primary uppercase tracking-[0.2em] mb-8">
            Navigation
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-zt font-black text-xs text-primary uppercase tracking-[0.2em] mb-8">
            Working Hours
          </h4>
          <ul className="space-y-3 font-zt font-medium text-[10px] text-on-surface-variant">
            <li className="flex flex-col">
              <span className="text-primary-fixed">MON - SAT</span>
              <span>09:00 AM - 01:00 PM</span>
              <span>03:00 PM - 08:00 PM</span>
            </li>
            <li className="flex flex-col mt-4">
              <span className="text-error italic">SUNDAY</span>
              <span>CLOSED</span>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-zt font-black text-xs text-primary uppercase tracking-[0.2em] mb-8">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/privacy-policy"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-zt font-black text-xs text-primary uppercase tracking-[0.2em] mb-8">
            Support
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/faq"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-inter text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
