import { getDocs, query, where } from "firebase/firestore";
import { IAnswer, IAnswerDocument } from "../../../core";
import { BaseRepository } from "./base.repository";

class AnswerRepoClass extends BaseRepository<IAnswer, IAnswerDocument> {
  constructor() {
    super("answer");
  }

  getQuestionAnswerExists = async (questionId: string) => {
    const queryRef = query(
      this.collection,
      where("question", "==", questionId)
    );
    const docs = await getDocs(queryRef);
    if (docs.docs.length === 1) return true;
    return false;
  };
}

export const AnswerRepo = new AnswerRepoClass();
