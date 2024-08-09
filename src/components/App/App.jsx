import ProfileList from "../ProfileList/ProfileList";
import "./App.css";
import userData from "../../userData.json";

// const proff1 = {
//   imgUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
//   fullName: "Petra Marica",
//   nick: "pmarica",
//   countryCity: "Salvador, Brasil",
// };

console.log(userData);

export default function App() {
  return (
    <div>
      {/* <Profile proff={proff1} /> */}
      {/* <ul>
        {userData.map((userData) => {
          return (
            <li key={userData.id}>
              <Profile proff={userData} />
            </li>
          );
        })}
      </ul> */}
      <ProfileList proffs={userData} />
    </div>
  );
}
