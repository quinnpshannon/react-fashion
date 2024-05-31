import styled from 'styled-components';
import Nav from './Nav';
/*
This is the design for the Header of the fashion blog.
First, we need a Tomato Colored big letters, and a subtitle in black
*/

// Styled Components
const BlogTitle = styled.h1`
`;
const BlogSubTitle = styled.h2`
`;

const HeaderBody = styled.header`
    display: flex;
    justify-content: start;
    flex-direction: column;
`;
function Header() {
    return (
        <HeaderBody>
            <BlogTitle>Sartre's List</BlogTitle>
            <BlogSubTitle>Better-Dressed People</BlogSubTitle>
            <Nav />
        </HeaderBody>
    );
}

export default Header;