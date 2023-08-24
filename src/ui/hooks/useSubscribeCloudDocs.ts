import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Repos } from "../../infras/cloud/repos/interface";
import { cloud } from "../../infras/cloud/setup";

interface PageDataSubscription<T = any> {
  loading: boolean;
  error: boolean;
  data: T[];
}

export function useSubscribeToRepository<T = any>(
  repo: Repos
): PageDataSubscription<T> {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(cloud.db, repo);
    const queryRef = query(collectionRef);
    const unSubscribe = onSnapshot(
      queryRef,
      (observer) => {
        const docs = observer.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as T[];
        setData(docs);
        setLoading(false);
      },
      (error) => {
        console.log("Subscription to Questions ERROR", error);
        setError(true);
        setLoading(false);
      }
    );

    return function () {
      unSubscribe();
    };
  }, []);

  return {
    data,
    error,
    loading,
  };
}
