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
    display: flex;
    justify-content: space-between;
    list-style-type:none;
`;

function Nav() {
    return (
        <NavBar>
            <NavList>
                <NavItem html = '#' title="Women's" color = 'lightgrey'/>
                <NavItem html = '#' title="Men's" color = 'lightgrey'/>
                <NavItem html = '#' title="On The Street" color = 'lightgrey'/>
                <NavItem html = '#' title="The Catwalk" color = 'lightgrey'/>
                <NavItem html = '#' title="AdWatch" color = 'lightgrey'/>
                <NavItem html = '#' title="About" color = 'lightgrey'/>
            </NavList>
        </NavBar>
    );
}

export default Nav;