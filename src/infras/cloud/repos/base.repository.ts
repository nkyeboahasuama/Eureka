import {
  CollectionReference,
  DocumentData,
  Firestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { cloud } from "../setup";

export class BaseRepository<T = any, DocType = any> {
  db: Firestore = cloud.db;
  collection: CollectionReference<DocumentData>;

  constructor(collectionName: string) {
    this.collection = collection(this.db, collectionName);
  }

  addDoc = async (data: T) => {
    await addDoc(this.collection, data as any); //cast to avoid linting error
  };

  getDoc = async (id: string) => {
    const docRef = doc(this.collection, id);
    const data = await getDoc(docRef);
    if (data?.exists()) {
      return { ...data.data(), id: docRef.id } as DocType;
    }
    return undefined;
  };

  getDocs = async () => {
    const queryRef = query(this.collection);
    const data = await getDocs(queryRef);
    const results = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return results as DocType[];
  };

  editDocById = async (id: string, data: Partial<T>) => {
    const docRef = this.createDocRef(id);
    await updateDoc(docRef, data as any);
  };
  editDocs = async () => {};
  deleteDocById = async () => {};
  deleteDocsByFilter = async () => {};

  protected createDocRef = (id: string) => {
    return doc(this.collection, id);
  };
}
