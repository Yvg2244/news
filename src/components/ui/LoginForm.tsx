import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { database } from "../../firebase/firebase";
import { onValue, ref, child, get, set } from "firebase/database";
import { updateUid, updateUserEmail,updateUserFav } from "@/store/userSlice";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const useremail = useSelector((state: any) => state.userReducer.value.email);
  const userdata = useSelector<Object>((state: any) => {
    state.userReducer.value.email;
  });
  const dbRef = ref(database);
 
  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        // console.log(data.user);
        auth.onAuthStateChanged((user) => {
          const userRef = ref(database, `users/${data.user.uid}`);
          get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
              dispatch(updateUserEmail(snapshot.val().email));
              dispatch(updateUserFav(snapshot.val().fav));
              dispatch(updateUid(data.user.uid));
              localStorage.setItem("UserEmail", snapshot.val().email);
              localStorage.setItem("UserFav", snapshot.val().fav);
            } else {
              set(userRef, {
                email: data.user.email,
                fav: ["new"],
              });
              dispatch(updateUserEmail(data.user.email?data.user.email:""));
              localStorage.setItem("UserEmail", data.user.email?data.user.email:"");
              localStorage.setItem("UserFav", "new");
            }
          });
        });

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = () => {
    localStorage.clear()
    dispatch(updateUserEmail(""));
    dispatch(updateUserFav([""]));

  };
  return (
    <>
      {!useremail ? (
        <Button
          onClick={handleSignin}
          className="bg-black text-white"
          variant="outline"
        >
         Login
        </Button>
      ) : (
        <Button
          onClick={handleLogout}
          className="bg-black text-white"
          variant="outline"
        >
          Logout
        </Button>
      )}
    </>
  );
};
