import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const Title = styled(Link)`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

const AuthContent = () => (
    <div>
        <Title to ="/nextpage/HongGilDong">Login</Title>
        
    </div>
);

export default AuthContent;