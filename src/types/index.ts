import { string } from "zod";

export type ProductTag = "hit" | "new";

export interface Product {
  id: string;
  name: string;
  description: string;
  priceFrom: string; // in RUB
  image: string;
  images?: string[];
  alt: string;
  tag?: ProductTag;
}

export interface MasterclassFeature {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface MasterclassPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  featured?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  category: string;
  rating: number;
  quote: string;
  initials: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "default";
}

export interface ContactTopic {
  value: string;
  label: string;
}

export interface ContactPayload {
  name: string;
  contact: string;
  topic: string;
  message: string;
}
