export interface HeroAdditionalImages {
  first?: string;
  second?: string;
}

export interface MobileProductHeroProps {
  heroImage?: string;
  title?: string;
  onConfigureClick: () => void;
  additionalImages?: HeroAdditionalImages;
}