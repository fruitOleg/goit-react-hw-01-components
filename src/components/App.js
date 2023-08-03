import { Profile } from './profile/profile';
import userData from '../user.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile data={userData} />
      <GlobalStyle />
    </div>
  );
};
