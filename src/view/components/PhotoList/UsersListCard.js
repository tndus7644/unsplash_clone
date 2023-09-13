import React from 'react';
import styled from 'styled-components';
import {UnsplashButton} from "../Button/Button.Styled";
import {FollowSvg} from "../Svg";

const UsersListCard = (props) => {

    const {
        photos,
        name,
        profile_image,
        username
    } = props

    return (
        <Container>
            <InfoBox>
                <Profile>
                    <img src={profile_image?.medium} alt=""/>
                </Profile>
                <Id>
                    <p>{name}</p>
                    <span>{username}</span>
                </Id>
            </InfoBox>
            <Photos>
                {photos.map((item, index) =>
                    <Img {...item} key={index}>
                        <img src={item?.urls?.thumb} alt=""/>
                    </Img>
                )}
            </Photos>
            <Button>
                <FollowSvg/>Follow
            </Button>
        </Container>
    )
}

const Container = styled.div`
  max-width: 416px;
  max-height: 250px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #777;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Profile = styled.div`
  img {
    border-radius: 50%;
    border: 1px solid #ddd;
  }
`;

const Id = styled.div`
  margin-left: 20px;

  p {
    font-size: 15px;
    font-weight: bold;
    line-height: 1.6;
  }

  span {
    color: #777;

    &:before {
      content: '@';
      top: 0;
      left: 0;
    }
  }
`;

const Photos = styled.div`
  display: flex;
`;

const Img = styled.div`
  width: 122px;
  height: 91px;
  overflow: hidden;
  background: #ddd;
  margin-left: 8px;

  &:first-child {
    margin-left: 0;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Button = styled(UnsplashButton)`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 8px;
  width: 100%;
  margin-top: 15px;
  color: #777;

  svg {
    width: 23px;
    padding-right: 5px;
  }

  &:hover {
    border-color: #777;
  }
`;


export default UsersListCard;