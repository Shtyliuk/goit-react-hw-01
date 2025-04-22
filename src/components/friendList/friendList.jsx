import css from './friendList.module.css';

import FriendListItem from "./FriendListItem";

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