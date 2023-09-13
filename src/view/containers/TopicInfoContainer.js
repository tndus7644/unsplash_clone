import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {topicActions} from "../../redux/ActionCreators";
import TopicsContent from "../components/Topics/TopicsContent";
import TopicInfo from "../components/Topics/TopicInfo";
import {useParams} from "react-router";

const TopicInfoContainer = () => {

    const {slug} = useParams();

    useEffect(() => {
        topicActions.getTopics(slug)
    },[slug])

    const {topics} = useSelector(state => state.topic)

    return(
        <Container className={"TopicInfoContainer"}>
            <TopicsContent topics={topics}/>
            <TopicInfo topics={topics}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TopicInfoContainer;