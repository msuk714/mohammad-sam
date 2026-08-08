import Link from "next/link";
export default function NotFound() { return <section className="page-hero section-pad"><div className="container narrow"><span className="eyebrow">404</span><h1>This page isn&apos;t ranking anywhere.</h1><p>The URL you requested doesn&apos;t exist.</p><Link className="button" href="/">Back Home</Link></div></section>; }
