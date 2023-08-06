import {
  Avatar,
  ProfileDescription,
  StatsContent,
  TextContent,
  ListItem,
  StatsList,
  Location,
  Tag,
  Nickname,
  Background,
} from './profile.styled';

export const Profile = ({ data }) => {
  return (
    <Background>
      <ProfileDescription>
        <Avatar src={data.avatar} alt="User avatar" />
        <Nickname>{data.username}</Nickname>
        <Tag>@{data.tag}</Tag>
        <Location>{data.location}</Location>
      </ProfileDescription>
      <StatsList>
        <ListItem>
          <TextContent>Followers</TextContent>
          <StatsContent>{data.stats.followers}</StatsContent>
        </ListItem>
        <ListItem>
          <TextContent>Views</TextContent>
          <StatsContent>{data.stats.views}</StatsContent>
        </ListItem>
        <ListItem>
          <TextContent>Likes</TextContent>
          <StatsContent>{data.stats.likes}</StatsContent>
        </ListItem>
      </StatsList>
    </Background>
  );
};
