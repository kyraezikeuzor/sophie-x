import Link from "next/link";
import { Check } from "@/components/Check";
import { SignupForm } from "@/components/SignupForm";
import { showPoints } from "@/lib/content";

const offerings = [
  { href: "/episodes", title: "Podcast", text: "Conversations with teens and experts. Coming soon." },
  { href: "/resources", title: "Resources", text: "Crisis lines, peer support, and places to find care." },
  { href: "/share-your-story", title: "Share your story", text: "Send a question or an experience. You can stay anonymous." },
] as const;

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap hero-split">
          <figure className="photocard rise">
            <span className="photocard-tape" aria-hidden="true" />
            <img src="/sophie-portrait.jpg" alt="Portrait of Sophie Xu" />
            <figcaption>
              <span className="photocard-name">Sophie Xu, founder</span>
              <span className="photocard-quote">&ldquo;I wanted girls to know they&apos;re not alone.&rdquo;</span>
            </figcaption>
          </figure>
          <div className="rise rise-2">
            <h1>Empowering a Generation of Girls to Feel Heard</h1>
            <p className="hero-sub">
              Girls Who Rise is a podcast for teen girls, created by Sophie Xu. Honest conversations about the things
              we don&apos;t always know how to say out loud.
            </p>
            <SignupForm />
          </div>
        </div>
        <div className="wrap">
          <div className="offer-row rise rise-2">
            {offerings.map((item) => (
              <Link key={item.href} href={item.href} className="card offer">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="card feature">
            <div>
              <h2>Meet Sophie Xu</h2>
              <p className="muted">
                &ldquo;As a teenager, I know how hard it can be to talk about what we&apos;re going through. I wanted to
                create a space where girls could feel heard, share their experiences, and know they&apos;re not alone.&rdquo;
              </p>
              <Link href="/about" className="btn btn-secondary">About us</Link>
            </div>
            <img className="feature-photo" src="/sophie-beach.jpg" alt="Sophie Xu at the beach at sunset" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="section-title">Mental health is part of life. So why is it still so hard to talk about?</h2>
            <p>
              Girls Who Rise is a podcast for teen girls that makes room for honest conversations about what we&apos;re
              going through, even when it&apos;s hard to find the words.
            </p>
            <p>
              Hosted by Sophie Xu, the show explores school, friendships, family, confidence, and the feelings we often
              keep to ourselves. With real stories and thoughtful conversations, Girls Who Rise is here to help you
              feel understood and a little less alone.
            </p>
          </div>
          <ul className="card checklist">
            {showPoints.map((point) => (
              <li key={point}>
                <Check />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
