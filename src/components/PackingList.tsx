import { useState } from "react";
import { IItem } from "../App";
import Item from "./Item";
import { motion, AnimatePresence } from "framer-motion";

function PackingList({
  items,
  onRemoveFromPackingList,
  onPackItem,
  onClearList,
}: {
  items: IItem[];
  onRemoveFromPackingList: (id: number) => void;
  onPackItem: (id: number) => void;
  onClearList: () => void;
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems: IItem[];

  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  } else {
    sortedItems = [...items];
  }

  return (
    <div className="flex flex-col justify-between bg-accent p-5">
      <ul className="flex flex-wrap justify-center gap-5">
        <AnimatePresence>
          {sortedItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Item
                item={item}
                key={item.id}
                onRemoveFromPackingList={onRemoveFromPackingList}
                onPackItem={onPackItem}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
      <div className="flex justify-center gap-5">
        <select
          className="select text-xl"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="btn-primary btn" onClick={() => onClearList()}>
          Clear List
        </button>
      </div>
    </div>
  );
}
export default PackingList;
