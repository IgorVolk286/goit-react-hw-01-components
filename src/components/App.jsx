import user from '../components/user.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from '../components/data.json';
import friends from '../components/friends.json';
import { FriendsList } from './FriendsList/FriendsList';
import transactions from '../components/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <TransactionHistory item={transactions} />
    </div>
  );
};
