import PropTypes from 'prop-types';
// import css from './friendsList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { ListWrap } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <ListWrap>
      <ul>
        {friends.map(friend => {
          return (
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              id={friend.id}
              key={friend.id}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </ListWrap>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

///// css on modules////

// export const FriendsList = ({ friends }) => {
//   return (
//     <div className={css.list}>
//       <ul>
//         {friends.map(friend => {
//           return (
//             <FriendListItem
//               name={friend.name}
//               avatar={friend.avatar}
//               id={friend.id}
//               key={friend.id}
//               isOnline={friend.status}
//             />
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
