import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import PopupPhotoContainer from "./containers/PopupPhotoContainer";
import {useSelector} from "react-redux";
import HeaderContainer from "./containers/HeaderContainer";
import Routers from "./routes/Routers";

const App = () => {

    const {photoPopup} = useSelector(state => state.photo);

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Routers/>
            {
                photoPopup &&
                <PopupPhotoContainer/>
            }
        </Container>
    )
}

const Container = styled.div`
    
`;

export default App;