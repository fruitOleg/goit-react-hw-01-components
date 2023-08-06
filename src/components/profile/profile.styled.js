import styled from 'styled-components';
export const Background = styled.div`
  background-color: #fff;
  width: 400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  border: 1px solid gray;
  box-shadow: 3px 3px 8px #7a8999;
  border-radius: 8px;
  overflow: hidden;
`;
export const ProfileDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const Avatar = styled.img`
  width: 180px;
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
  justify-content: space-evenly;
  width: 100%;
`;
export const ListItem = styled.li`
  background-color: lightgrey;
  align-items: center;
  background-color: #ebedf0;
  border: 1px solid #a0abb6;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 35%;
`;
export const TextContent = styled.h4`
  margin: 0;
  margin-bottom: 10px;
  color: #7a8999;
`;
export const StatsContent = styled.h3`
  margin: 0;
`;
