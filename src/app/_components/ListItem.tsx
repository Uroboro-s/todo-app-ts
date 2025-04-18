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
  setActiveList: React.Dispatch<React.SetStateAction<List>>;
}

export default function ListItem({
  list,
  setActiveList,
}: AppProps): React.JSX.Element {
  return (
    <li className="p-4 m-0.5 border-[1px]" onClick={() => setActiveList(list)}>
      {list.name}
    </li>
  );
}
