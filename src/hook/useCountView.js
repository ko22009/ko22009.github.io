import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  runTransaction,
} from "firebase/firestore";

function useCountView(slug, update = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function updateCount() {
      const db = getFirestore();
      const collectionViews = collection(db, "post");
      const refViews = doc(collectionViews, slug);
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
    }
    updateCount();
  }, [slug, update]);
  return count;
}

export default useCountView;
