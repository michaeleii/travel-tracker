import { useState } from "react";
import { IItem } from "../App";

function Form({
  onAddToPackingList,
}: {
  onAddToPackingList: (item: IItem) => void;
}) {
  const defaultValues = {
    description: "",
    quantity: 1,
  };
  const [description, setDescription] = useState(defaultValues.description);
  const [quantity, setQuantity] = useState(defaultValues.quantity);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddToPackingList(newItem);
    setDescription(defaultValues.description);
    setQuantity(defaultValues.quantity);
  }

  return (
    <form
      className="flex flex-wrap items-center justify-center gap-5 bg-secondary py-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold">What do you need for your 😍 trip?</h3>
      <select
        className="select-bordered select-primary select w-full max-w-xs text-xl"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="input-bordered input-primary input w-full max-w-xs text-xl"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn-primary btn w-full max-w-xs md:w-fit">Add</button>
    </form>
  );
}
export default Form;
