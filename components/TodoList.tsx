"use client";

import React, { KeyboardEvent, useContext, useState } from "react";
import { LuListPlus } from "react-icons/lu";
import { format } from "date-fns";
import TodoItem from "./TodoItem";
import { Todo } from "@/interface/todo";
import { MainContext } from "@/context/MainContext";

const TodoList = () => {
  const { todo, newTodo, addTodo, removeTodo, updateTodo, renderNewTodo } =
    useContext(MainContext);

  const getRandowNumber = () => {
    return Math.floor(Math.random() * 9999);
  };

  const handleKeyUp = (key: KeyboardEvent<HTMLInputElement>) => {
    if (key?.code === "Enter" && newTodo) {
      const randomNumber = getRandowNumber();
      const newItem: Todo = {
        id: `item-${randomNumber}`,
        content: newTodo,
        checked: false,
      };

      addTodo(newItem)
    }
  };

  const handleCheck = (id: number, checked: boolean) => {
    if (id > -1) {
      let update = [...todo];
      update[id] = {
        ...update[id],
        checked,
      };
      updateTodo(update)
    }
  };

  const handleDelete = (id: number) => {
    removeTodo(id)
  };

  return (
    <div className="flex-1 flex items-center justify-center font-medium">
      <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96 dark:bg-gray-800 dark:text-gray-200">
        <div className="flex items-center mb-4">
          <img
            className="object-cover rounded-full w-16 h-16 m-2"
            src="https://avatars.githubusercontent.com/u/92322801?v=4"
            alt="codrkai"
          />
          <div className="font-semibold ml-3 ">
            <h4 className="text-lg">My Todo</h4>
            <p className="text-sm">{format(new Date(), "MMMM d, yyyy")}</p>
          </div>
        </div>
        {todo.map((item, index) => (
          <TodoItem
            key={item.id}
            index={index}
            data={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}

        <button className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
          <LuListPlus className="w-5 h-5 text-gray-400 fill-current" />
          <input
            className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
            type="text"
            placeholder="add a new task"
            value={newTodo}
            onChange={(e) => renderNewTodo(e.target.value)}
            onKeyUp={(e) => handleKeyUp(e)}
          />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
