import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, name, status, avatar }) => {
  return (
    <>
      <li className={css.item} key={id}>
        <span className={css.status}>{status}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};
