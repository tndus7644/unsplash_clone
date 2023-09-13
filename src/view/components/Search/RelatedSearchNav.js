import React from 'react';
import styled from 'styled-components';

const RelatedSearchNav = ({data, onClick}) => {

    return (
        <Container>
            {
                data.map((item, i) => <Button key={i} onClick={() => onClick(item.title)}>{item.title}</Button>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Button = styled.div`
  min-width: 135px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #777;
  padding: 0 14px;
  text-transform: capitalize;
  font-weight: 400;
  border: 1px solid #ddd;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 3px;
  white-space: nowrap;

  &:first-child {
    margin-left: 0;
  }
`;

export default RelatedSearchNav;