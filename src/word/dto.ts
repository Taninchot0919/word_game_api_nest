export interface CreateWordDTO {
  name: string;
  genreId?: string;
}

export class WordDTO {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
