import css from "./FriendList.module.css";
import FriendListItem from "./friendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem item={friend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;