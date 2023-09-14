import React from 'react';
import styled from 'styled-components';
import {FacebookSvg, LogoSvg} from "../../Svg";
import {Button} from "../../Button/Button.Styled";
import {useSelector} from "react-redux";
import cn from 'classnames';
import {appActions} from "../../../../redux/ActionCreators";
import {Overlay} from "../../Layout/Layout.Styled";

const LoginPopup = () => {

    const {popup} = useSelector(state => state.app);

    const closePopup = () => {
        appActions.updateState({
            popup:false
        })
    }

    return (
        <Container className={cn({show:popup})}>
            <Overlay onClick={closePopup} className={"overlay"}/>
            <Content>
                <ContentContainer>
                    <LoginContent>
                        <Logo>
                            <LogoSvg/>
                        </Logo>
                        <h1>Login</h1>
                        <h3>To submit a photo, login.</h3>
                    </LoginContent>
                    <Facebook>
                        <FacebookSvg/>
                        Login with Facebook
                    </Facebook>
                    <span>OR</span>
                    <Form>
                        <Label htmlFor="email">
                            <span>Email</span>
                        </Label>
                        <Input type="text" id="email"/>
                        <div>
                            <Label htmlFor="password">
                                <span>Password</span>
                            </Label>
                            <FindPassword>htmlFor your password?</FindPassword>
                        </div>
                        <Input type="password" id="password"/>
                        <LoginButton>
                            Login
                        </LoginButton>
                    </Form>
                    <Join>Don’t have an account? <span>Join</span></Join>
                </ContentContainer>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  color: #111;
  display: none;
  &.show{
    display: flex;
  }
  
  .overlay{
    z-index: -1;
  }
  
`;


const Content = styled.div`
  background: #fff;
  width: 900px;
  height: 670px;
  border-radius: 5px;
  text-align: center;
  padding: 40px 0;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 16px 0 10px;
  }

`;

const ContentContainer = styled.div`
  width: 570px;
  margin: 0 auto;
`;

const LoginContent = styled.div`
  margin-bottom: 36px;
`;

const Logo = styled.div`
  svg {
    width: 64px;
    height: 64px;
  }
`;

const Facebook = styled(Button)`
  width: 100%;
  background: #1977f2;
  padding: 13px 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 30px;

  svg {
    fill: #fff;
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  &:hover {
    background: #1470e3;
  }
`;

const Form = styled.form`
  text-align: left;
  margin: 30px 0;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  line-height: 1.4;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #e7f1fe;
  border: 1px solid #777;
  border-radius: 3px;

  & {
    margin-bottom: 30px;
  }
`;

const FindPassword = styled.div`
  cursor: pointer;
  color: #777;
  text-decoration: underline;
`;

const LoginButton = styled.button`
  margin-top: 30px;
  text-align: center;
  border: 0;
  width: 100%;
  background: #111;
  color: #fff;
  padding: 14px 0;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
`;

const Join = styled.div`
  span {
    cursor: pointer;
    color: #777;
    text-decoration: underline;
  }
`;

export default LoginPopup;