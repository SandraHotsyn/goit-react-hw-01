export default function Profile({
  proff: { imgUrl, fullName, nick, countryCity },
}) {
  return (
    <div>
      <img src={imgUrl} alt={fullName} />
      <p>{fullName}</p>
      <p>@{nick}</p>
      <p>{countryCity}</p>
    </div>
  );
}
