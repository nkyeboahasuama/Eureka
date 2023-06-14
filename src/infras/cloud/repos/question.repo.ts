import {
  where,
  query,
  getDocs,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { IQuestion, IQuestionDocument } from "../../../core";
import { BaseRepository } from "./base.repository";

class QuestionRepoClass extends BaseRepository<IQuestion, IQuestionDocument> {
  constructor() {
    super("question");
  }

  getAdminCanMarkQuestion = async (adminId: string) => {
    // get all docs that has the admin id as marked and opened. if count > 0, return false. ensure that admin only has one openly marked qtn at all times
    const queryRef = query(
      this.collection,
      where("marked", "==", true),
      where("markedBy", "==", adminId)
    );
    const docsRef = await getDocs(queryRef);
    if (docsRef.docs.length > 0) return false;
    return true;
  };

  addValidator = async (
    questionId: string,
    validator: Pick<IQuestion, "validators">["validators"][number]
  ) => {
    const docRef = this.createDocRef(questionId);
    await updateDoc(docRef, {
      validators: arrayUnion(validator),
    });
  };
}

export const QuestionRepo = new QuestionRepoClass();
