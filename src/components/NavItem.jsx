import styled from 'styled-components';
/*
This is where we design the Nav bar (so far)
*/

// Styled Components
const NavItem = styled.li`
`;
const NavLink = styled.a`
`;

function Nav(props) {
    props.html
    props.title
    props.color
    return (
        <NavItem>
            <NavLink href={props.html} style={{color: props.color}}>{props.title}</NavLink>
        </NavItem>
    );
}

export default Nav;