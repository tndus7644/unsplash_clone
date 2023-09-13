import React,{useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import UsersList from "../components/SearchUsers/UsersList";

const SearchUsersContainer = ({match}) => {

    const query = match.params.query

    useEffect(() => {
        SearchResult();
    },[query])

    const SearchResult = () => {

    }


    return(
        <Container className={"SearchUsersContainer"}>
        </Container>
    )
}

const Container = styled.div`

`;



export default SearchUsersContainer;