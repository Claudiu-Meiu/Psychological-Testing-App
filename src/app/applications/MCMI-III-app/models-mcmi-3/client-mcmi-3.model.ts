export interface ClientMcmi3 {
  _id?: string;
  date: Date;
  gender: string;
  name: string;
  answers: Record<string, string>;
  scores?: any;
}
