export interface PlaceholderImage {
  id: string;
  description: string;
  src: string;
  imageHint: string;
}

export const PlaceHolderImages: PlaceholderImage[] = [
  {
    id: "developer-image",
    description: "Portrait of a young Indian male software developer.",
    src: "/profile.png",
    imageHint: "developer portrait"
  },
  {
    id: "portfolio-project",
    description: "Laptop showing a modern developer portfolio website.",
    src: "/ai_agent.png",
    imageHint: "ai chatbot"
  },
  {
    id: "ecommerce-project",
    description: "Medical imaging scan for lung cancer detection with AI overlay.",
    src: "",
    imageHint: "medical imaging"
  },
  {
    id: "marketplace-project",
    description: "Laptop showing a digital marketplace for websites.",
    src: "",
    imageHint: "digital marketplace"
  },
  {
    id: "coming-soon-project",
    description: "Laptop showing a 'Coming Soon' message for a new project.",
    src: "/cs.png",
    imageHint: "coming soon"
  }
];
