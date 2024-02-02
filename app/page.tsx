import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";
import { MainContext, MainProvider } from "@/context/MainContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  return (
    <MainProvider>
      <Main />
    </MainProvider>
  );
}
