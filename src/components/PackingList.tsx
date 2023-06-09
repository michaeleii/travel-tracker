import { IItem } from "../App";
import Item from "./Item";
import { motion, AnimatePresence } from "framer-motion";

function PackingList({
  items,
  onRemoveFromPackingList,
  onPackItem,
}: {
  items: IItem[];
  onRemoveFromPackingList: (id: number) => void;
  onPackItem: (id: number) => void;
}) {
  return (
    <div className="bg-accent p-5">
      <ul className="flex flex-wrap justify-center gap-5">
        <AnimatePresence>
          {items.map((item) => (
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
    </div>
  );
}
export default PackingList;
