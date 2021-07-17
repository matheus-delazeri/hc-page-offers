import logo from '../../Img/logo.png';
import figure from '../../Img/figure.png';
import * as S from './styled';

export default function Home() {
    const products = require('./Products/products');
    const fees = 12;
    function calcFees(price) {
        let part = (price/fees).toFixed(3).toString();
        return part.slice(0, -1);
    }
    function calcDiscount(price, promo_price) {
        return (100-(promo_price*100)/price).toFixed(0);
    }
    return (
        <>
            <S.Main>
                <S.HeaderSection>
                    <S.HeaderItem>
                        <S.Logo src={logo}></S.Logo>
                    </S.HeaderItem>
                    <S.HeaderItem>
                        <S.Menus>
                            <S.MenuItem href="#">Newsletter</S.MenuItem>
                            <S.MenuItem href="#">Ofertas</S.MenuItem>
                            <S.MenuItem href="#">Contato</S.MenuItem>
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
                                onFocus={input => input.target.placeholder = ""}
                                onBlur={input => input.target.placeholder = "Digite seu nome..."}></S.NewsInput>
                            </S.InputText>
                            <br />
                            <br />
                            <S.InputText>E-mail: 
                                <S.NewsInput type="email" placeholder="Digite seu e-mail..."
                                onFocus={input => input.target.placeholder = ""}
                                onBlur={input => input.target.placeholder = "Digite seu e-mail..."}></S.NewsInput>
                            </S.InputText>
                            <br />
                            <br />
                            <S.SignBtn>Cadastrar</S.SignBtn>
                            <br />
                        </S.NewsForm>
                    </S.NewsItem>
                </S.NewsSection>
            </S.Main>
            <br />
            <br />
            <S.Content>
                <S.Subtitle>Confira as <S.ColoredSubtitle>Promoções</S.ColoredSubtitle></S.Subtitle>
                <br />
                <S.ProductsSection>
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
                <br />
                <br />
                 
            </S.Content>
        </>
    )
}