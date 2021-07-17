import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
    border-bottom: 1px solid #c3c3c3;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 7%);
    background-color: #fff;
    @media (max-width: 990px) {
        height: 100%;
    }
`;
export const GoUpBtn = styled.a`
   position: fixed;
   bottom: 5%;
   right: 3%; 
`;
export const GoUpIcon = styled.i`
    font-size: 1.7rem;
    color: #63DC3E;
`;
export const HeaderSection = styled.div `
    display: flex;
	max-width: 100%;
    padding: .7% 5%;

    @media (max-width: 990px){
        flex-direction: column;
    }
`;
export const HeaderItem = styled.div`
    width: 50%;
    @media (max-width: 990px) {
        width: 100%;
    }
`;
export const Logo = styled.img`
    max-width: 100%;
    padding-left: 10%;

    @media (max-width: 990px) {
        width: 50%;
        display: block;
        padding: 2% 0;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Menus = styled.div`
    position: relative;
    text-align: end;
    top: 1.2rem;
    padding-right: 10%;

    @media (max-width: 990px) {
        top: .5rem;
        text-align: center;
        padding-right: 0;
        font-size: 14px;
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
    @media (max-width: 990px) {
        padding-top: 5%;
        line-height: 20%;
    }
`;
export const NewsSection = styled.div`
    display: flex;
    max-width: 100%;
    margin: 12vh 20%;
    align-content: center;
    @media (max-width: 990px) {
        flex-direction: column;
        margin: 2% 10%;
    }
`;
export const NewsItem = styled.div`
    max-width: 50%;
    @media (max-width: 990px) {
        max-width: 100%;
        margin-bottom: 10%;
    }
`;
export const NewsImg = styled.img`
    max-width: 100%;
    border-radius: 10px;
`;
export const ImgCredits = styled.a`
    text-decoration: none;
    color: #333;
    font-size: 12px;
`;
export const NewsForm = styled.div`
    width: 80%;
    margin-left: 20%;
    border-radius: 10px;
    padding: 1% 3%;
    box-shadow: 0 0 40px rgb(99 220 62 / 80%);
    @media (max-width: 990px) {
        display: block;
        margin: 0 auto;
    }
`;
export const NewsTitle = styled.h1`
    font-size: 20px;
    color: #000;
    text-align: center;
    font-weight: 400;
`;
export const ColoredNews = styled.span`
    font-size: 20px;
    font-weight: 900;
    color: #63DC3E;
`;
export const InputText = styled.span`
    font-size: 14px;
    padding-left: 4%;
    color: #000;
    @media (max-width: 990px) {
        font-size: 12px;
    }
`;
export const NewsInput = styled.input`
    width: 75%;
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 3px;
    margin-left: 1.5%;
    border-radius: .25rem;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const SignBtn = styled.button`
    display: block;
    border: 0;
    padding: .1rem .5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    height: 2rem;
    background-color: #63DC3E;
    color: #fff;
    text-align: center;
    font-weight: 900;

    &:hover{
        -webkit-transform: scale(1.03);
        cursor: pointer;
    }

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
export const ContactSection = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    margin: 0 15%;

`;
export const ContactItem = styled.div`
    max-width: 33%;
    padding: 0 1%;
`;
export const ContactIcon = styled.i`
    font-size: 20px;
    color: #000;

    &:hover{
        -webkit-transform: scale(1.1);
    }
`;
export const Footer = styled.div`
    border-top: 1px solid #c3c3c3;
    padding: 2% 0;
    max-width: 100%;
`;
export const FooterText = styled.p`
    line-height: 10px;
    text-align: center;
    font-size: 12px;
`;
export const FooterLink = styled.a`
    text-decoration: none;
    color: #333;
    font-weight: 900;
`;
    