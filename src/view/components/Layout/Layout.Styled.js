import styled from 'styled-components';
import {breakPoint, media} from "../../../styled/Responsive.Styled";
import {pxToRem} from "../../../styled/Util.Styled";

export const PageContainer = styled.div`
    flex: 1;
    background-color: ${props => props.dark && '#151a1d'};
    min-height: ${pxToRem(690)};
`

export const ContentContainer = styled.div`
    position:relative;
    max-width: ${pxToRem(1330)};
    margin: 0 auto;
    padding: 0 ${pxToRem(15)};
    ${props => props.full && `
        max-width: 100%;    
    `};
    
    ${media.lessThan("lg")`
        max-width: ${pxToRem(breakPoint.MD)};   
    `};
    
    ${media.lessThan("md")`
        max-width: ${pxToRem(breakPoint.SM)};
    `};
    
    ${media.lessThan("sm")`
        max-width: ${pxToRem(breakPoint.XS)};
    `};
    
    
    ${media.lessThan("xs")`
        max-width: 100%;    
    `};
   
`;

export const Full = styled.div`
    flex: 1;
`;


export const Overlay = styled.div`
    position:${props => props.fixed ? 'fixed' :'absolute'};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:rgba(0,0,0, ${props => (props.alpha || 0.6)});
`;


export const Sentinel = styled.div`
  height: 30px;
  background: none;
  position: absolute;
  bottom: 60vh;
  left: 0;
  right: 0;
  pointer-events: none;
`;