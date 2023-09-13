import React,{useEffect} from 'react';
import styled from 'styled-components';
import {topicActions} from "../../redux/ActionCreators";

const TopicsContainer = () => {

    const listTopic = () => {
        topicActions.listTopics({
            per_page:20
        })
    }

    useEffect(() => {
        listTopic();
    }, [])


    return (
        <Container className={"TopicsContainer"}>
        </Container>
    )
}

const Container = styled.div`

`;

export default TopicsContainer;