
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
  };

  const platformLinks = [
    { label: 'Features', id: 'features' },
    { label: 'The Network', id: 'audience' },
    { label: 'Our Mission', id: 'mission' },
    { label: 'Join Waitlist', id: 'get-app' },
  ];

  const companyLinks = [
    { label: 'About AURA', href: '#about' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Us', href: 'mailto:hello@auracantik.com' },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      label: 'TikTok',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-aura-mahogany text-aura-offwhite">
      {/* Newsletter strip */}
      <div className="border-b border-white/5 py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.6em] text-aura-red mb-1">Stay Updated</p>
            <p className="text-white/60 text-sm font-light">Get launch news and exclusive updates delivered to you.</p>
          </div>
          <a
            href="#get-app"
            onClick={(e) => scrollTo(e, 'get-app')}
            className="flex items-center gap-2 px-7 py-3.5 bg-aura-red text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-aura-mahogany transition-all duration-300 hover:scale-105 shadow-lg shadow-aura-red/20 whitespace-nowrap shrink-0"
          >
            Join Waitlist
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-aura-red rounded-full flex items-center justify-center shadow-lg shadow-aura-red/20">
                <span className="text-white font-serif font-black text-base">A</span>
              </div>
              <div>
                <span className="text-sm font-serif font-bold text-white tracking-[0.1em] leading-none block">AURACANTIK</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/25 leading-none">Premium Beauty Hub</span>
              </div>
            </div>
            <p className="text-white/40 font-light text-sm max-w-xs leading-relaxed mb-8">
              A premium social marketplace by <span className="text-white/60 font-medium">AURA</span>. Connecting Malaysia's beauty and fashion industry professionals with the opportunities they deserve.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-aura-red hover:bg-aura-red/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.6em] text-white/25 mb-6">Platform</h4>
            <ul className="space-y-4">
              {platformLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollTo(e, link.id)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.6em] text-white/25 mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} AURA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors tracking-wider uppercase">Privacy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors tracking-wider uppercase">Terms</a>
            <span className="text-white/10 text-xs">·</span>
            <span className="text-xs text-white/15 tracking-wider uppercase">Made in Malaysia 🇲🇾</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
