import styled from 'styled-components';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Background = styled.div`
  background-color: #fff;
  width: 400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  border: 1px solid gray;
  box-shadow: 3px 3px 8px #7a8999;
  border-radius: 8px;
  overflow: hidden;
`;
export const Title = styled.h1`
  text-align: center;
  padding: 40px;
  margin: 0;
`;
export const StatsList = styled.ul`
  display: flex;
  width: 100%;
`;
export const ListItem = styled.li`
  background-color: ${getRandomHexColor};
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100px;
`;
