import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: teal;
    color: #f1f0f0;
    font-size: 15px;
    font-weight: 500;
    user-select: none;
`;

const Announcement = () => {
    return ( 
        <Container>
            Super Deal! Free Shiping on Orders Over $50    
        </Container>
     );
}
 
export default Announcement;