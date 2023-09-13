import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import SearchResultBar from "../components/Header/SearchResultBar";
import FilterPhoto from "../components/Header/FilterPhoto";

const SearchHeaderContainer = () => {

    return(
        <Container className={"SearchHeaderContainer"}>
            <Header/>
            <SearchResultBar/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  z-index: 200;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

export default SearchHeaderContainer;