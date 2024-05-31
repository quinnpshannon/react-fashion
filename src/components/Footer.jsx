import styled from 'styled-components';
import NavItem from './NavItem';
/*
This is where we design the Nav bar (so far)
*/

// Styled Components
const NavBar = styled.nav`
`;
const NavList = styled.ul`
    padding:0;
    margin:0;
    display: flex;
    justify-content: space-between;
    list-style-type:none;
`;
const CBar = styled.p`
    padding: 0;
    margin: 0;
    color: lightgrey;
`;

function Footer() {
    return (
        <footer>
            <NavBar>
                <NavList>
                    <NavItem html = '#' title="Home" color='tomato'/>
                    <NavItem html = '#' title="Women's" color='tomato'/>
                    <NavItem html = '#' title="Men's" color='tomato'/>
                    <NavItem html = '#' title="On The Street" color='tomato'/>
                    <NavItem html = '#' title="The Catwalk" color='tomato'/>
                    <NavItem html = '#' title="AdWatch" color='tomato'/>
                    <NavItem html = '#' title="About" color='tomato'/>
                    <NavItem html = '#' title="Tips" color='tomato'/>
                </NavList>
            </NavBar>
            <CBar>&copy; 2013 Valet Industries, Inc</CBar>
        </footer>
    );
}

export default Footer;