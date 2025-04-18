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
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-3xl font-bold">Your Lists</h1>
      <button onClick={() => alert("open modal")}>Add a list</button>
    </div>
  );
}
