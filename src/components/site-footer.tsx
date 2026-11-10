import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><Link href="/" className="footer-brand">Daniel Keme<span>.</span></Link><p>Designed with intent. Built with care.</p><div className="footer-links"><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14}/></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></div><small>© {new Date().getFullYear()} Daniel Keme</small></div></footer>;
}
