import React from "react";

import { LoginForm } from "./LoginForm";
import Searchbar from "./Searchbar";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div className="w-full px-8 py-3 flex justify-between items-center border-y-2 border-gray-100">
      <span className="font-bold text-xl">Get the best news !!!</span>
      <Searchbar/>
      <LoginForm/>
    </div>
  );
};
