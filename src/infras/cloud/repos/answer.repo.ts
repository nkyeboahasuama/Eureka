import { IAnswer, IAnswerDocument } from "../../../core";
import { BaseRepository } from "./base.repository";

class AnswerRepoClass extends BaseRepository<IAnswer, IAnswerDocument> {
  constructor() {
    super("answer");
  }
}

export const AnswerRepo = new AnswerRepoClass();
