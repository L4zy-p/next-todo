"use client";

import useDarkMode from "@/hook/useDarkMode";
import useTodo from "@/hook/useTodo";
import { Todo } from "@/interface/todo";
import React, { createContext, useEffect, useState } from "react";

interface MainContextProps {
  loading: boolean;
  darkTheme: boolean;
  toggleDarkTheme: () => void;
  todo: Todo[];
  newTodo?: string;
  addTodo: (newItem: Todo) => void;
  removeTodo: (id: number) => void;
  updateTodo: (todoList: Todo[]) => void;
  renderNewTodo: (value: string) => void
}

export const MainContext = createContext<MainContextProps>({
  loading: true,
  darkTheme: true,
  toggleDarkTheme: () => {},
  todo: [],
  newTodo: "",
  addTodo: (newItem) => {},
  removeTodo: (id) => {},
  updateTodo: (list) => {},
  renderNewTodo: (value) => {}
});

export interface MainProviderProps {
  children: React.ReactElement;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  const [loading, setLoding] = useState(true)
  const { darkTheme, toggleDarkTheme } = useDarkMode();
  const { todo, newTodo, addTodo, removeTodo, updateTodo, renderNewTodo } = useTodo();

  useEffect(() => {
    setTimeout(() => {
      setLoding(false)
    }, 500)
  }, [])

  return (
    <MainContext.Provider value={{ loading, darkTheme, toggleDarkTheme, todo, newTodo, addTodo, removeTodo, updateTodo, renderNewTodo }}>
      {children}
    </MainContext.Provider>
  );
};
