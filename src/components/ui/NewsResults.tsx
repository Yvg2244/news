import React, { useEffect } from "react";
import NewsCard from "./NewsCard";

import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

type Props = {};

const NewsResults = (props: Props) => {
  const data = useSelector((state: any) => state.newsReducer.value.newsData);
  return (
    <>
      {data.length!=0 ? (
        <div className="flex flex-wrap gap-4 px-8">
          {data.map((item: any,index:number) => {
            return (
              <NewsCard
              key={index}
                author={item.author}
                title={item.title}
                description={item.description}
                url={item.url}
                urlToImage={item.urlToImage}
                content={item.content}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 px-8">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
    </>
  );
};

export default NewsResults;
