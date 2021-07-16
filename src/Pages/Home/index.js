import logo from '../../Img/logo.png';
import * as S from './styled';

export default function Home() {
    const products = require('./Products/products');
    const fees = 10;
    function calcFees(price) {
        let part = (price/fees).toFixed(3).toString();
        return part.slice(0, -1);
    }
    return (
        <>
            <S.Header>
                <S.HeaderContent>
                    <S.Row>
                        <S.Cell>
                            <S.Logo src={logo} />
                        </S.Cell>
                        <S.Cell>
                            <S.Menus>
                                <S.MenuItem href="#">Promoções</S.MenuItem>
                                <S.MenuItem href="#">Newsletter</S.MenuItem>
                                <S.MenuItem href="#">Login</S.MenuItem>
                            </S.Menus>
                        </S.Cell>
                    </S.Row>
                </S.HeaderContent>
            </S.Header>
            <br />
            <br />
            <S.Content>
                <S.Title>Confira as <S.ColoredTitle>Promoções</S.ColoredTitle></S.Title>
                <br />
                <br />
                <S.ProductsSection>
                { products.map(product => {
                    let productImg = require(`./Products/Img/${product.img}`).default;
                    return(
                        <S.Product>
                            <S.ProductContent>
                                <S.ProductImg src={ productImg }></S.ProductImg>
                                <br />
                                <S.ProductName>{ product.name }</S.ProductName>
                                <S.ProductInfo>De: R$ { product['promo-price'] }</S.ProductInfo>
                                <S.NewPrice>Por: R$ { product.price }</S.NewPrice>
                                <S.ProductInfo>Em até <b>10x</b> de R$ { calcFees(product.price) } sem juros</S.ProductInfo>
                                <br />
                                <S.BuyButton type="button">COMPRAR</S.BuyButton>
                            </S.ProductContent>
                        </S.Product>
                    )
                }) }
                </S.ProductsSection>
                 
            </S.Content>
        </>
    )
}