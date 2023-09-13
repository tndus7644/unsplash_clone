import React,{useEffect, useRef} from 'react';
import styled from 'styled-components';
import PhotoList from "../components/PhotoList/PhotoList";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";
import {Sentinel} from "../components/Layout/Layout.Styled";
import {useObserver} from "../../lib/Common";

const PhotoListContainer = () => {

    const {list} = useSelector(state => state.photo);

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = () => {
        photoActions.getPhotos({
            per_page: 30,
            page:1
        })
    }

    const sentinelRef = useRef(null);

    const getMorePhotos = () => {
        photoActions.getMorePhotos()
    }

    useObserver(sentinelRef, getMorePhotos);

    return(
        <Container className={"PhotoListContainer"}>
            <PhotoList photos={list}/>
            <Sentinel ref={sentinelRef}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1290px;
  margin: 50px auto;
  position: relative;
`;




export default PhotoListContainer;