import user from '../components/user.json';
import { Profile } from './Profile/Profile';
import { Statistics, getRandomHexColor } from './Statistics/Statistics';
import data from '../components/data.json';
import friends from '../components/friends.json';
import { FriendsList } from './FriendsList/FriendsList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
