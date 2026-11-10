import Link from 'next/link';
export default function NotFound() { return <section className="not-found section-wrap"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>This page wandered<br/>off the map<span>.</span></h1><Link className="button button-dark" href="/">Back to home</Link></section>; }
