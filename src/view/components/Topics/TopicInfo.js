import React from 'react';
import styled from 'styled-components';
import {CuratorSvg, PhotoSvg, StatusSvg, UserSvg} from "../Svg";
import {useSelector} from "react-redux";
import {appActions} from "../../../redux/ActionCreators";

const TopicInfo = ({topics}) => {

    const {
        owners,
        status,
        total_photos,
        top_contributors,
        title
    } = topics

    const {popup} = useSelector(state => state.app);


    const handlePopup = () => {
        appActions.updateState({
            popup:!popup
        })
    }

    return (
        <Container>
            <InfoBox>
                <Info>
                    <div>
                        <StatusSvg/>
                        <p>Status</p>
                    </div>
                    <Status className={status}>
                        <div/>
                        {status}
                    </Status>
                </Info>
                <Info>
                    <div>
                        <CuratorSvg/>
                        <p>Curator</p>
                    </div>
                    <img className={"OwnersImage"} src={owners[0]?.profile_image?.small} alt=""/>
                </Info>
                <Info>
                    <div>
                        <PhotoSvg/>
                        <p>Contributions</p>
                    </div>
                    {total_photos}
                </Info>
                <Info>
                    <div>
                        <UserSvg/>
                        <p>Top contributors</p>
                    </div>
                    <Contributors>
                        {top_contributors.map((item, index) =>
                            <ProfileImage key={index}>
                                <img src={item.profile_image.small} alt=""/>
                            </ProfileImage>
                        )}
                    </Contributors>
                </Info>
            </InfoBox>
            <Submit onClick={handlePopup}>
                Submit to <span>{title}</span>
            </Submit>
        </Container>
    )
}

const Container = styled.div`
  width: 416px;
`;

const InfoBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px 20px;
  
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  font-size: 15px;

  div {
    display: flex;
    align-items: center;

    svg {
      fill: #ddd;
      width: 18px;
    }

    p {
      margin-left: 10px;
    }
  }

  img {
    border-radius: 50%;
    border: 1px solid #eee;
    width: 17px;
    cursor: pointer;
  }

  &:last-child {
    border: 0;
  }

  img.OwnersImage {
    width: 30px;
  }

  p {
    padding: 18px 0;
  }
`;

const Status = styled.div`
  padding: 5px 9px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
  
  div {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 7px;
  }
  
  &.open{
    background: #c2ebd3;
  }
  
  &.open div{
    background: #3db46d;

  }
  
  &.closed{
    background: #f6ccc1;
  }
  
  &.closed div{
    background: #e25c3d;
  }

`;

const ProfileImage = styled.div`
  margin-left: 7px;
`;

const Contributors = styled.div`
  display: flex;
`;

const Submit = styled.button`
  margin-top: 15px;
  background: #111;
  border-radius: 4px;
  color: #fff;
  width: 100%;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  border: 0;
  
  span{
    font-weight: bold;
  }
`;

export default TopicInfo;