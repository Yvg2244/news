import { updateNewsKeyword } from "@/store/newsSlice";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateNewsData } from "@/store/newsSlice";
type Props = {};

const Searchbar = (props: Props) => {
  const dispatch = useDispatch();
  const keyword = useSelector((state: any) => state.newsReducer.value.newsKeyWord);
  const URL = keyword
    ? `https://newsapi.org/v2/everything?q=${keyword}&apiKey=e9126a4eab5145f89aa66a732237ee59`
    : `https://newsapi.org/v2/top-headlines?country=us&apiKey=e9126a4eab5145f89aa66a732237ee59`;
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        dispatch(updateNewsData(res.data.articles));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch,URL]);
  return (
    <div>
      <input
        type="textarea"
        onChange={(e) => {
          dispatch(
            updateNewsKeyword(e.target.value != "" ? e.target.value : "")
          );
        }}
        className="max-w-[40rem] border-2 border-gray-400 rounded-md w-[90vw] p-2"
        placeholder="Enter keyword to search for..."
      ></input>
    </div>
  );
};

export default Searchbar;
