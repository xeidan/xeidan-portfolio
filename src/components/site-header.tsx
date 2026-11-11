
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label="Daniel Keme home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Daniel Keme"
            width={500}
            height={300}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}

          <a
            className="nav-cv"
            href="/documents/daniel-keme-cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/documents/daniel-keme-cv.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Résumé ↗
          </a>
        </nav>
      )}
    </header>
  );
}
