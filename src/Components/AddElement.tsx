import React, { useContext } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';

import { StoreGestionObjectContext } from '../utils/Context/GestionObjectContext';

const FormAddElement = styled.form`
    display: flex;
    flex-direction: column;
`;

const InputButton = styled.div`
    display: flex;
    flex-direction: row;
`;

const DecorationInput = styled.div`
    margin-top: ${rem(10)};
    max-width: ${rem(200)};
    border-radius: ${rem(5)};
    border: 1px solid grey;
`;

const InputElement = styled.input`
    border: none;
    max-width: ${rem(180)};
`;

const ButtonAdd = styled.button`
    margin-top: ${rem(10)};
    margin-left: ${rem(10)};
    max-width: ${rem(150)};
    border-radius: ${rem(5)};
    font-size: 1em;
    color: white;
    background-color: #1565c0;
    border: 2px solid #1565c0;
    cursor: pointer;

    &:hover {
        background-color: #003c8f;
        border: 2px solid #003c8f;
    }
`;

const InputAddElement: React.FC = () => {
    const {
        inputData: { setNameObject },
    } = useContext(StoreGestionObjectContext);

    const handleSubmit = (evt: any): void => {
        evt.preventDefault();
        setNameObject(evt.target.username.value);
    };

    return (
        <FormAddElement onSubmit={evt => handleSubmit(evt)}>
            <label>Nom de l'objet:</label>
            <InputButton>
                <DecorationInput>
                    <InputElement type="text" name="username" placeholder="Ex: Stylo" />
                </DecorationInput>
                <ButtonAdd>Ajouter</ButtonAdd>
            </InputButton>
        </FormAddElement>
    );
};

export default InputAddElement;
