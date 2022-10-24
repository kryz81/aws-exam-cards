export type Tag = string;

export interface Card {
  front: string;
  back: string;
  tags: ReadonlyArray<Tag>;
}
