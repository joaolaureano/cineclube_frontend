export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  synopsis: string;
  critic: string;
  curator: string;
  year: number;
  pathBanner: string;
  // TODO: Platform[]
  platforms: any;
  // TODO: Tag[]
  tags: any;
  createdAt: Date;
  updatedAt: Date;
}
