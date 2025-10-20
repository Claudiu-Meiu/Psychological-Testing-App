export interface ClientPaSchmieschek {
  _id?: string;
  date: Date;
  name: string;
  dateOfBirth: Date | null;
  age: number | null;
  gender: string;
  answers: Record<string, string>;
  scores?: any;
}
