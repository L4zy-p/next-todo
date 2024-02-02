import { Todo } from "@/interface/todo";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface TodoItemProps {
  index: number;
  data: Todo;
  handleCheck: (id: number, checked: boolean) => void;
  handleDelete: (id: number) => void;
}

const TodoItem = (props: TodoItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <input
        id={`${props?.index}`}
        className="hidden"
        type="checkbox"
        checked={props?.data?.checked}
        onChange={(e) => props?.handleCheck(props?.index, e?.target?.checked)}
      />
      <label
        className="flex flex-1 items-center h-auto min-h-10 px-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
        htmlFor={`${props?.index}`}
      >
        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
          <IoMdCheckmark className="w-4 h-4 fill-current" />
        </span>
        <span className="ml-4 text-sm">{props?.data?.content}</span>
      </label>
      <span
        className="text-xl cursor-pointer ml-2"
        id={`${props?.index}`}
        onClick={() => props?.handleDelete(props?.index)}
      >
        <IoCloseSharp />
      </span>
    </div>
  );
};

export default TodoItem;
