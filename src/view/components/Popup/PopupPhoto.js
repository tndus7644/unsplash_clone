import React from 'react';
import styled from 'styled-components';
import PhotoDetailCard from "../PhotoDetail/PhotoDetailCard";
import Tags from "../Tags";
import PhotoCollectionsList from "../PhotoCollections/PhotoCollectionsList";

const PopupPhoto = ({singlePhoto, onClose}) => {

    const {
        urls,
        tags,
        related_collections,
        user
    } = singlePhoto

    if (!singlePhoto.id) return null;

    return (
        <Container>
            <Contents onClick={(e) => e.stopPropagation()}>
                <PhotoDetailCard user={user} urls={urls} onClose={onClose}/>
                <PhotoCollectionsList data={related_collections.results}/>
                <Tags tags={tags}/>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 50px;
  height: 100vh;
  overflow-y: auto;
`;

const Contents = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background: #fff;
`;

export default PopupPhoto;