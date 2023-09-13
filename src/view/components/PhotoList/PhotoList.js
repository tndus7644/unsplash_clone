import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";
import {setGroups} from "../../../lib/Common";
import {photoActions} from "../../../redux/ActionCreators";

const PhotoList = ({photos = []}) => {

    const groups = setGroups(photos);

    const onClickPhoto = (id) => {
        console.log(id);
        photoActions.updateState({
            photoPopup: true
        })
        photoActions.getPhotoById(id);
    }

    if (photos.length === 0) return null;


    return (
        <Container>
            <Groups>
                {groups.map((group, groupIndex) =>
                    <Group key={groupIndex}>
                        {group.map((item, index) =>
                            <Col key={index}>
                                <PhotoCard {...item} onClickPhoto={onClickPhoto}/>
                            </Col>
                        )}
                    </Group>
                )}
            </Groups>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Groups = styled.div`
  display: flex;
`;

const Group = styled.div`
  width: 33.3333%;
`;

const Col = styled.div`
  padding: 10px;
`;

export default PhotoList;