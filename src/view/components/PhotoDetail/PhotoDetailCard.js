import React from 'react';
import styled from 'styled-components';
import {AddSvg, ChooseSvg, CloseSvg, InfoSvg, LikeSvg, ShareSvg} from "../Svg";
import {UnsplashButton} from "../Button/Button.Styled";

const PhotoDetailCard = ({user, onClose, urls}) => {

    return (

        <Container className={"PhotoDetailCard"}>
            <Content>
                <Button onClick={onClose}>
                    <CloseSvg/>
                </Button>
                <TopInfo>
                    <User>
                        <img src={user?.profile_image?.small} alt=""/>
                        <Username>
                            <h1>{user?.name}</h1>
                            <h3>{user?.instagram_username}</h3>
                        </Username>
                    </User>
                    <ButtonGroup>
                        <Like>
                            <LikeSvg/>
                        </Like>
                        <Add>
                            <AddSvg/>
                        </Add>
                        <Download>
                            Download free
                            <ChooseSvg/>
                        </Download>
                    </ButtonGroup>
                </TopInfo>
                <Img>
                    <img src={urls?.regular} alt=""/>
                </Img>
                <BottomInfo>
                    <Share>
                        <ShareSvg/>
                        Share
                    </Share>
                    <Info>
                        <InfoSvg/>
                        Info
                    </Info>
                </BottomInfo>
            </Content>
        </Container>

    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Button = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  border: 0;
  background: none;
  cursor: pointer;
  user-select: none;

  &:focus {
    outline: 0;
  }

  svg {
    fill: #fff;
  }
`;

const Content = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  border-radius: 4px;

`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;

  img {
    user-select: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const Username = styled.div`
  user-select: none;

  h1 {
    font-weight: bold;
    cursor: pointer;
    line-height: 1.4;
  }

  h3 {
    color: #777;
    font-size: 13px;
    cursor: pointer;
    transition: 0.2s;

    &:before {
      content: '@';
      top: 0;
      left: 0;
    }

    &:hover {
      color: #111;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Like = styled(UnsplashButton)`
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const Add = styled(UnsplashButton)`
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const Download = styled.button`
  border: 0;
  background: #3db46d;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0 7px;
  user-select: none;
  transition: 0.2s;

  svg {
    fill: #fff;
    width: 24px;
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background: #35ab67;
  }
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    max-width: 400px;
    user-select: none;
  }
`;

const BottomInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Share = styled(UnsplashButton)`
  color: #777;
  border: 1px solid #ddd;
  margin-right: 10px;
`;

const Info = styled(UnsplashButton)`
  color: #777;
  border: 1px solid #ddd;
`;


export default PhotoDetailCard;