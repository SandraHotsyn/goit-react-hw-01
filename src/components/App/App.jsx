import ProfileList from "../ProfileList/ProfileList";
import FriendList from "../FriendList/FriendList";
import style from "./App.module.css";
import userData from "../../userData.json";
import friends from "../../friends.json";

export default function App() {
  return (
    <div className={style.flex}>
      <ProfileList proffs={userData} />
      <FriendList user={friends} />
    </div>
  );
}
