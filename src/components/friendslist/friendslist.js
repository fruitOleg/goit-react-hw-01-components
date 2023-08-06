import { Background } from './friendslist.styled';
import { Avatar } from './friendslist.styled';
import { FriendsList } from './friendslist.styled';
import { ListItem } from './friendslist.styled';
import { IsOnline } from './friendslist.styled';
import { Name } from './friendslist.styled';
export const Friendslist = ({ friends }) => {
  return (
    <Background>
      <FriendsList>
        {friends.map(friend => (
          <ListItem>
            <IsOnline status={friend.IsOnline} />
            <Avatar src={friend.avatar} alt="User avatar" />
            <Name>{friend.name}</Name>
          </ListItem>
        ))}
      </FriendsList>
    </Background>
  );
};
