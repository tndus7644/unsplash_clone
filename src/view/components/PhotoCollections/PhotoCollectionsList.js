import React from 'react';
import styled from 'styled-components';
import PhotoCollectionsCard from "../PhotoList/PhotoCollectionsCard";

const PhotoCollectionsList = ({data = []}) => {


    return(

        <Container className={"PhotoCollectionsList"}>
            {
                data.map((item, index) => <PhotoCollectionsCard key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10px;
`;

export default PhotoCollectionsList;