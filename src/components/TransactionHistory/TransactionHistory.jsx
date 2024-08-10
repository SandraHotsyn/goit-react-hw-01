import transactions from "../../transactions.json";
import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionHeader}>Type</th>
          <th className={css.transactionHeader}>Amount</th>
          <th className={css.transactionHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionBody}>
        {transactions.map((item) => {
          return (
            <tr key={item.id} className={css.transactionRow}>
              <Transaction trans={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
