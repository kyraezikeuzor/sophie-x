import Link from "next/link";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero home-hero">
        <div className="wrap home-hero-grid">
          <div className="home-copy rise">
            <p className="eyebrow">A PODCAST BY SOPHIE XU</p>
            <h1>Some things are easier to say together.</h1>
            <p className="hero-sub">
              Mental health, friendships, and the parts of growing up nobody really prepares you for.
            </p>
            <div className="home-actions">
              <Link href="/share-your-story" className="btn btn-primary">Send Sophie a note</Link>
              <Link href="/resources" className="home-text-link">Find support</Link>
            </div>
            <p className="home-status">The podcast is in the works.</p>
          </div>
          <figure className="home-portrait rise rise-2">
            <img src="/sophie-portrait.jpg" alt="Sophie Xu" />
            <figcaption>Sophie Xu <span>Founder &amp; host</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-note">
        <div className="wrap home-note-grid">
          <img className="home-note-photo" src="/sophie-beach.jpg" alt="Sophie Xu at the beach" />
          <div className="home-note-copy">
            <p className="eyebrow">WHY I STARTED THIS</p>
            <blockquote>
              I know how hard it can be to talk about what we&apos;re going through. I wanted a space where girls could feel heard—and less alone.
            </blockquote>
            <Link href="/about" className="home-text-link">A little more about me <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
