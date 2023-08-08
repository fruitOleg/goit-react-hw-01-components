import {
  Background,
  Name,
  Status,
  ListItem,
  FriendsList,
  Avatar,
} from './friendslist.styled';

export const Friendslist = ({ friends }) => {
  return (
    <Background>
      <FriendsList>
        {friends.map(friend => (
          <ListItem key={friend.id}>
            <Status online={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt="User avatar" />
            <Name>{friend.name}</Name>
          </ListItem>
        ))}
      </FriendsList>
    </Background>
  );
};
