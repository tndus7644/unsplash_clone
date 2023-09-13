import React from 'react';
import styled from 'styled-components';

const TopicDescription = ({title, description}) => {

    return (
        <Container>
            <h1>{title}</h1>
            <p>{description}</p>
        </Container>
    )
}

const Container = styled.div`
  h1 {
    font-size: 46px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  p{
    font-size: 18px;
    width: 620px;
    line-height: 1.6;
  }
`;

export default TopicDescription;