import Profile from "../Profile/Profile";
import userData from "../../userData.json";

export default function ProfileList({ proffs }) {
  return (
    <ul>
      {userData.map((item) => {
        return (
          <li key={item.id}>
            <Profile proff={item} />
          </li>
        );
      })}
    </ul>
  );
}
