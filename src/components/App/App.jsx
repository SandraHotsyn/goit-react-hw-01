import List from "../List/List";
import Profile from "../Profile/Profile";
import "./App.css";
import userName from "../../userData.json";

const proff1 = {
  imgUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  fullName: "Petra Marica",
  nick: "pmarica",
  countryCity: "Salvador, Brasil",
};

const list1 = { followers: 5603, views: 4827, likes: 1308 };

export default function App() {
  return (
    <div>
      <Profile proff={proff1} />
      <List lists={list1} />
    </div>
  );
}
