import React from 'react';
import styled from 'styled-components';

const Positioner = styled.div`
    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-50%. -50%);
`;


const ShadowedBox = styled.div`
    width: 500px;
    
`;

const LogoWrapper = styled.div`
    background-color: #2DB400;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    color: white;
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
    font-family: 'Rajdhani';
`;

const Contents = styled.div`
    background: white;
    font-size: 2.4rem;
    letter-spacing: 5px;
    height: auto;
`;


const AuthWrapper = ({children}) => {
    return ( 
    <Positioner>
        <ShadowedBox>
            <LogoWrapper>
                <Logo>Web Chat</Logo>
            </LogoWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
    );
}

export default AuthWrapper;