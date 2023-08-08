import { Background, ListItem, StatsList, Title } from './stats.styled';

export const Stats = ({ items, title }) => {
  return (
    <Background>
      {title && <Title> {title} </Title>}
      <StatsList>
        {items.map(item => (
          <ListItem key={item.id}>
            <p>{item.label}</p>
            <p>{item.percentage}%</p>
          </ListItem>
        ))}
      </StatsList>
    </Background>
  );
};
