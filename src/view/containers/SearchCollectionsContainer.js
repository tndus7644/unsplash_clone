import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import PhotoCollectionsList from "../components/PhotoCollections/PhotoCollectionsList";
import {collectionsPhotosActions} from "../../redux/ActionCreators";

const SearchCollectionsContainer = () => {

    const {query} = useParams();

    const {result} = useSelector(state => state.collection);

    useEffect(() => {
        Collections();
    }, [query])

    const Collections = () => {
        collectionsPhotosActions.collectionPhoto({
            query,
            per_page: 12
        })
    }

    return (
        <Container className={"SearchCollectionsContainer"}>
            <PhotoCollectionsList data={result}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchCollectionsContainer;