import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { posts } from "@/lib/content";

const post = posts[0];

export const metadata: Metadata = { title: post.title };

export default function BlogPostPage() {
  return (
    <main id="main" className="page">
      <Link href="/blog" className="back-link">&larr; All posts</Link>
      <PageHeader title={post.title} subtitle={`By ${post.author}`} />
      <section className="card panel rise rise-2">
        <p className="lead">
          A podcast for teen girls about mental health, friendships, and growing up. Honest conversations that feel real.
        </p>
      </section>
    </main>
  );
}
