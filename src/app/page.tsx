import Link from "next/link";

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero home-hero">
        <div className="wrap home-hero-grid">
          <div className="home-copy rise">
            <p className="eyebrow">GIRLS WHO RISE</p>
            <h1>Empowering a generation of girls to be heard.</h1>
            <p className="hero-sub">
              A mental health organization for teens, founded by Sophie Xu. Our podcast is coming soon.
            </p>
            <div className="home-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd7BR5mTqnbCCnTeFhfmVsKuHpLZagUVVblsRt2jvTN9biq_g/viewform?usp=header"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up
              </a>
            </div>
          </div>
          <figure className="home-portrait photocard rise rise-2">
            <span className="photocard-tape" aria-hidden="true" />
            <img src="/sophie-portrait.jpg" alt="Sophie Xu" />
            <figcaption className="founder-sticky">Sophie Xu, Founder</figcaption>
          </figure>
        </div>
      </section>

      <section className="section home-note">
        <div className="wrap home-note-grid">
          <img className="home-note-photo" src="/sophie-beach.jpg" alt="Sophie Xu at the beach" />
          <div className="home-note-copy">
            <p className="eyebrow home-note-heading">WHY I STARTED THIS</p>
            <blockquote>
              I&apos;m a teenager who got tired of mental health content that either felt too clinical or too vague to actually help. So I started building what I wished existed.
            </blockquote>
            <Link href="/about" className="home-text-link">About us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
