import styled from 'styled-components';
export const Background = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
`;
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;
export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
export const ListItem = styled.li`
  align-items: center;
  border: 1px solid #a0abb6;
  box-shadow: 3px 3px 8px #7a8999;
  border-radius: 8px;
  display: flex;
  flex-direction: row;

  padding: 20px;
  width: 300px;
`;
export const IsOnline = styled.span`
  background-color: ${props => (props.children ? 'green' : 'red')};
  border-radius: 50%;
  display: block;
  height: 25px;
  margin: 20px;
  width: 25px;
`;
export const Name = styled.h2`
  margin-left: 50px;
`;
