import { BaseRepository } from "./base.repository";

class AnswerRepoClass extends BaseRepository {
  constructor() {
    super("answer");
  }
}

export const AnswerRepo = new AnswerRepoClass();
