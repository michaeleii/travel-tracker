import { IItem } from "../App";

function Stats({ items }: { items: IItem[] }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = totalItems
    ? Math.round((packedItems / totalItems) * 100)
    : 0;
  return (
    <footer className="footer footer-center bg-neutral p-10 text-center text-xl text-neutral-content">
      <div className="stats stats-vertical shadow lg:stats-horizontal">
        <div className="stat">
          <div className="stat-figure text-primary"></div>
          <div className="stat-title">Total Items</div>
          <div className="stat-value text-primary">{totalItems}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary"></div>

          <div
            className={`stat-value transition-colors ${
              percentagePacked === 100 ? "text-success" : "text-neutral"
            }`}
          >
            {percentagePacked}%
          </div>
          <div className="stat-title">items packed</div>
          <div className="stat-desc text-secondary">
            {totalItems - packedItems} items remaining
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Stats;
