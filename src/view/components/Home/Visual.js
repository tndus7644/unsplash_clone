import React from 'react';
import styled from 'styled-components';
import {Overlay} from "../Layout/Layout.Styled";
import SearchBox from "../searchBox";
import {media} from "../../../styled/Responsive.Styled";

const Visual = () => {

    return (
        <Container>
            <Overlay/>
            <Content>
                <h1>Unsplash</h1>
                <h2>
                    <span>
                    The internet’s source of freely-usable images.
                    </span>
                    <span>
                    Powered by creators everywhere.
                    </span>
                </h2>
                <SearchBox shape={"square"}/>
                <p>Trending
                    : <span>flower</span>, <span>wallpapers</span>, <span>backgrounds</span>, <span>happy</span>, <span>love</span>
                </p>
            </Content>
            <License>
                <span>Photo of the Day by Danist</span>
                <span>Read more about the Unsplash License</span>
                <div>
                    <img src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" alt=""/>
                    <span>Create your website today.</span>
                </div>
            </License>
        </Container>
    )
}


const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 600px;
  background: url('https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')50% / cover;

  ${media.lessThan('sm')`
    height: 350px;
    `};
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 894px;
  padding: 0 15px;
  margin: 0 auto;

  h1 {
    font-size: 46px;
    margin-bottom: 16px;
    color: #fff;
    font-weight: bold;
    ${media.lessThan('sm')`
    font-size: 24px;
    `};
  }

  h2 {
    font-size: 18px;
    margin-bottom: 24px;
    color: #fff;
    line-height: 1.5;
    ${media.lessThan('sm')`
    font-size: 15px;
    `};
    
    span{
      ${media.lessThan('sm')`
    display:block;
    `};
    }
  }

  p {
    font-size: 15px;
    margin-top: 16px;
    color: #fff;
    font-weight: 400;

    span {
      cursor: pointer;
      color: #ddd;
      transition: 0.2s;

      &:hover {
        color: #fff;
        
      }
    }
    ${media.lessThan('sm')`
    display: none;
    `};
  }
`;

const License = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;

  span {
    font-size: 13px;
    color: #eee;
    cursor: pointer;
  }

  div {
    cursor: pointer;

    img {
      margin-bottom: 15px;
    }

`;

export default Visual;