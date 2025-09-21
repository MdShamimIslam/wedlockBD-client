export const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

export const formatDate = (isoDate)=> {
  if (!isoDate) return "";
  return isoDate.split("T")[0];
}


// local env
// VITE_apiKey=AIzaSyDmwLQA-USWiN_VR7-GEv8o8AMtnqMsvjs
// VITE_authDomain=wedlockbd-fbc3e.firebaseapp.com
// VITE_projectId=wedlockbd-fbc3e
// VITE_storageBucket=wedlockbd-fbc3e.appspot.com
// VITE_messagingSenderId=958894062257
// VITE_appId=1:958894062257:web:1713330360a7be109d0090

// VITE_IMGBB_KEY=dfd91fe7b40a45c4ce98c5607bc7e223

// VITE_STRIPE_PK=pk_test_51O3uWLAiuHUAtXvvBzcwxiAM5OkjEFNYy2wEyauwkjgXkADlmlS1S2SuZtUsPxd1Mqx54DohJs7DPCk6afoxeCUc00QpB6Kp7d
