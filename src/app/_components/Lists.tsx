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
  setActiveList: React.Dispatch<React.SetStateAction<List>>;
}

export default function Lists({
  lists,
  setActiveList,
}: AppProps): React.JSX.Element {
  return (
    <div className="w-1/3 p-4 bg-red-500">
      <ul>
        {lists &&
          lists.map((list: List) => {
            return (
              <li key={list.id} onClick={() => setActiveList(list)}>
                {list.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
