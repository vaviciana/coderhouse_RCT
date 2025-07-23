import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
import { App } from "./firebaseConfig"

const db = getFirestore(App);

export const getProductos = async (categoryName = null) => {
    let ref = collection(db, "productos");

  // Si hay categoría, aplicamos filtro
    if (categoryName) {
    ref = query(ref, where("category", "==", categoryName));
    }

    const snapshot = await getDocs(ref);
    const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productos;
};

export const getProductoById = async (id) => {
    const ref = doc(db, "productos", id);
    const snapshot = await getDoc(ref);
    return { id: snapshot.id, ...snapshot.data() };
};