import ProfileList from "../ProfileList/ProfileList";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import style from "./App.module.css";
import userData from "../../userData.json";
import friend from "../../friends.json";
import transaction from "../../transactions.json";

export default function App() {
  return (
    <div className={style.flex}>
      <ProfileList proff={userData} />
      <FriendList friends={friend} />
      <TransactionHistory transactions={transaction} />
    </div>
  );
}
