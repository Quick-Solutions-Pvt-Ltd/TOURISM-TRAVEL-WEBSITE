export type TourCategory =
  | 'cultural'
  | 'wildlife'
  | 'beaches'
  | 'mountains'
  | 'tea'
  | 'food'
  | 'village'
  | 'adventure';

export interface Tour {
  slug: string;
  name: string;
  nameFr: string;
  destination: string;
  destinationFr: string;
  duration: string;
  durationFr: string;
  price: string;
  image: string;
  shortDescription: string;
  shortDescriptionFr: string;
  category: TourCategory;
  longDescription: string;
  longDescriptionFr: string;
  highlights: string[];
  highlightsFr: string[];
  inclusions: string[];
  inclusionsFr: string[];
  exclusions: string[];
  exclusionsFr: string[];
  itinerary: { day: string; title: string; titleFr: string; description: string; descriptionFr: string }[];
  gallery: string[];
  signature?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  titleFr: string;
  category: string;
  image: string;
  description: string;
  descriptionFr: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  caption: string;
  captionFr: string;
  width: number;
  height: number;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  countryFr: string;
  text: string;
  textFr: string;
  experience: string;
  experienceFr: string;
  photo?: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  questionFr: string;
  answer: string;
  answerFr: string;
}

export type Language = 'en' | 'fr';