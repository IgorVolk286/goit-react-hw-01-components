import styled from 'styled-components';
export const TransactionHistoryTabl = styled.table`
  width: 900px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;
export const Thead = styled.thead`
  background-color: blue;
  color: #ffffff;
  font-size: 32px;
  font-weight: 400;
  height: 60px;
  text-align: center;
`;

export const TrBody = styled.tr`
  border: 5px solid;
  background-color: lightgray;
  font-size: 32px;
  font-weight: 400;
  text-transform: capitalize;
  height: 60px;
  text-align: center;
`;

export const TablBody = styled.tbody``;

export const TablTh = styled.th`
  border: 2px solid black;
`;
export const TablTd = styled.td`
  border: 2px solid black;
`;
