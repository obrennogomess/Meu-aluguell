export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  helpfulCount: number;
  userVoted?: 'yes' | 'no' | null;
  device?: 'phone' | 'tablet';
}

export interface AppCategory {
  id: string;
  name: string;
  iconName: string;
  active?: boolean;
}
