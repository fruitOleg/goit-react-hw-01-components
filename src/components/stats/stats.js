import { Background } from './stats.styled';
export const Stats = ({ items }) => {
  return (
    <Background>
      <h1>Upload stats</h1>
      <ul>
        {items.map(item => (
          <li>
            <p>{item.label}</p>
            <p>{item.percentage}%</p>
          </li>
        ))}
      </ul>
    </Background>
  );
};
