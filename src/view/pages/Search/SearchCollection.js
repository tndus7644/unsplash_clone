import React from 'react';
import styled from 'styled-components';
import {SearchNameStyled} from "../../../styled/SearchName.Styled";
import SearchCollectionsContainer from "../../containers/SearchCollectionsContainer";
import {SearchContainer} from "../../../styled/Container.Styled";
import SearchHeaderContainer from "../../containers/SearchHeaderContainer";

const SearchCollection = ({match}) => {

    return (
        <>
            <SearchHeaderContainer/>
            <Container>
                <Title>{match.params.query}</Title>
                <SearchCollectionsContainer/>
            </Container>
        </>
    )
}

const Container = styled(SearchContainer)`
`;

const Title = styled(SearchNameStyled)`
`;

export default SearchCollection;