import React from 'react'
import styled from 'styled-components';
import PhotoListContainer from "../containers/PhotoListContainer";
import Visual from "../components/Home/Visual";

const Home = () => {

    return (
        <Container>
            <Visual/>
            <PhotoListContainer/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;