import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black};

  img {
    width: 60%;
    margin: 40px 0;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${(props) => props.theme.white};

  &.active {
    background-color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;

export const Footle = styled.footer`
  width: 100%;
  margin-top: auto;
`;
