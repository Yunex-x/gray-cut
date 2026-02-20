export interface GalleryImageSet {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export interface GridGalleryProps {
  images?: GalleryImageSet;
  className?: string;
}