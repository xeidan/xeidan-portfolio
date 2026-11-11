
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link
          href="/"
          className="footer-brand"
          aria-label="Daniel Keme home"
        >
          <svg
            className="footer-mark"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footerMarkGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#D8D8D8" />
              </linearGradient>
              <linearGradient id="footerFoldGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#AFAFAF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M14 5 H43 C75 5 95 23 95 50 S75 95 43 95 H14 C8 95 5 92 5 86 V14 C5 8 8 5 14 5Z"
              fill="url(#footerMarkGradient)"
            />

            <path
              d="M7 83 Q48 45 93 29"
              fill="none"
              stroke="url(#footerFoldGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <span>daniel keme</span>
        </Link>

        <p>Designed with intent. Built with care.</p>

        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>
            Email <ArrowUpRight size={14} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>

        <small>© {new Date().getFullYear()} Daniel Keme</small>
      </div>
    </footer>
  );
}
