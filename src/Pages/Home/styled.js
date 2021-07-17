import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
`;
export const HeaderSection = styled.div `
    display: flex;
	max-width: 100%;
    padding: .7% 5%;
    border-bottom: 1px solid #c3c3c3;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 7%)
`;
export const HeaderItem = styled.div`
    width: 33%;
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
    text-align: end;
    top: 1.5rem;
    padding-left: 20%;

    @media (max-width: 990px) {
        display: none;    
    }
`;
export const MenuItem = styled.a`
    text-decoration: none;
    font-family: sans-serif;
    color: #000;
    padding: 2% 3%;

    &:hover {
        color: #63dc3e;
    }
`;
export const Title = styled.span`
    font-size: 40px;
    font-family: sans-serif;
    font-weight: 100;
    text-align: center;
    color: #000;
`;
export const ColoredTitle = styled.h1`
    font-size: 40px;
    font-family: sans-serif;
    font-weight: bold;
    text-align: center;
    color: #63DC3E;
`;
export const NewsSection = styled.div`
    max-width: 100%;
    margin: 0 15%;
    background-color: #63DC3E;
`;
export const NewsTitle = styled.h1`
    font-size: 26px;
    color: 
`;
export const Content = styled.div`
    max-width: 100%;
    margin: 0 15%;
`;
export const Subtitle = styled.h1`
    font-size: 26px;
    font-family: sans-serif;
    font-weight: 100;
    text-align: center;
    color: #000;
`;
export const ColoredSubtitle = styled.span`
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
export const PromoTag = styled.div`
    max-width: 70px;
    border-radius: 5px;
    padding: 2%;
    background-color: #63DC3E;
    color: #fff;
    margin-bottom: 2%;
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