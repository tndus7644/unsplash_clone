import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {SearchSvg} from "../Svg";
import {media} from "../../../styled/Responsive.Styled";
import {useNavigate} from "react-router";

const SearchBox = ({shape}) => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/photos/${value}`);
    }

    return (
        <Container className={cn("SearchBox", shape)}>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Button>
                        <SearchSvg/>
                    </Button>
                    <Input type="text"
                           placeholder="SearchPhotos free high-resolution photos"
                           value={value}
                           onChange={onChange}
                    />
                </Label>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: block;
  width: 100%;

`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 0 15px;

  .round & {
    height: 38px;
    border-radius: 19px;
    background: #eee;
  }

  .square & {
    height: 54px;
    border-radius: 4px;
    background: #fff;

    &:hover {
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.3);
    }
    
    ${media.lessThan('sm')`
    display: none;
    `}
  }
`;

const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer; 

  &:focus {
    outline: 0;
  }

  svg {

    .round & {
      width: 20px;
    }

    .square & {
      width: 24px;
    }
  }
`;

const Input = styled.input`
  display: block;
  padding: 8px;
  flex: 1;
  height: 100%;
  background: none;
  border: none;

  &:focus {
    outline: 0;
  }
`;

export default SearchBox;