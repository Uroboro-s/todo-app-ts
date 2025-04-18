import Item from "./Item";

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
}

function Items({ list }: AppProps): React.JSX.Element {
  return (
    <div className="w-2/3 p-4 bg-blue-500">
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
