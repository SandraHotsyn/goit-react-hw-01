import Stats from "../Stats/Stats";
import userData from "../../userData.json";

export default function Profile({
  proff: { avatar, username, tag, location, stats },
}) {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <Stats statss={stats} />
    </div>
  );
}
