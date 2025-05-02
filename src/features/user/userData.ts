import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';

export const fetchUserLearningLanguage = async () => {
  const user = auth.currentUser;

  if (user) {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();

      return userData.learningLanguage;
    }
  }

  return null;
};
