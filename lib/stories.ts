export type StoryType = "testimonial" | "case-study" | "video" | "review";

export type Story = {
  id: string;
  title: string;
  type: StoryType;
  category: string;
  location: string;
  crop: string;
  excerpt: string;
  quote: string;
  outcome: string;
  rating?: number;
  duration?: string;
  image: string;
  publishedAt: string;
};

export const stories: Story[] = [
  {
    id: "balod-paddy",
    title: "Paddy field recovery through stronger crop monitoring",
    type: "case-study",
    category: "Farmer story",
    location: "Balod, Chhattisgarh",
    crop: "Paddy",
    excerpt: "A field review helped improve stand uniformity and crop planning decisions at a critical growth stage.",
    quote: "The agronomic guidance helped us understand the field more clearly and act earlier.",
    outcome: "Improved crop visibility and better nutrient management planning.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-09-14",
  },
  {
    id: "durg-chilli",
    title: "Chilli crop stress monitoring with practical recommendations",
    type: "testimonial",
    category: "Farmer testimonial",
    location: "Durg, Chhattisgarh",
    crop: "Chilli",
    excerpt: "Short field reviews and crop-stage guidance created more confidence during a difficult weather period.",
    quote: "We could spot stress patterns sooner and respond with better timing.",
    outcome: "Better stress monitoring and crop-stage pacing.",
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-20",
    rating: 5,
  },
  {
    id: "raipur-soybean",
    title: "Video review: soybean field and growth planning insights",
    type: "video",
    category: "Video review",
    location: "Raipur, Chhattisgarh",
    crop: "Soybean",
    excerpt: "A short video case review explains how field planning and recommendations can improve decision-making across acreage.",
    quote: "We could see where timing and sequencing mattered most in the field.",
    outcome: "Clearer monitoring rhythm and more structured field decisions.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-10-02",
    duration: "3 min watch",
  },
  {
    id: "partner-review",
    title: "Retail partnership feedback on agronomy support",
    type: "review",
    category: "Partner review",
    location: "Rajnandgaon, Chhattisgarh",
    crop: "Multi-crop",
    excerpt: "Retail and distribution teams benefited from practical guidance that connected product and field recommendations.",
    quote: "The advice feels grounded in actual farming realities and helps us support growers better.",
    outcome: "Improved retailer confidence and product discussion quality.",
    image: "https://images.unsplash.com/photo-1464226184884-fa52ac9c8a0d?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-07-18",
    rating: 5,
  },
];

export const storyFilters = ["All", "Farmer story", "Farmer testimonial", "Video review", "Partner review"];
