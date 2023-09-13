import React from 'react';
import styled from 'styled-components';
import TopicInfoContainer from "../containers/TopicInfoContainer";
import {SearchContainer} from "../../styled/Container.Styled";
import TopicsPhotoContainer from "../containers/TopicsPhotoContainer";

const Topic = () => {

    return (
        <>
            <Container>
                <TopicInfoContainer/>
                <TopicsPhotoContainer/>
            </Container>
        </>
    )
}

const Container = styled(SearchContainer)`

`;

export default Topic;