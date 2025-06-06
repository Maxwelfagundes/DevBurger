import styled from 'styled-components';
import Background from '../../assets/BackgroundLogin.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
background: url('${BannerHome}');
background-size: cover;
background-position: center;
height: 480px;

h1{
    font-family: 'Roud Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position:absolute;
    right: 20%;
    top: 10%;
    
}
`;

export const Container = styled.section`
background: linear-gradient(
    rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
),  
 url('${Background}');

`;
