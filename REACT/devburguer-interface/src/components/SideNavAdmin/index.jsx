import { SignOut } from '@phosphor-icons/react';
import Logo from '../../assets/Logo.svg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, Footle, NavLink, NavLinkContainer } from './style';

export function SideNavAdmin() {
  const { logout } = useUser();

  return (
    <Container>
      <img src={Logo} alt="Hamburger Logo DevBurger" />
      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footle>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footle>
    </Container>
  );
}
