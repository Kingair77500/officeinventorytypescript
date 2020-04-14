import React, { memo } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Buttons = styled(Button)`
    margin-left: ${rem(20)};
    margin-right: ${rem(20)};
`;

type PropsListObject = {
    name: string;
    number: number;
};

type PropsChildren = {
    index: number;
    name: string;
    number: number;
    addNumber: (evt: any, index: number) => void;
    deleteNumber: (evt: any, index: number, number: number, name: string) => void;
    deleteInList: (evt: any, name: string) => void;
};

const DisplayElement: React.FC<PropsChildren> = memo(
    ({ index, name, number, addNumber, deleteNumber, deleteInList }) => {
        return (
            <tr>
                {console.log(name)}
                <td>{index}</td>
                <td>{name}</td>
                <td>
                    <Buttons variant="success" onClick={(evt: any) => deleteNumber(evt, index, number, name)}>
                        -
                    </Buttons>
                    {number}
                    <Buttons variant="warning" onClick={(evt: any) => addNumber(evt, index)}>
                        +
                    </Buttons>
                </td>
                <td>
                    <Button variant="outline-danger" onClick={(evt: any) => deleteInList(evt, name)}>
                        Supprimer
                    </Button>
                </td>
            </tr>
        );
    },
);

export default DisplayElement;
