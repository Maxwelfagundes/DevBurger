import styled from 'styled-components';

export const Container = styled.div`
background-color: ${(props) => props.theme.white}fff;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 20px ;
padding-left: 20px;

*{
    color: #${(props) => props.theme.secondBlack};
    font-weight: 500;
}


.conteiner-top{
    display: grid;
    grid-gap: 15px 35%;
    grid-template-areas: 
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price'
    ;

    .title {
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #${(props) => props.theme.secondBlack};
        color: ${(props) => props.theme.white};
        width: 100%;
        padding: 15px ;
        text-align: center;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        
    } 

    .items {
        grid-area: items  ;
          padding-left: 20px;
    }

    .items-price {
        grid-area: items-price  ;
        padding-right: 20px;
    }
    .delivery-tax {
        grid-area: delivery-tax ;
        padding-left: 20px;
    }
    .delivery-tax-price{
        grid-area: delivery-tax-price ;
         padding-right: 20px;
    }
}

.conteiner-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;

    
*{
   
    font-weight: 700;
}

}


`;
