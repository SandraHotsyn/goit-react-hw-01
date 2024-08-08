export default function List({
  lists: { countFollowers, countViews, countLikes },
}) {
  return (
    <ul>
      <li>
        <span>Followers</span>
        <span>{countFollowers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{countViews}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{countLikes}</span>
      </li>
    </ul>
  );
}
