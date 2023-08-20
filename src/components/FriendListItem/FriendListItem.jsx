import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';
import { Name, Avatar, Status, Item } from './FriendListItem.styled';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <>
      <Item key={id}>
        <Status $isonline={isOnline}>{isOnline} </Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </Item>
    </>
  );
};
FriendListItem.propTypes = {
  isonline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

///// css on modules/////

// export const FriendListItem = ({ id, name, status, avatar }) => {
//   return (
//     <>
//       <li className={css.item} key={id}>
//         <span className={css.status}>{status}</span>
//         <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//         <p className={css.name}>{name}</p>
//       </li>
//     </>
//   );
// };
