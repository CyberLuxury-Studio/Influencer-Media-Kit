export interface SocialStat {
  id: string;
  platform: string;
  handle: string;
  value: string;
  label: string;
  iconName: "twitch" | "youtube" | "twitter" | "instagram";
  color: "primary" | "secondary";
  trend?: string;
  subStats?: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  type: "Video" | "Brand Deal" | "Stream";
  imageUrl: string;
  link: string;
}

export interface MediaKitData {
  profile: {
    name: string;
    handle: string;
    tagline: string;
    description: string;
    contactEmail: string;
  };
  globalEngagement: {
    rate: string;
    trend: string;
  };
  stats: SocialStat[];
  portfolio: PortfolioItem[];
}
