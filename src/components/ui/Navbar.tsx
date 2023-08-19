import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginForm } from "./LoginForm";
import Searchbar from "./Searchbar";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="w-[100vw] gap-4 lg:w-full px-2 lg:px-8 py-3 flex flex-col lg:flex-row lg:justify-between items-center border-y-2 border-gray-100">
      <span className="font-bold text-xl">Get the best news !!!</span>
      <Searchbar />
      <div className="hidden lg:block">
      <LoginForm/>
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-black text-white absolute top-1 right-1" variant="outline">X</Button>
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <SheetTitle>Continue with Google</SheetTitle>
              {/* <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription> */}
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <LoginForm/>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
               
              </div>
            </div>
            {/* <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
