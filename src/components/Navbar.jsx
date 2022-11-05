import React from "react";
import styled from 'styled-components';

import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import Badge from '@mui/material/Badge';


const Navbar = () => {

    const Container = styled.div`
        height: 60px;
   
    `;

    const Wrapper = styled.div`
          display: flex;
          justify-content: space-between;
          /* align-items: stretch; */
          padding: 10px 20px;

    `;


    const Left = styled.div`
        flex-grow: 1;
        display: flex;
        align-items: center;
        /* background-color: cyan; */
        `;
    
    const Language = styled.span`
        font-style: 14px;
        cursor: pointer;  
        `;

    const SearchContainer = styled.div`
        display: flex;
        align-items: center;
        border: .7px solid lightgrey;
        margin-left: 25px;
        padding: 5px;
    `;

    const Input = styled.input`
            width:80%;
            outline:none;
            border:none;
        `;

    const Center = styled.div`
            flex-grow: 1;
        
    
            `;

    const Logo = styled.h1`
            font-weight: bold;
            `;

    const Right = styled.div`
            flex-grow: 1;
            display: flex;
            justify-content: end;
            align-items: center;
        
        `;

    const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        text-transform: uppercase;
    ` 

    
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/> 
                       <Search style={{color:'gray', fontSize:'18px'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        SZYMULO
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>register</MenuItem>
                    <MenuItem>sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                          <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
     );
}
 
export default Navbar;