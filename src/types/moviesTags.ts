import { Tag } from "./tag";

export interface MoviesTags {
  movieId: number;
  tagId: number;
  weight: number;
  super: boolean;
  tag: Tag;
  createdAt: Date;
  updatedAt: Date;
}
