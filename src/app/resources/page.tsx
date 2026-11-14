"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";

const categories = [
  "All",
  "Crisis support",
  "Learn & cope",
  "Identity & relationships",
  "Peer support",
  "Coping skills",
  "Global youth mental health",
] as const;

type Category = (typeof categories)[number];
type ResourceCategory = Exclude<Category, "All">;

type Resource = {
  name: string;
  region: string;
  category: ResourceCategory;
  description: string;
  href: string;
  action: string;
};

const resources: readonly Resource[] = [
  {
    name: "988 Suicide & Crisis Lifeline",
    region: "United States",
    category: "Crisis support",
    description: "Free, confidential help by call, text, or chat. Call or text 988.",
    href: "https://988lifeline.org/get-help/",
    action: "Call, text, or chat",
  },
  {
    name: "Crisis Text Line",
    region: "United States",
    category: "Crisis support",
    description: "Text HOME to 741741 to reach a trained crisis counselor, any time.",
    href: "https://www.crisistextline.org/",
    action: "Text for support",
  },
  {
    name: "The Trevor Project",
    region: "LGBTQ+ youth · U.S.",
    category: "Crisis support",
    description: "Free, confidential crisis support by phone, text, or chat for LGBTQ+ young people.",
    href: "https://www.thetrevorproject.org/get-help/",
    action: "Reach a counselor",
  },
  {
    name: "Child Mind Institute",
    region: "For teens and families",
    category: "Learn & cope",
    description: "Clear guides to emotions, school stress, and challenges at home or with friends.",
    href: "https://childmind.org/topics/concerns/",
    action: "Explore teen mental health",
  },
  {
    name: "NAMI: Teens & Young Adults",
    region: "United States",
    category: "Learn & cope",
    description: "Youth focused guides for finding help, talking with friends, and looking after your mental health.",
    href: "https://www.nami.org/kids-teens-and-young-adults/youth-and-young-adult-resources/",
    action: "Browse youth resources",
  },
  {
    name: "JED Mental Health Resource Center",
    region: "For young people",
    category: "Learn & cope",
    description: "Practical guides for stress, loneliness, relationships, and supporting a friend.",
    href: "https://jedfoundation.org/mental-health-resource-center/",
    action: "Find a guide",
  },
  {
    name: "Love Is Respect",
    region: "Ages 14–24 · U.S.",
    category: "Identity & relationships",
    description: "Learn about healthy dating, boundaries, and getting help with an unhealthy relationship.",
    href: "https://www.loveisrespect.org/",
    action: "Explore relationship support",
  },
  {
    name: "Scarleteen",
    region: "For young people",
    category: "Identity & relationships",
    description: "Inclusive answers about relationships, sexuality, health, and identity.",
    href: "https://www.scarleteen.com/",
    action: "Find answers",
  },
  {
    name: "Planned Parenthood: Resources for Teens",
    region: "United States",
    category: "Identity & relationships",
    description: "Trusted links about identity, relationships, bodies, and sexual health.",
    href: "https://www.plannedparenthood.org/learn/teens/resources-for-teens",
    action: "Browse teen resources",
  },
  {
    name: "Teen Line",
    region: "United States",
    category: "Peer support",
    description: "Talk with a trained teen listener about whatever is on your mind.",
    href: "https://didihirsch.org/teenline/support-line/",
    action: "Talk to a teen listener",
  },
  {
    name: "YouthLine",
    region: "Oregon",
    category: "Peer support",
    description: "Teen volunteers and young adults listen and offer support by phone, text, or chat.",
    href: "https://www.theyouthline.org/get-help/",
    action: "Connect with YouthLine",
  },
  {
    name: "TrevorSpace",
    region: "LGBTQ+ youth · global",
    category: "Peer support",
    description: "An affirming online community for LGBTQ+ young people to connect with one another.",
    href: "https://www.trevorspace.org/",
    action: "Visit the community",
  },
  {
    name: "Your Life Your Voice",
    region: "For young people",
    category: "Coping skills",
    description: "Short tips and activities for coping with emotions and everyday challenges.",
    href: "https://www.yourlifeyourvoice.org/tips-and-tools",
    action: "Try a coping tool",
  },
  {
    name: "KidsHealth: Stress & Coping",
    region: "Teen health guides",
    category: "Coping skills",
    description: "Teen friendly articles and exercises for stress, anxiety, and big feelings.",
    href: "https://kidshealth.org/en/teens/center/stress-center.html",
    action: "Explore stress tools",
  },
  {
    name: "Headspace for Teens",
    region: "Free teen resources",
    category: "Coping skills",
    description: "Guided breathing and meditation videos for sleep, stress, and racing thoughts.",
    href: "https://www.headspace.com/teens",
    action: "Try a guided exercise",
  },
  {
    name: "UNICEF Adolescent Mental Health Hub",
    region: "Global",
    category: "Global youth mental health",
    description: "Stories and practical tools from young people, including ways to manage stress and build confidence.",
    href: "https://www.unicef.org/adolescentmentalhealthhub/",
    action: "Explore the hub",
  },
  {
    name: "WHO: Adolescent Mental Health",
    region: "Global",
    category: "Global youth mental health",
    description: "A clear overview of young people’s mental health, wellbeing, and where support matters.",
    href: "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health",
    action: "Read the overview",
  },
  {
    name: "YoungMinds",
    region: "United Kingdom",
    category: "Global youth mental health",
    description: "Advice and real stories to help young people understand what they’re feeling and find support.",
    href: "https://www.youngminds.org.uk/young-person/",
    action: "Visit YoungMinds",
  },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesCategory = category === "All" || resource.category === category;
      const searchable = [resource.name, resource.region, resource.description, resource.category].join(" ").toLowerCase();
      return matchesCategory && (!search || searchable.includes(search));
    });
  }, [category, query]);

  const visibleCategories = categories.slice(1).filter((item) =>
    filteredResources.some((resource) => resource.category === item),
  ) as readonly ResourceCategory[];

  return (
    <main id="main" className="page page-wide resources-page">
      <PageHeader
        title="A good place to start"
        subtitle="Helpful links for the stuff that comes up. Pick a section or search."
      />

      <div className="crisis-note" role="note">
        <strong>Need support now?</strong>
        <span>In the U.S., call or text <a href="https://988lifeline.org/get-help/">988</a>. If there’s immediate danger, call 911.</span>
      </div>

      <div className="resource-controls" aria-label="Find resources">
        <label className="search">
          <span className="sr-only">Search resources</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics or names"
          />
        </label>

        <div className="filters" role="group" aria-label="Filter resources by support type">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>
              {item}
              {item !== "All" && <span>{resources.filter((resource) => resource.category === item).length}</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="results-bar" aria-live="polite">
        <p>{filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}</p>
        {(query || category !== "All") && (
          <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>
            Clear filters
          </button>
        )}
      </div>

      {filteredResources.length ? (
        <div className="resource-sections">
          {visibleCategories.map((item) => {
            const sectionResources = filteredResources.filter((resource) => resource.category === item);
            return (
              <section className="resource-section" key={item} aria-labelledby={`resources-${item}`}>
                <div className="resource-section-heading">
                  <h2 id={`resources-${item}`}>{item}</h2>
                  <span>{sectionResources.length}</span>
                </div>
                <div className="resource-grid">
                  {sectionResources.map((resource) => (
                    <a className="card resource" href={resource.href} target="_blank" rel="noopener noreferrer" key={resource.name}>
                      <span className="resource-region">{resource.region}</span>
                      <h3>{resource.name}</h3>
                      <p>{resource.description}</p>
                      <span className="resource-action">{resource.action} <span aria-hidden="true">↗</span></span>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="card empty">
          <h2>No resources match that search.</h2>
          <p className="muted" style={{ margin: 0 }}>Try another word or clear the filters.</p>
        </div>
      )}

      <p className="resource-footnote">These links are a starting point, not a substitute for care from a qualified professional. Support varies by location.</p>
    </main>
  );
}
