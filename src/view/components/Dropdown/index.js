import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useSelector} from "react-redux";
import {FacebookSvg, InstagramSvg, TwitterSvg} from "../Svg";

const Dropdown = () => {

    const {dropdown} = useSelector(state => state.app);

    return (
        <Container className={cn({show:dropdown})}>
            <Menu>
                <MenuList>About</MenuList>
                <MenuList>Wallpapers</MenuList>
                <MenuList>Blog</MenuList>
                <MenuList>Topics</MenuList>
                <MenuList>Collections</MenuList>
                <MenuList>Community</MenuList>
                <MenuList>History</MenuList>
                <MenuList>Made with Unsplash</MenuList>
                <MenuList>API/Developers</MenuList>
                <MenuList>Official Apps</MenuList>
                <IconGroup>
                    <SocialIcon as="a">
                        <TwitterSvg/>
                    </SocialIcon>
                    <SocialIcon as="a">
                        <FacebookSvg/>
                    </SocialIcon>
                    <SocialIcon as="a">
                        <InstagramSvg/>
                    </SocialIcon>
                </IconGroup>
            </Menu>
            <Line/>
            <About>
                <AboutMenu>Help</AboutMenu>
                <AboutMenu>License</AboutMenu>
                <AboutMenu>Press</AboutMenu>
                <AboutMenu>Join the team</AboutMenu>
            </About>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 0;
  width: 285px;
  background: #111;
  border-radius: 4px;
  display: none;
  box-shadow: 1px 8px 9px 10px rgba(0, 0, 0, 0.1);

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    background: #111;
    width: 10px;
    height: 10px;
    top: -3px;
    left: 16px;
    transform: rotate(45deg);
  }

  &.show {
    display: block;
  }

`;

const Menu = styled.ul`
  padding: 15px 15px 0;
`;

const MenuList = styled.li`
  color: #fff;
  padding: 12px 0;
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #757575;
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.button`
  background: none;
  border: none;
  outline: 0;
  cursor: pointer;
  fill: #d9d9d9;
  transition: 0.2s;
  margin: 0 10px 10px 0;

  svg {
    width: 20px;
  }

  &:hover {
    fill: #777;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #777;
`;

const About = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutMenu = styled.div`
  color: #ddd;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0;
  transition: 0.2s;

  &:hover {
    color: #777;
  }
`;


export default Dropdown;