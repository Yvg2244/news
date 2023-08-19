"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/store";
type Props = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string|undefined;
  content: string;
};

const NewsCard = (props: Props) => {
  const data = useAppSelector((state) => state.newsReducer.value.a);
  return (
    <Card className="h-[470px] justify-between flex flex-col w-[25rem] py-4 px-3 ">
      <div className="w-full flex justify-center">
        <div className="w-[90%] h-[8rem]">
          <img
            className="w-full h-full"
            src={props.urlToImage?props.urlToImage:""}
            alt=""
          />
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-semibold">
         {props.title.length>50?props.title.slice(0,50)+"...":props.title}
        </CardTitle>
        <CardDescription>{props.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="h-[4rem] ">
         {props.description.length>100?props.description.slice(0,100)+"...":props.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="border-2 border-gray-300">Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
