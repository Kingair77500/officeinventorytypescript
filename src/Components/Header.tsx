import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

const HeaderComponent = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-size: ${rem(25)};
`;

const Header: React.FC = () => (
    <HeaderComponent>
        <Title>Inventaire De Bureau</Title>
    </HeaderComponent>
);

export default Header;
