import PropTypes from 'prop-types';
import css from './friendsList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <div className={css.list}>
      <ul>
        {friends.map(friend => {
          return (
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              id={friend.id}
              key={friend.id}
              isOnline={friend.status}
            />
          );
        })}
      </ul>
    </div>
  );
};
// name={friend.name}
//             avatar={friend.avatar}
//             id={friend.id}
//             status={friend.status}
