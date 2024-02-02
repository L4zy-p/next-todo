"use client";
import { TODO_KEY } from "@/constant/localStorage";
import { Todo } from "@/interface/todo";
import { useEffect, useState } from "react";

const useTodo = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>();

  useEffect(() => {
    initTodo();
  }, []);

  const initTodo = () => {
    const local = localStorage.getItem(TODO_KEY);
    if (local) {
      const data = JSON.parse(local);
      setTodo(data);
    }
  };

  const renderNewTodo = (value: string) => {
    setNewTodo(value);
  };

  const addTodo = (newItem: Todo) => {
    const data = todo.concat(newItem);
    setTodo(data);
    setNewTodo("");
    localStorage.setItem(TODO_KEY, JSON.stringify(data));
  };

  const removeTodo = (id: number) => {
    if (id > -1) {
      const data = todo.slice(0, id).concat(todo.slice(id + 1));
      setTodo(data);
      localStorage.setItem(TODO_KEY, JSON.stringify(data));
    }
  };

  const updateTodo = (todoList: Todo[]) => {
    setTodo(todoList);
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  };

  return { todo, newTodo, addTodo, removeTodo, updateTodo, renderNewTodo };
};

export default useTodo;
