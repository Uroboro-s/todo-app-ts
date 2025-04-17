"use client";

import { useState } from "react";

import Items from "./Items";
import Lists from "./Lists";

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

const examples = [
  {
    name: "Morning",
    description: "The sun rises",
    items: [
      {
        name: "brush",
        description: "brush your teeth",
        date: "everyday",
        completed: true,
        id: 1,
      },
      {
        name: "bath",
        description: "bath your body",
        date: "everyday",
        completed: true,
        id: 2,
      },
      {
        name: "shit",
        description: "shit your waste",
        date: "everyday",
        completed: false,
        id: 3,
      },
    ],
    id: 1,
  },
  {
    name: "Evening",
    description: "The sun sets in the west",
    items: [
      {
        name: "code",
        description: "code dsa",
        date: "everyday",
        completed: true,
        id: 1,
      },
      {
        name: "rest",
        description: "listen songs",
        date: "occasionally",
        completed: true,
        id: 2,
      },
      {
        name: "sleep",
        description: "try to sleep peacefully",
        date: "everyday?",
        completed: false,
        id: 3,
      },
    ],
    id: 2,
  },
];

export default function Box(): React.JSX.Element {
  const [lists, setLists] = useState<List[]>(examples);
  const [activeList, setActiveList] = useState<List>({} as List);

  return (
    <div className="flex w-full">
      <Lists lists={lists} setActiveList={setActiveList} />
      <Items list={activeList} />
    </div>
  );
}
