import { Profile } from './profile';
import userData from '../user.json';

export const App = () => {
  return (
    <div>
      <Profile data={userData} />
    </div>
  );
};
