import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import TableObject from './TableObject';

const ListComponents = styled.div``;

const Title = styled.h2`
    margin-top: ${rem(10)};
    font-size: ${rem(25)};
`;

type PropsListObject = {
    name: string;
    number: number;
};

type PropsListElement = {
    listObject: PropsListObject[];
    addNumber: (evt: any, index: number) => void;
    deleteNumber: (evt: any, index: number, number: number, name: string) => void;
    deleteInList: (evt: any, name: string) => void;
};

const ListElement: React.FC<PropsListElement> = ({
    listObject,
    addNumber,
    deleteNumber,
    deleteInList,
}) => {
    return (
        <ListComponents>
            <Title>Liste d'objects:</Title>
            <TableObject
                listObject={listObject}
                addNumber={addNumber}
                deleteNumber={deleteNumber}
                deleteInList={deleteInList}
            />
        </ListComponents>
    );
};

export default ListElement;
