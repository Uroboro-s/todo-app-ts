"use client";

import { useState } from "react";
import Modal from "./Modal";

interface Item {
  name: string;
  description: string;
  date: string;
  completed: boolean;
  id: number;
}

interface List {
  name: string;
  description: string;
  items: Item[];
  id: number;
}

interface AppProps {
  lists: List[];
  setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

export default function ListHeader({
  lists,
  setLists,
}: AppProps): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const newList: List = {
      name: e.target.name.value,
      description: e.target.description.value,
      items: [],
      id: Date.now(),
    };
    setLists([...lists, newList]);
  };

  return (
    <div className="flex flex-row justify-between mb-4">
      <h1 className="text-3xl font-bold">Your Lists</h1>
      <button
        onClick={handleOpen}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add a list
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit}>
          <input
            name="name"
            placeholder="name"
            className="border border-[0.5] p-2.5 mb-4"
          />
          <textarea
            name="description"
            placeholder="write a description of your list"
            className="border border-[1] p-2.5"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
}
