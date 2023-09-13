import React from 'react';
import styled from 'styled-components';
import SearchHeaderContainer from "../../containers/SearchHeaderContainer";
import {SearchContainer} from "../../../styled/Container.Styled";
import {SearchNameStyled} from "../../../styled/SearchName.Styled";
import SearchUsersContainer from "../../containers/SearchUsersContainer";

const SearchUsers = ({match}) => {

    return(
            <>
                <SearchHeaderContainer/>
                <Container>
                    <Title>{match.params.query}</Title>
                    <SearchUsersContainer match={match}/>
                </Container>
            </>
    )
}

const Container = styled(SearchContainer)`
`;

const Title = styled(SearchNameStyled)`
`;

export default SearchUsers;