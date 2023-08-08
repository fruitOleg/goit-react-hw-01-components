import { Profile } from './profile/profile';
import userData from 'data/user.json';
import { GlobalStyle } from './GlobalStyle';
import { Stats } from './stats/stats';
import statsData from 'data/data.json';
import { Friendslist } from './friendslist/friendslist';
import friendsData from 'data/friends.json';
import { Transaction } from './transaction/transaction';
import transactionData from 'data/transactions.json';
export const App = () => {
  return (
    <div>
      <Profile data={userData} />
      <Stats items={statsData} />
      <Stats title="Upload stats" items={statsData} />
      <Friendslist friends={friendsData} />
      <Transaction transactions={transactionData} />
      <GlobalStyle />
    </div>
  );
};
