import React from 'react';
import styled from 'styled-components';
import {createPortal} from 'react-dom';
import PopupPhoto from "../components/Popup/PopupPhoto";
import {useSelector} from "react-redux";
import {photoActions} from "../../redux/ActionCreators";

const PopupPhotoContainer = () => {

    const {singlePhoto} = useSelector(state => state.photo);

    const onClose = () => {
        photoActions.updateState({photoPopup: false})
    }

    return createPortal(
        <Container onClick={onClose}>
            <PopupPhoto singlePhoto={singlePhoto} onClose={onClose}/>
        </Container>,
            document.getElementById('popup')
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  z-index: 2000;
`;

export default PopupPhotoContainer;