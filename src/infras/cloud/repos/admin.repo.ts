import { where, query, getDocs } from "firebase/firestore/lite";
import { IAdmin, IAdminDocument } from "../../../core";
import { BaseRepository } from "./base.repository";

class AdminRepoClass extends BaseRepository<IAdmin, IAdminDocument> {
  constructor() {
    super("admin");
  }

  getAdminByEmail = async (email: string) => {
    const queryRef = query(this.collection, where("email", "==", email));
    const docsRef = await getDocs(queryRef);
    const results = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return results[0] as IAdminDocument;
  };

  getAdmins = async () => {
    const queryRef = query(this.collection, where("isSuper", "==", false));
    const docsRef = await getDocs(queryRef);
    const results = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return results as IAdminDocument[];
  };

  getSuperAdmins = async () => {
    const queryRef = query(this.collection, where("isSuper", "==", true));
    const docsRef = await getDocs(queryRef);
    const results = docsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return results as IAdminDocument[];
  };
}

export const AdminRepo = new AdminRepoClass();
