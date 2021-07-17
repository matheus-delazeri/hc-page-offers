import logo from '../../Img/logo.png';
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
                    </S.HeaderItem>
                    <S.HeaderItem>
                        <S.Menus>
                            <S.MenuItem href="#">Promoções</S.MenuItem>
                            <S.MenuItem href="#">Newsletter</S.MenuItem>
                            <S.MenuItem href="#">Login</S.MenuItem>
                        </S.Menus>
                    </S.HeaderItem>
                </S.HeaderSection>
                <br />
                <S.ColoredTitle>GAMA<S.Title> FRIDAY</S.Title></S.ColoredTitle>
                <S.Subtitle>Produtos com até <S.ColoredSubtitle>70%</S.ColoredSubtitle> de desconto em até <S.ColoredSubtitle>12x sem juros!</S.ColoredSubtitle></S.Subtitle>
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