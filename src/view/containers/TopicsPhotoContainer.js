import React,{useEffect} from 'react';
import styled from 'styled-components';
import TopicPhotos from "../components/Topics/TopicPhotos";
import {topicPhotoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {useParams} from "react-router";

const TopicsPhotoContainer = () => {

    const {slug} = useParams();

    useEffect(() => {
        topicPhotoActions.topicPhoto(slug, {
            per_page:12
        })
    },[slug])

    const {getTopicPhoto} = useSelector(state => state.topicPhoto);

    return(
        <Container>
            <TopicPhotos photos={getTopicPhoto}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicsPhotoContainer;