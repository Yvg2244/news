"use client";
import NewsResults from "@/components/ui/NewsResults";
import { LoginForm } from "@/components/ui/LoginForm";
import SearchedHeading from "@/components/ui/SearchedHeading";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Navbar } from "@/components/ui/Navbar";
import Favourits from "@/components/ui/Favourits";
export default function Home() {
  return (
    <>
      <Navbar />
      <Favourits/>
      <SearchedHeading />
      <NewsResults />
      <LoginForm />
    </>
  );
}
