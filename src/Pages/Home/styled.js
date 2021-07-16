import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #c3c3c3;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 7%); 
    top: 0;
    overflow: hidden;
`;
export const HeaderContent = styled.div`
    width: 100%;
    display: table;
    padding: 1% 0;
`;
export const Row = styled.div`
    display: table-row;
`;
export const Cell = styled.div`
    display: table-cell;
    max-width: 25%
`;
export const Logo = styled.img`
    max-width: 100%;
    padding-left: 10%;

    @media (max-width: 990px) {
        width: 60%;
        display:block;
        padding: 2% 0;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Menus = styled.div`
    position: relative;
    bottom: 1.5rem;
    text-align: end;
    padding-right: 10%;

    @media (max-width: 990px) {
        display: none;    
    }
`;
export const MenuItem = styled.a`
    text-decoration: none;
    font-family: sans-serif;
    color: #000;
    padding: 2% 2%;

    &:hover {
        color: #63dc3e;
    }
`;
export const Content = styled.div`
    max-width: 100%;
    margin: 0 15%;

`;
export const Title = styled.h1`
    font-size: 26px;
    font-family: sans-serif;
    font-weight: 100;
    text-align: center;
    color: #000;
`;
export const ColoredTitle = styled.span`
    font-size: 26px;
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
    color: #63DC3E;

`;
export const ProductsSection = styled.div `
    display: flex;
    flex-wrap: wrap;
	max-width: 100%;
    margin: 5px;
`;
export const Product = styled.div`
    max-width: 23%;
    margin: 5px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 7%); 
    cursor: pointer;
    @media (max-width: 990px) {
        max-width: 100%;
    }
    &:hover {
        -webkit-transform: scale(1.03);
    }
`;
export const ProductContent = styled.div`
    padding: 8%;
    line-height: 15px;
`;
export const ProductImg = styled.img`
    max-width: 60%;
    display:block;
    margin-left: auto;
    margin-right: auto;
`;
export const ProductName = styled.h1`
    font-size: 16px;
    line-height: 20px;
    color: #000;
    font-family: sans-serif;
    text-align: center;
    padding-bottom: 5%;
    border-bottom: 1px solid #858585;
`;
export const ProductInfo = styled.h1`
    font-size: 14px;
    color: #858585;
    font-family: sans-serif;
    font-weight: 100;
    text-align: left;
`;
export const NewPrice = styled.h1`
    font-size: 20px;
    color: #63DC3E;
    font-family: sans-serif;
    font-weight: 600;
`;
export const BuyButton = styled.button`
   width: 100%;
   height: 36px; 
   display: block;
   margin: 0 auto;
   cursor: pointer;
   background-color: #63DC3E;
   border: 0;
   border-radius: 10px;
   color: #fff;
   font-family: sans-serif;
   font-weight: 600;
`;