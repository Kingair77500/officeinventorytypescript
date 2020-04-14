import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Heigth = styled.div`
    align-self: flex-end;
    height: ${rem(35)};
`;

const ButtonDelete = styled(Button)`
    max-width: ${rem(150)};
    border-radius: ${rem(5)};
    font-size: 1em;
    color: #b71c1c;
    background-color: white;
    border: 2px solid #b71c1c;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #b71c1c;
        border: 2px solid #b71c1c;
    }
`;

type PropsListObject = {
    name: string;
    number: number;
};

type PropsInputAddElement = {
    setListObject: React.Dispatch<React.SetStateAction<PropsListObject[]>>;
};

const DeleteAllElement: React.FC<PropsInputAddElement> = ({ setListObject }) => {
    const deleteAll = (evt: any): void => {
        evt.preventDefault();
        setListObject([]);
    };
    return (
        <Heigth>
            <ButtonDelete variant="outline-danger" onClick={(evt: any) => deleteAll(evt)}>
                Tout supprimer
            </ButtonDelete>
        </Heigth>
    );
};

export default DeleteAllElement;
