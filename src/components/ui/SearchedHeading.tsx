"use client"
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

const SearchedHeading = (props: Props) => {
  useEffect(()=>{
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "UserName" || e.key === "UserEmail") {
        console.log("Local storage changed:", e.key, e.newValue);
        // Perform any actions you want in response to the local storage change
      }
    };

    // Listen for the storage event
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  })
  const useremail = useSelector((state: any) => state.userReducer.value.email);
  const keyword = useSelector(
    (state: any) => state.newsReducer.value.newsKeyWord
  );
  return (
    <div className="flex w-[100vw] flex-col gap-2 text-xl lg:text-3xl font-extrabold px-8 my-4">
      <p>
        {useremail ? "Showing news realted with :" : "Login to access news"}
      </p>
      <h2 className="text-2xl lg:text-4xl">
      {useremail ? keyword != "" ? keyword : "All news" : ""}
        </h2>
    </div>
  );
};

export default SearchedHeading;
