"use client"
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import "../../app/globals.css";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { database } from "@/firebase/firebase";
import { ref, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { updateUid, updateUserFav } from "@/store/userSlice";
const Favourits = () => {
  const [category, setCategory] = useState<
    string | number | readonly string[] | undefined
  >("");
  const userId = useSelector((state: any) => state.userReducer.value.uid);
  const userFav = useSelector((state: any) => state.userReducer.value.fav);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const updatedFav = [...userFav, category];
    set(ref(database, "users/" + userId), {
      fav: updatedFav,
    });
    dispatch(updateUserFav(updatedFav));
  };
  return (
    <div className="flex w-[100vw] flex-col gap-4 justify-between my-2 px-8">
      <div className="h-8">
        <div className="w-full overflow-none gap-2 py-2 flex justify-start lg:justify-between">
          <span>Your Favourits: </span>
          {userFav.map((item: any,index:any) => {
            return (
              <Badge key={index} className="bg-black text-white" variant="outline">
                {item}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="w-fit">
        <Popover >
          <PopoverTrigger asChild>
            <Button variant="outline">Add Category</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-white">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Category</h4>
                <p className="text-sm text-muted-foreground">
                  Type any keyword for news.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Category</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                </div>
                <Button
                  className="bg-black text-white"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Add Category
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
      </div>
    </div>
  );
};

export default Favourits;
