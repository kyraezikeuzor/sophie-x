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
type FilterCategory = Exclude<Category, "All">;

type Resource = {
  name: string;
  organization: string;
  description: string;
  details: string;
  categories: readonly FilterCategory[];
  topics: readonly string[];
  href: string;
  action: string;
  urgent?: boolean;
};

const resources: readonly Resource[] = [
  {
    name: "988 Suicide & Crisis Lifeline",
    organization: "988 Lifeline",
    description: "Support for people experiencing emotional distress or a mental health crisis. Call or text 988, or use online chat.",
    details: "",
    categories: ["Crisis support"],
    topics: ["call", "text", "chat", "emotional distress", "crisis"],
    href: "https://988lifeline.org/",
    action: "Call, text, or chat",
    urgent: true,
  },
  {
    name: "Child Mind Institute",
    organization: "Child Mind Institute",
    description: "Understand intense emotions and challenges that can affect teens at school, home, and with friends.",
    details: "",
    categories: ["Learn & cope"],
    topics: ["emotions", "school", "home", "friends"],
    href: "https://childmind.org/",
    action: "Visit Child Mind Institute",
  },
  {
    name: "Crisis Text Line",
    organization: "Crisis Text Line",
    description: "Text HOME to 741741 in the U.S. to connect with a trained crisis counselor.",
    details: "",
    categories: ["Crisis support"],
    topics: ["text", "HOME", "741741", "counselor"],
    href: "https://www.crisistextline.org/",
    action: "Get text support",
    urgent: true,
  },
  {
    name: "Love Is Respect",
    organization: "Love Is Respect",
    description: "Learn about healthy relationships, boundaries, respect, and recognizing unhealthy behavior.",
    details: "",
    categories: ["Identity & relationships"],
    topics: ["relationships", "boundaries", "respect"],
    href: "https://www.loveisrespect.org/",
    action: "Explore relationship support",
  },
  {
    name: "Teen Line",
    organization: "Teen Line",
    description: "A teen-to-teen support organization where young people can talk with trained teen listeners about school, friendships, family, mental health, and other challenges.",
    details: "",
    categories: ["Peer support"],
    topics: ["school", "friendships", "family", "mental health"],
    href: "https://didihirsch.org/all-news/for-youth-by-youth-teen-line-provides-young-people-with-mental-health-support/",
    action: "Learn about Teen Line",
  },
  {
    name: "Your Life Your Voice",
    organization: "Your Life Your Voice",
    description: "Provides practical coping strategies, reflection activities, and guidance for handling difficult emotions and everyday challenges.",
    details: "",
    categories: ["Coping skills"],
    topics: ["coping", "reflection", "emotions", "challenges"],
    href: "https://www.yourlifeyourvoice.org/?utm_source=google-ads&utm_medium=search-grants&utm_id=7973893665&utm_term=&utm_campaign=7973893665&gad_source=1&gad_campaignid=7973893665&gbraid=0AAAAADIVyl9_DmV5p4SoA0HKi3rpHbKyQ&gclid=CjwKCAjwgJHXBhBGEiwAHohJqz6LthCFTyoQ6rbRnH1A5xNK9VInhygF4XhxLeOL12c_kqM6b2odxhoCYAIQAvD_BwE",
    action: "Explore coping tools",
  },
  {
    name: "UNICEF – Adolescent Mental Health Hub",
    organization: "UNICEF",
    description: "An international resource created by UNICEF with practical strategies for managing stress, building confidence, navigating friendships, understanding emotions, and supporting other young people. Includes stories and resources from adolescents around the world.",
    details: "",
    categories: ["Global youth mental health"],
    topics: ["stress", "confidence", "friendships", "emotions", "global"],
    href: "https://www.unicef.org/adolescentmentalhealthhub/",
    action: "Visit UNICEF’s hub",
  },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const categoryMatches = category === "All" || resource.categories.some((item) => item === category);
      const searchable = [resource.name, resource.organization, resource.description, resource.details, ...resource.categories, ...resource.topics].join(" ").toLowerCase();
      return categoryMatches && (!search || searchable.includes(search));
    });
  }, [category, query]);

  return (
    <main id="main" className="page page-wide">
      <PageHeader
        title="Teen mental health resources"
        subtitle="Search by what you're feeling or filter by the kind of support you want."
      />

      <div className="rise rise-2">
        <div className="resource-controls">
          <label className="search">
            <span className="sr-only">Search mental health resources</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources"
            />
          </label>

          <div className="filters" role="group" aria-label="Filter by support type">
            {categories.map((item) => (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="results-bar" aria-live="polite">
          <p>
            {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
          </p>
          {(query || category !== "All") && (
            <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>
              Clear filters
            </button>
          )}
        </div>

        {filteredResources.length > 0 ? (
          <div className="resource-grid">
            {filteredResources.map((resource) => (
              <a
                className={`card resource${resource.urgent ? " urgent" : ""}`}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                key={resource.name}
              >
                <h2>{resource.name}</h2>
                <p>{resource.description}</p>
                <span className="resource-action">{resource.action} ↗</span>
              </a>
            ))}
          </div>
        ) : (
          <div className="card empty">
            <h2>No resources match that search.</h2>
            <p className="muted" style={{ margin: 0 }}>Try a broader word or clear the filters to see everything.</p>
          </div>
        )}

        <p className="fine" style={{ marginTop: 20 }}>
          These links offer information and support, but they are not a substitute for care from a qualified mental health
          professional. Availability and services may vary by location.
        </p>
      </div>
    </main>
  );
}
