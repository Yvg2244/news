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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
type Props = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | undefined;
  content: string;
};

const NewsCard = (props: Props) => {

  return (
    <Card className="h-[470px] justify-between flex flex-col w-[25rem] py-4 px-3 ">
      <div className="w-full flex justify-center">
        <div className="w-[90%] h-[8rem]">
          <img
          // width={fu}
            className="w-full h-full"
            src={props.urlToImage ? props.urlToImage : ""}
            alt=""
          />
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {props.title.length > 50
            ? props.title.slice(0, 50) + "..."
            : props.title}
        </CardTitle>
        <CardDescription>{props.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="h-[4rem] ">
          {props.description?.length > 100
            ? props.description.slice(0, 100) + "..."
            : props.description}
        </p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="border-2 border-gray-300"
            >
              Read More
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90vw] gap-8 max-w-[425px] bg-white">
            <div className="w-full flex justify-center">
              <div className="w-[90%] h-[8rem]">
                <img
                  className="w-full h-full"
                  src={props.urlToImage ? props.urlToImage : ""}
                  alt=""
                />
                
              </div>
            </div>
            <DialogHeader>
              <DialogTitle>{props.title}</DialogTitle>
              <DialogDescription>{props.description}</DialogDescription>
            </DialogHeader>
            <div>{props.content}</div>
            <DialogFooter>
              <Button
                className="bg-black text-white"
                
                type="submit"
              >
                <Link href={props.url}>Full article</Link>
                
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
