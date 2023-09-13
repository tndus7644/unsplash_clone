import React from 'react';
import styled from 'styled-components';
import {CollectionSvg, PhotoSvg, UserSvg} from "../Svg";
import {useParams, useNavigate} from "react-router";
import cn from 'classnames';

const SearchResultBar = () => {

    const {category, query} = useParams();
    const navigate = useNavigate();

    const searchRoutes = [
        {
            name: 'photos',
            to: `/search/photos/${query}`,
            icon: <PhotoSvg/>
        },
        {
            name: 'collections',
            to: `/search/collections/${query}`,
            icon: <CollectionSvg/>
        },
        {
            name: 'users',
            to: `/search/users/${query}`,
            icon: <UserSvg/>
        }
    ]

    return (
        <Container>
            {
                searchRoutes.map((item, index) =>
                <Search key={index}
                        className={cn({isActive: category === item.name})}
                        onClick={() => {
                            navigate(item.to);
                        }}>
                    {item.icon}
                    {item.name}
                </Search>
                )
            }
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 56px;
`;

const Search = styled.a`
  display: flex;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;
  color: #777;
  transition: 0.1s;

  &.isActive,
  &:hover {
    opacity: 1;
    color: #111;

    svg {
      opacity: 1;
    }
  }

  h1 {
    padding-left: 7px;
  }

  svg {
    width: 18px;
    display: flex;
    align-items: center;
    transition: 0.1s;
    opacity: 0.2;
    margin-right: 5px;
  }

`;

export default SearchResultBar;