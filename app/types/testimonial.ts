export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  // Optional path to an image (relative to the public/ folder), e.g. '/testimonials/marco.webp'
  image?: string;
}