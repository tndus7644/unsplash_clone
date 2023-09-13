import React from 'react';
import styled from 'styled-components';

const Tags = ({tags}) => {

    return(
        <Container>
            {tags.map((item, i) =><Tag key={i} {...item}>{item.title}</Tag>)}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  height: 26px;
  padding: 0 8px;
  background: #eee;
  color: #777;
  font-weight: 400;
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ddd;
    color: #333;
  }
`;

export default Tags;