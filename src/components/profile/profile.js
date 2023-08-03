import { Avatar } from './profile.styled';
import { Background } from './profile.styled';
import { Nickname } from './profile.styled';
import { Tag } from './profile.styled';
import { Location } from './profile.styled';
import { StatsList } from './profile.styled';
import { ListItem } from './profile.styled';
import { TextContent } from './profile.styled';
import { StatsContent } from './profile.styled';
export const Profile = ({ data }) => {
  return (
    <Background>
      <Avatar src={data.avatar} alt="User avatar" />
      <Nickname>{data.username}</Nickname>
      <Tag>@{data.tag}</Tag>
      <Location>{data.location}</Location>
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
