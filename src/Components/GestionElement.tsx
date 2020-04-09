import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import InputAddElement from './AddElement';
import DeleteAllElement from './DeleteAllElement';
import ListElement from './ListElement';

const GestionElementComponents = styled.div`
    margin: ${rem(10)};
    border-radius: 12px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row,
    justify-content: space-between;
`;

const GestionElement: React.FC = () => {
    return (
        <GestionElementComponents>
            <Wrapper>
                <InputAddElement />
                <DeleteAllElement />
            </Wrapper>
            <ListElement />
        </GestionElementComponents>
    );
};

export default GestionElement;
