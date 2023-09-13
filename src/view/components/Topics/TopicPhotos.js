import React from 'react';
import styled from 'styled-components';
import PhotoList from "../PhotoList/PhotoList";

const TopicPhotos = ({photos}) => {

    return (
        <Container>
            <PhotoList photos={photos}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 100px;
`;

export default TopicPhotos;