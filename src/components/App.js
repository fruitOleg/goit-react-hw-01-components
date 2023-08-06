import { Profile } from './profile/profile';
import userData from '../user.json';
import { GlobalStyle } from './GlobalStyle';
import { Stats } from './stats/stats';
import statsData from '../data.json';
export const App = () => {
  return (
    <div>
      <Profile data={userData} />
      <Stats items={statsData} />
      <GlobalStyle />
    </div>
  );
};
