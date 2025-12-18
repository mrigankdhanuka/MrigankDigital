import { Instagram, Youtube, Cpu, TrendingUp, Code, Video, Globe, Palette } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mrigank Dhanuka",
  title: "AI Specialist & Full Stack Engineer",
  email: "mrigankdhanuka11@gmail.com",
  education: {
    degree: "B.Tech, Computer Science Engineering",
    school: "Indian Institute of Information Technology Kota"
  },
  finance: "4+ years experience in market analysis, data reading, technical analysis, and asset discovery."
};

export const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    items: [
      { name: "AI Wisdom Vault", url: "https://www.instagram.com/ai_wisdom_vault/", handle: "@ai_wisdom_vault" },
      { name: "Aria Morgan", url: "https://www.instagram.com/_aria_morgan_/", handle: "@_aria_morgan_" },
      { name: "Trend AI", url: "https://www.instagram.com/_trend_ai/", handle: "@_trend_ai" },
      { name: "DivyaDrishtiAstro", url: "https://www.instagram.com/divyadrishtiastro/", handle: "@divyadrishtiastro" },
      { name: "50 Shades of Millionaire", url: "https://www.instagram.com/50shadesofmillionaire/", handle: "@50shadesofmillionaire" }
    ]
  },
  {
    platform: "YouTube",
    items: [
      { name: "50 Shades of Millionaire", url: "https://www.youtube.com/@50Shadesofmillionaire", handle: "@50Shadesofmillionaire" },
      { name: "Aria Morgan", url: "https://www.youtube.com/@AriaMorgan7", handle: "@AriaMorgan7" },
      { name: "DivyaDrishtiAstro", url: "https://www.youtube.com/@Divyadrishtiastro", handle: "@Divyadrishtiastro" },
      { name: "Phantom Tunes", url: "https://www.youtube.com/@PhantomTunes1", handle: "@PhantomTunes1" },
      { name: "Trend AI", url: "https://www.youtube.com/@Trendai00", handle: "@Trendai00" }
    ]
  }
];

export const SKILLS = [
  {
    category: "AI Tools & Platforms",
    icon: Cpu,
    items: ["ElevenLabs", "Kling AI", "RunwayML", "Google Veo", "Gemini", "Claude", "Sora", "ChatGPT", "Nano Banana", "Google AI Studio", "Suno.ai", "Perplexity"]
  },
  {
    category: "Content Creation",
    icon: Video,
    items: ["CapCut", "Canva", "ClipChamp", "Video Editing", "Image Editing", "Logo Creation"]
  },
  {
    category: "Development & Tech",
    icon: Code,
    items: ["React", "Node.js", "Express", "MongoDB", "SEO", "Website Creation", "Three.js"]
  },
  {
    category: "Finance & Marketing",
    icon: TrendingUp,
    items: ["Market Analysis", "Technical Analysis", "Asset Discovery", "AI Ads", "Digital Marketing"]
  }
];

export const TYPED_STRINGS = [
  "Content Creator",
  "AI Specialist",
  "Financial Analyst",
  "Full Stack Developer",
  "Video Editor"
];