import React from 'react';
import styled from 'styled-components';
import TopicsContainer from "../../containers/TopicsContainer";
import TopicList from "./TopicList";
import {useSelector} from "react-redux";

const Lnb = () => {

    const {list} = useSelector(state => state.topic)

    return (
        <Container>
            <TopicsContainer/>
            <Editorial>Editorial</Editorial>
            <TopicList data={list}/>
            <View>View all</View>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Editorial = styled.div`
  font-weight: 600;
  position: relative;
  margin-right: 16px;

  &:after {
    content: '';
    position: absolute;
    top: -9px;
    right: -16px;
    width: 1px;
    height: 30px;
    background: #ddd;
  }
`;

const View = styled.div` 
  white-space: nowrap;
  margin-left: 10px;
  padding: 3px;
  cursor: pointer;
  color: #777;
  &:hover {
    color: #333;
  }
`;


export default Lnb;