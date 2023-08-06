import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  width: 800px;
  box-shadow: 3px 3px 8px #7a8999;
  text-align: center;
`;
export const Head = styled.thead`
  background-color: blueviolet;
  color: white;
  font-weight: 600;
  font-size: 15px;
`;
export const HeadItem = styled.th`
  padding: 10px;
`;
export const BodyItem = styled.td`
  padding: 10px;
  width: inherit;
  color: black;
  font-weight: 700;
  font-size: 15px;
  border: 1px solid lightgray;
  background-color: white;
  &:nth-child(odd) {
    background-color: lightgray;
  }
`;
