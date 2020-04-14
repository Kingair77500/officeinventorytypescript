import React, { useCallback, memo } from 'react';
import Table from 'react-bootstrap/Table';
import DisplayElement from './DisplayElement';

type PropsListObject = {
    name: string;
    number: number;
};

type PropsTable = {
    listObject: PropsListObject[];
    addNumber: (evt: any, index: number) => void;
    deleteNumber: (evt: any, index: number, number: number, name: string) => void;
    deleteInList: (evt: any, name: string) => void;
};

const EmptyList: React.FC = () => {
    return (
        <tbody>
            <tr>
                <td></td>
                <td colSpan={3}>Votre liste objets est vide</td>
            </tr>
        </tbody>
    );
};

const TabElement: React.FC<PropsTable> = memo(({ listObject, addNumber, deleteNumber, deleteInList }) => {
    const increment = useCallback((evt, index) => addNumber(evt, index), [addNumber]);
    const decrement = useCallback((evt, index, number, name) => deleteNumber(evt, index, number, name), [deleteNumber]);
    const deleteElementInList = useCallback((evt, name) => deleteInList(evt, name), [deleteInList]);

    return (
        <tbody>
            {listObject.map((item, index) => {
                return (
                    <DisplayElement
                        key={item.name}
                        index={index}
                        name={item.name}
                        number={item.number}
                        addNumber={increment}
                        deleteNumber={decrement}
                        deleteInList={deleteElementInList}
                    />
                );
            })}
        </tbody>
    );
});

const CheckObject: React.FC<PropsTable> = ({ listObject, addNumber, deleteNumber, deleteInList }) => {
    if (listObject.length === 0) {
        return <EmptyList />;
    } else {
        return (
            <TabElement
                listObject={listObject}
                addNumber={addNumber}
                deleteNumber={deleteNumber}
                deleteInList={deleteInList}
            />
        );
    }
};

const TableObject: React.FC<PropsTable> = ({ listObject, addNumber, deleteNumber, deleteInList }) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Quantité</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <CheckObject
                listObject={listObject}
                addNumber={addNumber}
                deleteNumber={deleteNumber}
                deleteInList={deleteInList}
            />
        </Table>
    );
};

export default TableObject;
