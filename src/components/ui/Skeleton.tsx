"use client"
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const Skeleton = () => {
  const [shimmer, setshimmer] = useState("bg-gray-200")
  let c=0
  const changeShimmer=()=>{
    c=c+1
    c%2==0?setshimmer("bg-gray-100"):setshimmer("bg-gray-200")
  }
  useEffect(()=>{
    const interval=setInterval(changeShimmer,700)
    return ()=>clearInterval(interval)
  },[])
  return (
    <Card className="h-[470px] w-[25rem] py-4 px-3 ">
      <div className="w-full flex justify-center">
        <div className={`w-[90%] h-[8rem] ${shimmer}`}></div>
      </div>

      <CardHeader>
        <CardTitle className={`text-xl h-[84px] ${shimmer} font-semibold`}>
         
        </CardTitle>
        <CardDescription className={` ${shimmer}`}></CardDescription>
      </CardHeader>
      <CardContent>
        <p className={`h-[4rem]  ${shimmer} overflow-hidden`}>
         
        </p>
      </CardContent>
      <CardFooter>
        <Button className={`border-2 w-[6rem] ${shimmer} border-gray-300`}></Button>
      </CardFooter>
    </Card>
  );
};

export default Skeleton;
