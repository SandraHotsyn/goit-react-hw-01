import ProfileList from "../ProfileList/ProfileList";
import "./App.css";
import userData from "../../userData.json";

export default function App() {
  return (
    <div>
      <ProfileList proffs={userData} />
    </div>
  );
}
