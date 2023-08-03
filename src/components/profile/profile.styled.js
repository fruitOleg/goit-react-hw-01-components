import styled from 'styled-components';
export const Background = styled.div`
  background-color: #fff;
  width: 300px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  padding: 30px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border-radius: 17px; */
`;
export const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const Nickname = styled.h2`
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 20;
`;
export const Tag = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 20;
  color: gray;
`;
export const Location = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 40;
  color: gray;
`;
export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
export const ListItem = styled.li`
  border: 1px solid gray;
  border-bottom: none;
  padding: 20px;
  width: 100px;
  height: 97px;
  background-color: lightgrey;
`;
export const TextContent = styled.p`
  font-size: 15px;
  margin: 0;
  margin-bottom: 10px;
`;
export const StatsContent = styled.p`
  margin: 0;
  font-weight: 600;
`;
