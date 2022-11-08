import { Send } from '@material-ui/icons';
import styled from 'styled-components';


const Conntainer = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputConntainer = styled.div`
    width: 50%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    padding: 0 20px;
    flex-grow: 8;
    letter-spacing: 1px;
    border: none;
    outline: none;
`;

const Button = styled.button`
    flex-grow: 1;
    border:none;
    background-color: teal;
    color:white;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #055858;
    }
`;


const Newsletter = () => {
    
    return ( 
        <Conntainer>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputConntainer>
                <Input placeholder='Your email..'/>
                <Button>
                    <Send/>
                </Button>
            </InputConntainer>
        </Conntainer> );
}
 
export default Newsletter;