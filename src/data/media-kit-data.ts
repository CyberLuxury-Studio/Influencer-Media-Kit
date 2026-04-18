import { MediaKitData } from "@/types";

export const mediaKitData: MediaKitData = {
  profile: {
    name: "NeoCyber Streamer",
    handle: "@NeoCyberStreamer",
    tagline: "SYS.INIT // IDENTITY_VERIFIED",
    description: "Digital Creator & Tech Streamer exploring the bleeding edge of interactive entertainment. Forging communities in the digital void.",
    contactEmail: "collab@neocyber.void",
  },
  globalEngagement: {
    rate: "8.4%",
    trend: "+1.2%",
  },
  stats: [
    {
      id: "twitch",
      platform: "TWITCH_PRIME",
      handle: "NeoCyber",
      value: "1.2M",
      label: "Total Followers",
      iconName: "twitch",
      color: "primary",
      subStats: [
        { label: "Avg CCV", value: "14.5K" },
        { label: "Hours Watched", value: "3.8M" }
      ]
    },
    {
      id: "youtube",
      platform: "YOUTUBE_VOD",
      handle: "@NeoCyberVODs",
      value: "850K",
      label: "Subscribers",
      iconName: "youtube",
      color: "secondary",
    },
    {
      id: "twitter",
      platform: "X_COMMS",
      handle: "@NeoCyber",
      value: "420K",
      label: "Followers",
      iconName: "twitter",
      color: "primary",
    },
    {
      id: "instagram",
      platform: "IG_GRID",
      handle: "@NeoCyber_IRL",
      value: "310K",
      label: "Followers",
      iconName: "instagram",
      color: "secondary",
    }
  ],
  portfolio: [
    {
      id: "p1",
      title: "Building a Custom 60% Cyberpunk Keyboard",
      description: "Full teardown and build log of the ultimate streaming deck.",
      type: "Video",
      imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      id: "p2",
      title: "Razer Edge Sponsorship Campaign",
      description: "A month-long integration driving 40k+ clicks to the Razer store.",
      type: "Brand Deal",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      id: "p3",
      title: "Charity Stream: 24Hr Marathon",
      description: "Raised $50,000 for tech accessibility in schools.",
      type: "Stream",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      link: "#"
    },
    {
      id: "p4",
      title: "Review: The Next Gen VR Headset",
      description: "Deep dive into the specs and gameplay of the latest VR tech.",
      type: "Video",
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop",
      link: "#"
    }
  ]
};
