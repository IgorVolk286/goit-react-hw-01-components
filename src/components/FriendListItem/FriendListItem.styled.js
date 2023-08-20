import styled from 'styled-components';

export const Item = styled.li`
  padding-left: 25px;
  width: 500px;
  border: 1px solid #111111;
  border-radius: 4px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.colors.white};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-top: 40px;
  border-radius: 50%;
  background: ${props => {
    return props.$isonline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;
export const Name = styled.p`
  font-size: 36px;
  font-weight: bold;
`;
