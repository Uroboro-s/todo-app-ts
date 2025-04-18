interface Item {
  name: string;
  description: string;
  date: string;
  completed: boolean;
  id: number;
}

export default function Item({ item }: Item): React.JSX.Element {
  return (
    <li className="p-8 border-2 mb-2">
      <div>
        <div>{item.name}</div>
        <div>{item.description}</div>
        <div>Completed: {item.completed ? "Yes" : "No"}</div>
      </div>
    </li>
  );
}
