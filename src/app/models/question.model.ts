import { QuestionOptions } from './question-options.model';

export class Question {
  id: number;
  text: string;
  options: QuestionOptions[];
  correctOptionId: number;
}
