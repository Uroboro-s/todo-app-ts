"use client";

import { useState } from "react";
import Item from "./Item";
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
  list: List;
  lists: List[];
  setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

function Items({ list, setLists, lists }: AppProps): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(e.target);

    const newItem: Item = {
      name: e.target.name.value,
      description: e.target.description.value,
      date: e.target.date.value,
      completed: false,
      id: Date.now(),
    };

    const newLists = [...lists].map((listItem) => {
      if (list.id === listItem.id) {
        listItem.items.push(newItem);
        return listItem;
      } else return listItem;
    });

    setLists(newLists);
  };

  return (
    <div className="w-2/3 p-4 bg-red-100 overflow-y-scroll">
      <div className="flex justify-end mb-4">
        <button
          onClick={onOpen}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add an item
        </button>
        <Modal isOpen={open} onClose={onClose}>
          <form onSubmit={handleFormSubmit}>
            <input name="name" placeholder="name..." />
            <textarea name="description" placeholder="description..." />
            <input type="date" name="date" />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Create item
            </button>
          </form>
        </Modal>
      </div>
      <ul>
        {list?.items &&
          (list.items.length > 0 ? (
            list.items.map((item: Item) => {
              return <Item key={item.id} item={item} />;
            })
          ) : (
            <p>You do not have any items in the list!</p>
          ))}
      </ul>
    </div>
  );
}

export default Items;
