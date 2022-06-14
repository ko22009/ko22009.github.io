import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  runTransaction,
} from "firebase/firestore";

function useCountView(slug, update = false) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function updateCount() {
      setLoading(true);
      const db = getFirestore();
      const collectionViews = collection(db, "posts");
      const refViews = doc(collectionViews, slug);
      try {
        if (update) {
          await runTransaction(db, async (t) => {
            const doc = await t.get(refViews);
            const oldView = doc.data()?.view;
            const view = oldView !== undefined ? oldView + 1 : 0;
            setCount(view);
            t.set(refViews, { view });
          });
        } else {
          await runTransaction(db, async (t) => {
            const doc = await t.get(refViews);
            const view = doc.data()?.view;
            setCount(view || 0);
          });
        }
      } catch {}
      setLoading(false);
    }
    updateCount();
  }, [slug, update]);
  return [count, loading];
}

export default useCountView;
