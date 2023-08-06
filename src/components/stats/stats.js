import { Background } from './stats.styled';
import { Title } from './stats.styled';
import { StatsList } from './stats.styled';
import { ListItem } from './stats.styled';
export const Stats = ({ items }) => {
  return (
    <Background>
      <Title>Upload stats</Title>
      <StatsList>
        {items.map(item => (
          <ListItem>
            <p>{item.label}</p>
            <p>{item.percentage}%</p>
          </ListItem>
        ))}
      </StatsList>
    </Background>
  );
};
