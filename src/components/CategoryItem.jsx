import styled from 'styled-components';


const Container = styled.div`
    flex-grow: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;

`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background: rgba(0,0,0, 0.07);
`;
const Title = styled.h1`
    color: #eee;
    letter-spacing: 1px;
    user-select: none;
`;
const Button = styled.button`
    text-transform: uppercase;
    background-color: transparent;
    padding: 5px 10px;
    color: white;
    letter-spacing: 1px;
    border-radius: 5px;

    font-size: 16px;
    cursor: pointer;
`;


const CategoryItem = ({title, img}) => {
    return ( 
        <Container>
            <Image src={img}/>
            <Info>
                <Title>{title}</Title>
                <Button>shop now</Button>
            </Info>
        </Container>
     );
}
 
export default CategoryItem;