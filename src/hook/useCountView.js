import { useEffect, useRef, useState } from "react";
import {
  getFirestore,
  collection,
  doc,
  runTransaction,
} from "firebase/firestore";

function useCountView(slug, update = false) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
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
            t.set(refViews, { view });
            if (mounted.current) {
              setCount(view);
              setLoading(false);
            }
          });
        } else {
          await runTransaction(db, async (t) => {
            const doc = await t.get(refViews);
            const view = doc.data()?.view;
            if (mounted.current) {
              setCount(view || 0);
              setLoading(false);
            }
          });
        }
      } catch {
        if (mounted.current) {
          setLoading(false);
        }
      }
    }
    updateCount();
    return () => (mounted.current = false);
  }, [slug, update, mounted]);
  return [count, loading];
}

export default useCountView;
