import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export interface IItem {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

function App() {
  const [items, setItems] = useState([] as IItem[]);

  function handleAddToPackingList(item: IItem) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleRemoveFromPackingList(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function packItem(id: number) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confimed = window.confirm("Are you sure you want to clear the list?");
    if (confimed) setItems([]);
  }

  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form onAddToPackingList={handleAddToPackingList} />
      <PackingList
        items={items}
        onRemoveFromPackingList={handleRemoveFromPackingList}
        onPackItem={packItem}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
