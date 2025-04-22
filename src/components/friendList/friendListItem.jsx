import clsx from "clsx";
import css from "./FriendListItem.module.css";

function FriendListItem({ item: { avatar, name, isOnline } }) {
  return (
    <div className={css.itemFriend}>
      <img className={css.imgFriend} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.state, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default FriendListItem;