import css from "./TransactionHistory.module.css";
import { FaMoneyBillWave, FaShoppingCart, FaExchangeAlt } from "react-icons/fa";

function getIcon(type) {
  switch (type.toLowerCase()) {
    case "invoice":
      return <FaMoneyBillWave className={css.icon} />;
    case "payment":
      return <FaShoppingCart className={css.icon} />;
    case "withdrawal":
      return <FaExchangeAlt className={css.icon} />;
    default:
      return <FaMoneyBillWave className={css.icon} />;
  }
}

function TransactionHistory({ items }) {
  return (
    <div className={css.wrapper}>
      <table className={css.table}>
        <thead className={css.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className={`${css.row} ${css.fadeIn}`} key={item.id}>
              <td className={css.typeTransaction}>
                {getIcon(item.type)} {item.type}
              </td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={css.sideGlow}></div>
    </div>
  );
}

export default TransactionHistory;
