import React, {useEffect} from 'react';
import styled from 'styled-components';
import SearchPhotoContainer from "../../containers/SearchPhotoContainer";
import {SearchNameStyled} from "../../../styled/SearchName.Styled";
import {SearchContainer} from "../../../styled/Container.Styled";
import SearchHeaderContainer from "../../containers/SearchHeaderContainer";

const SearchPhotos = ({match}) => {


    return (
        <>
        <SearchHeaderContainer/>
        <Container className={"SearchContainer"}>
            <Title>{match.params.query}</Title>
            <SearchPhotoContainer match={match}/>
        </Container>
        </>
    )
}

const Container = styled(SearchContainer)`
`;

const Title = styled(SearchNameStyled)`
`;

export default SearchPhotos;