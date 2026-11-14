import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "Episodes" };

export default function EpisodesPage() {
  return (
    <main id="main" className="page page-wide">
      <PageHeader title="Episodes" subtitle="First conversations are on the way." />
      <section className="episodes-note card rise rise-2">
        <p className="eyebrow">GIRLS WHO RISE, IN YOUR EARS SOON</p>
        <h2>What should we talk about?</h2>
        <p>Send Sophie a question, a topic, or a story you’d like the show to make room for.</p>
        <div className="home-actions">
          <Link href="/share-your-story" className="btn btn-primary">Send a story</Link>
          <Link href="/resources" className="home-text-link">Find support</Link>
        </div>
      </section>
    </main>
  );
}
