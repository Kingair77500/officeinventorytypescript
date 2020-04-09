import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { rem } from 'polished';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import GestionElement from './Components/GestionElement';

import StoreProvider from './utils/Context/GestionObjectContext';

const AppComponents = styled.div`
    margin: ${rem(15)} ${rem(25)} ${rem(0)} ${rem(25)};
`;

function App(): JSX.Element {
    return (
        <AppComponents>
            <Header />
            <StoreProvider>
                <GestionElement />
            </StoreProvider>
        </AppComponents>
    );
}

export default App;
