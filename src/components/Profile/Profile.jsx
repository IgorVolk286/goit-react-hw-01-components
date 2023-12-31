// import css from './Profile.module.css';
import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Avatar,
  Tag,
  Name,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <ProfileWrap>
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <Item>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </Item>
    </Stats>
  </ProfileWrap>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

// css on modules///////

// export const Profile = ({ avatar, username, tag, location, stats }) => (
//   <div className={css.profile}>
//     <div className={css.description}>
//       <img src={avatar} alt="User avatar" className={css.avatar} />
//       <p className={css.name}>{username}</p>
//       <p className={css.tag}>{tag}</p>
//       <p className={css.location}>{location}</p>
//     </div>

//     <ul className={css.stats}>
//       <li className={css.item}>
//         <span className={css.label}>Followers</span>
//         <span className={css.quantity}>{stats.followers}</span>
//       </li>
//       <li className={css.item}>
//         <span className={css.label}>Views</span>
//         <span className={css.quantity}>{stats.views}</span>
//       </li>
//       <li className={css.item}>
//         <span className={css.label}>Likes</span>
//         <span className={css.quantity}>{stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );
