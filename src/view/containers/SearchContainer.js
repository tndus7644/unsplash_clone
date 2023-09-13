import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {
    appActions,
    collectionsPhotosActions,
    SearchActions,
} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {ContentContainer, Sentinel} from "../components/Layout/Layout.Styled";
import GridList from "../components/PhotoList/GridList";
import PhotoCollectionsCard from "../components/PhotoList/PhotoCollectionsCard";
import PhotoList from "../components/PhotoList/PhotoList";
import {useObserver} from "../../lib/Common";
import UsersListCard from "../components/PhotoList/UsersListCard";
import {useParams} from "react-router";

const SearchContainer = () => {

    const sentinelRef = useRef(null);

    const {category, query} = useParams();

    const {photos} = useSelector(state => state.search);
    const {results} = useSelector(state => state.collection);
    const {users} = useSelector(state => state.app);

    useEffect(() => {
        SearchActions.searchPhotos({
            query,
            per_page: 12
        });
        collectionsPhotosActions.collectionPhoto({
            query,
            per_page: 12
        });
        appActions.getUserList({
            query,
            per_page: 12
        })
    }, [query]);

    const searchMorePhotos = () => {
        SearchActions.searchMorePhotos({
            query
        })
    }

    useObserver(sentinelRef, searchMorePhotos);

    const RenderList = () => {
        switch (category) {
            default:
                return null;
            case 'photos': {
                return <PhotoList photos={photos.results}/>
            }
            case 'collections' : {
                return <GridList data={results} render={(item) => <PhotoCollectionsCard {...item}/>}/>
            }
            case 'users': {
                return <GridList data={users.results} render={(item) => <UsersListCard {...item}/>}/>
            }
        }
    }

    return (
        <Container className={"SearchContainer"}>
            <ContentContainer>
                <h1>{query}</h1>
                <RenderList/>
                {
                    category === 'photos' &&
                    <Sentinel ref={sentinelRef}/>
                }
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
  padding: 100px 0;
  position: relative;

  h1 {
    font-size: 40px;
    margin-bottom: 50px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;

export default SearchContainer;