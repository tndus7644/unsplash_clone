import React from 'react';
import styled from 'styled-components';
import UsersListCard from "../PhotoList/UsersListCard";

const UsersList = ({users}) => {

    return(
        <Container>
            {users.map((item, index) => <UsersListCard key={index} {...item}/>)}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default UsersList;