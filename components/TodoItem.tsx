import { MainContext } from "@/context/MainContext";
import { Todo } from "@/interface/todo";
import { getRandowNumber } from "@/utils/function";
import React, { KeyboardEvent, useContext, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp, IoPencil, IoRemove } from "react-icons/io5";
import { LuListPlus } from "react-icons/lu";
import { TbRowRemove } from "react-icons/tb";

interface TodoItemProps {
  index: number;
  data: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  const { todo, updateTodo, removeTodo } = useContext(MainContext);
  const [content, setContent] = useState<string>("");

  const handleEdit = (id: number, isEdit: boolean) => {
    if (id > -1) {
      let update = [...todo];
      update[id] = {
        ...update[id],
        isEdit,
      };
      updateTodo(update);
    }
  };

  const handleEditKeyUp = (
    key: KeyboardEvent<HTMLInputElement>,
    id: number
  ) => {
    if (key?.keyCode === 13 && content) {
      const randomNumber = getRandowNumber();
      const newItem: Todo = {
        id: `item-${randomNumber}`,
        content: content,
        checked: false,
        isEdit: false,
      };
      let update = [...todo];
      update[id] = newItem;
      updateTodo(update);
    }
  };

  const handleCancleEdit = (id: number, isEdit: boolean) => {
    handleEdit(id, isEdit);
    setContent(props?.data?.content);
  };

  const handleCheck = (id: number, checked: boolean) => {
    if (id > -1) {
      let update = [...todo];
      update[id] = {
        ...update[id],
        checked,
      };
      updateTodo(update);
    }
  };

  const handleDelete = (id: number) => {
    removeTodo(id);
  };

  useEffect(() => {
    setContent(props?.data?.content);
  }, [props?.data?.content]);

  return (
    <div className="flex justify-between items-center">
      <input
        id={`${props?.index}`}
        className="hidden"
        type="checkbox"
        checked={props?.data?.checked}
        onChange={(e) => handleCheck(props?.index, e?.target?.checked)}
      />
      {!props?.data?.isEdit && (
        <label
          className="flex flex-1 items-center h-auto min-h-10 px-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
          htmlFor={`${props?.index}`}
        >
          <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
            <IoMdCheckmark className="w-4 h-4 fill-current" />
          </span>
          <span className="ml-4 text-sm">{props?.data?.content}</span>
        </label>
      )}
      {props?.data?.isEdit && (
        <>
          <button className="flex items-center w-full h-8 px-2 text-sm font-medium rounded">
            <CiEdit className="w-5 h-5 text-gray-400 fill-current" />
            <input
              className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              placeholder="edit task"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyUp={(e) => handleEditKeyUp(e, props?.index)}
              onBlur={() =>
                handleCancleEdit(props?.index, !props?.data?.isEdit)
              }
            />
          </button>
        </>
      )}
      {!props?.data?.isEdit && (
        <>
          <span
            className="text-xl cursor-pointer ml-2"
            id={`${props?.index}`}
            onClick={() => handleEdit(props?.index, !props?.data?.isEdit)}
          >
            <CiEdit />
          </span>
          <span
            className="text-xl cursor-pointer ml-2"
            id={`${props?.index}`}
            onClick={() => handleDelete(props?.index)}
          >
            <TbRowRemove />
          </span>
        </>
      )}
    </div>
  );
};

export default TodoItem;
