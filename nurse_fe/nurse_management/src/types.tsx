export interface INurse {
  id: string;
  name: string;
  email: string;
  weekdays: string[];
  startTime: number;
  endTime: number;
  isRoundingManager: boolean;
}
