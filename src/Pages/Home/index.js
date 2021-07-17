import React, { useState } from 'react';
import logo from '../../Img/logo.png';
import figure from '../../Img/figure.png';
import * as S from './styled';

export default function Home() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const products = require('./Products/products');
    const fees = 12;
    let isOk = false;
    function calcFees(price) {
        let part = (price/fees).toFixed(3).toString();
        return part.slice(0, -1);
    }
    function calcDiscount(price, promo_price) {
        return (100-(promo_price*100)/price).toFixed(0);
    }
    function saveToStorage(){
        let user = {};
        user.name = name;
        user.email = email;
        if(isOk){
            localStorage.setItem('user', JSON.stringify(user));
            alert("Cadastrado com sucesso!")
        }else{
            alert("Preencha os campos corretamente!");
        }
        
    }
    function checkName(){
        if(name!==""){
            isOk = true;
            return true;
        }else{
            isOk = false;
            return false;
        }
    }
    function checkEmail(){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            isOk = true;
            return true;
        }else{
            isOk = false;
            return false;
        }
    }

    return (
        <>
            <S.GoUpBtn href="#top-section"><S.GoUpIcon className="fa fa-arrow-up"></S.GoUpIcon></S.GoUpBtn>
            <S.Main>
                <S.HeaderSection id="top-section">
                    <S.HeaderItem>
                        <S.Logo src={logo}></S.Logo>
                    </S.HeaderItem>
                    <S.HeaderItem>
                        <S.Menus>
                            <S.MenuItem href="#news-section">Newsletter</S.MenuItem>
                            <S.MenuItem href="#offers-section">Ofertas</S.MenuItem>
                            <S.MenuItem href="#contact-section">Contato</S.MenuItem>
                        </S.Menus>
                    </S.HeaderItem>
                </S.HeaderSection>
                <S.ColoredTitle>GAMA<S.Title> FRIDAY</S.Title></S.ColoredTitle>
                <S.Subtitle>Produtos com até <S.ColoredSubtitle>70%</S.ColoredSubtitle> de desconto em até <S.ColoredSubtitle>12x sem juros!</S.ColoredSubtitle></S.Subtitle>
                <S.NewsSection>
                    <S.NewsItem>
                        <S.NewsImg src={figure}></S.NewsImg>
                        <br />
                        <S.ImgCredits href="https://storyset.com/city">City illustrations by Storyset</S.ImgCredits>
                    </S.NewsItem>
                    <S.NewsItem>
                        <S.NewsForm>
                            <S.NewsTitle>Preencha os dados abaixo e fique por dentro das <S.ColoredNews>ofertas</S.ColoredNews></S.NewsTitle>
                            <br />
                            <S.InputText>Nome:  
                                <S.NewsInput type="text" placeholder="Digite seu nome..."
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onFocus={input => input.target.placeholder = ""}
                                onBlur={input => {
                                    input.target.placeholder = "Digite seu nome...";
                                    if(checkName()){
                                        input.target.style.border = "1px solid #63DC3E";
                                        input.target.style.boxShadow = "0 0 8px rgb(99 220 62 / 80%)";
                                    }else{
                                        input.target.style.border = "1px solid #ff0033";
                                        input.target.style.boxShadow = "0 0 8px rgb(255 0 51 / 80%)";
                                    }; 
                                    }}></S.NewsInput>
                            </S.InputText>
                            <br />
                            <br />
                            <S.InputText>E-mail: 
                                <S.NewsInput type="email" placeholder="Digite seu e-mail..."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                onFocus={input => input.target.placeholder = ""}
                                onBlur={input => {
                                    input.target.placeholder = "Digite seu e-mail...";
                                    if(checkEmail()){
                                        input.target.style.border = "1px solid #63DC3E";
                                        input.target.style.boxShadow = "0 0 8px rgb(99 220 62 / 80%)";
                                    }else{
                                        input.target.style.border = "1px solid #ff0033";
                                        input.target.style.boxShadow = "0 0 8px rgb(255 0 51 / 80%)";
                                    }; 
                                    }}></S.NewsInput>
                            </S.InputText>
                            <br />
                            <br />
                            <S.SignBtn type="button" onClick={ saveToStorage }>Cadastrar</S.SignBtn>
                            <br />
                        </S.NewsForm>
                    </S.NewsItem>
                </S.NewsSection>
            </S.Main>
            <br id="offers-section"/>
            <br />
            <S.Content>
                <S.Subtitle>Confira as <S.ColoredSubtitle>Ofertas</S.ColoredSubtitle></S.Subtitle>
                <br />
                <S.ProductsSection id="products-section">
                { products.map(product => {
                    let productImg = require(`./Products/Img/${product.img}`).default;
                    return(
                        <S.Product>
                            <S.ProductContent>
                                <S.PromoTag>
                                    <span>{ calcDiscount(product.price,product['promo-price']) }% OFF</span>
                                </S.PromoTag>
                                <S.ProductImg src={ productImg }></S.ProductImg>
                                <br />
                                <S.ProductName>{ product.name }</S.ProductName>
                                <S.ProductInfo>De: R$ { product.price }</S.ProductInfo>
                                <S.NewPrice>Por: R$ { product['promo-price'] }</S.NewPrice>
                                <S.ProductInfo>Em até <b>{ fees }x</b> de R$ { calcFees(product.price) } sem juros</S.ProductInfo>
                            </S.ProductContent>
                        </S.Product>
                    )
                }) }
                </S.ProductsSection>
                <br id="contact-section"/>
                <br />
            </S.Content>
            <S.Footer>
                <S.FooterText>
                    © Copyright 2021 Matheus Delazeri. Todos direitos reservados.
                </S.FooterText>
                <S.FooterText>
                    Site por <S.FooterLink href="">matheus delazeri</S.FooterLink>
                </S.FooterText>
                <S.ContactSection>
                    <S.ContactItem>
                        <a href="https://github.com/matheus-delazeri" target="_blank">
                        <S.ContactIcon className="fa fa-github"></S.ContactIcon>
                        </a>
                    </S.ContactItem>
                    <S.ContactItem>
                        <a href="https://www.linkedin.com/in/matheus-delazeri-296702139/" target="_blank">
                        <S.ContactIcon className="fa fa-linkedin"></S.ContactIcon>
                        </a>
                    </S.ContactItem>
                    <S.ContactItem>
                        <a href="https://www.instagram.com/matheus.delazeri/" target="_blank">
                        <S.ContactIcon className="fa fa-instagram"></S.ContactIcon>
                        </a>
                    </S.ContactItem>
                </S.ContactSection>
            </S.Footer>
        </>
    )
}