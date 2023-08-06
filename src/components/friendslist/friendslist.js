import {
  Background,
  Name,
  IsOnline,
  ListItem,
  FriendsList,
  Avatar,
} from './friendslist.styled';

export const Friendslist = ({ friends }) => {
  return (
    <Background>
      <FriendsList>
        {friends.map(friend => (
          <ListItem>
            <IsOnline>{friend.isOnline}</IsOnline>
            <Avatar src={friend.avatar} alt="User avatar" />
            <Name>{friend.name}</Name>
          </ListItem>
        ))}
      </FriendsList>
    </Background>
  );
};
