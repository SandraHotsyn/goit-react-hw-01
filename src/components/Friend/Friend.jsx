import css from "./Friend.module.css";

export default function Friend({ user: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.title}>{name}</p>
      <p className={css.status}>{isOnline}</p>
    </div>
  );
}
