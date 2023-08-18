import styled from 'styled-components';
export const TransactionHistoryTabl = styled.table`
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;
export const Tablthead = styled.thead`
  background-color: blue;
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
  height: 60px;
  text-align: center;
`;
export const Tabltr = styled.tr`
  border: 1px solid black;
  background-color: lightgray;
  font-size: 32px;
  font-weight: 400;
  text-transform: capitalize;
  height: 60px;
  text-align: center;

  :nth-child(odd) {
    background-color: #ffffff;
  }
`;
export const TablTd = styled.td`
  width: 300px;
  border: 2px solid black;
`;
