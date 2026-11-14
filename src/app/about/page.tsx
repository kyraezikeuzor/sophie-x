import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main id="main" className="page">
      <PageHeader
        title="Hi, I’m Sophie."
        subtitle="I’m a teen and the person behind Girls Who Rise."
      />
      <section className="card host-card rise rise-2">
        <img className="host-photo" src="/sophie-beach.jpg" alt="Sophie Xu at the beach at sunset" />
        <div>
          <h3>Sophie Xu</h3>
          <span className="host-role">Founder &amp; host</span>
          <p className="muted">
            I started this because talking about mental health can feel awkward. I’d rather have the conversation anyway.
          </p>
        </div>
      </section>
    </main>
  );
}
