export type ProcessTrack = "express" | "standard";

export interface ProcessToggleButtonsProps {
  initial?: ProcessTrack;
  onChange?: (value: ProcessTrack) => void;
  className?: string;
}