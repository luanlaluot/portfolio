import { collection, getDocs } from "firebase/firestore";
import { firebaseStore } from ".";

export const getProject = async () => {
  const data = await getDocs(collection(firebaseStore, "project"));
  let arr: any[] = [];
  data.forEach((doc) => {
    arr.push(doc.data());
  });
  console.log(arr);
};
