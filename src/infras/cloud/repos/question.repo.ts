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

  getValidatedDocs = async () => {
    const queryRef = query(this.collection);
    const docsRef = await getDocs(queryRef);
    const results = docsRef.docs
      .filter((doc) => qtnValidated(doc.data() as IQuestionDocument))
      .map((ref) => ({ ...ref.data(), id: ref.id }));
    return results as IQuestionDocument[];
  };
}

export const QuestionRepo = new QuestionRepoClass();

function qtnValidated(question: IQuestionDocument) {
  const { validators } = question;
  const approvals = validators.filter((vl) => vl.status === "approve");
  if (approvals.length >= 2) return true;
  return false;
}
