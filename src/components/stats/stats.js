import { Background, ListItem, StatsList, Title } from './stats.styled';

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
