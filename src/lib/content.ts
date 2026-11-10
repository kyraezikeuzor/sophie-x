export const navItems = [
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
] as const;

export const ctaItem = { href: "/share-your-story", label: "Share your story" } as const;

// Where the podcast sign-up form sends emails (for example a Formspree or Buttondown URL).
// Leave empty until a service is set up.
export const podcastSignupEndpoint = "";

export const posts = [
  {
    slug: "why-is-it-so-hard-to-talk-about",
    title: "Mental health is part of life. So why is it still so hard to talk about?",
    author: "Sophie Xu",
    excerpt: "Real conversations. Real experiences. Why Girls Who Rise began.",
  },
] as const;
