import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

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
  setLists: React.Dispatch<React.SetStateAction<List[]>>;
}

export default function Lists({
  lists,
  setActiveList,
  setLists,
}: AppProps): React.JSX.Element {
  return (
    <div className="w-1/3 p-4 bg-red-500">
      <ListHeader lists={lists} setLists={setLists} />
      <ul>
        {lists &&
          lists.map((list: List) => {
            return (
              <ListItem
                list={list}
                key={list.id}
                setActiveList={setActiveList}
              />
            );
          })}
      </ul>
    </div>
  );
}
