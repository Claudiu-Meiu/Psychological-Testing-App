export interface ClientMaci {
  _id?: string;
  date: Date;
  gender: string;
  age: number;
  name: string;
  answers: Record<string, string>;
  scores?: any;
}
