import Profile from "../Profile/Profile";
import "./App.css";

const proff1 = {
  imgUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  fullName: "Petra Marica",
  nick: "pmarica",
  countryCity: "Salvador, Brasil",
};

export default function App() {
  return (
    <div>
      <Profile proff={proff1} />;
    </div>
  );
}
