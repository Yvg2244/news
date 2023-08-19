import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import "../../app/globals.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { database } from "@/firebase/firebase";
import { ref, set } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { updateUid, updateUserFav } from "@/store/userSlice";
const Favourits = () => {
  const [category,setCategory]=useState<string | number | readonly string[] | undefined>("")
  const userId= useSelector((state: any) => state.userReducer.value.uid);
  const userFav= useSelector((state: any) => state.userReducer.value.fav);
  const dispatch=useDispatch()

  console.log(userId)
  const handleSubmit=()=>{
  const updatedFav=[...userFav,category]
    set(ref(database, 'users/' + userId), {
      fav:updatedFav
    });
  dispatch(updateUserFav(updatedFav))
  }
  return (
    <div className="flex justify-between my-2 px-8">
      <div className="h-8">
        <div className="w-full gap-2 py-2 flex justify-between">
          <span>Your Favourits: </span>
          {userFav.map((item:any)=>{
            return <Badge className="bg-black text-white" variant="outline">
            {item}
          </Badge>
          })}
          
        </div>
      </div>
      <div className="w-fit">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-[10rem]" variant="outline">
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
              <DialogDescription>
                This makes sure all news from these categories are shown.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={category} onChange={(e)=>{setCategory(e.target.value)}} className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-black text-white" onClick={handleSubmit} type="submit">Add Category</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Favourits;
