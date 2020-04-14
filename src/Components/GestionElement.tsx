import React, { useEffect, useState, useCallback, memo } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import InputAddElement from './InputAddElement';
import DeleteAllElement from './DeleteAllElement';
import ListElement from './ListElement';

const GestionElementComponents = styled.div`
    margin: ${rem(10)};
    border-radius: 12px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

type PropsListObject = {
    name: string;
    number: number;
};

const GestionElement: React.FC = memo(() => {
    const checkLocalStorage = () => {
        try {
            const local = JSON.parse(localStorage.getItem('listData') || '[]');
            if (Array.isArray(local)) {
                return local;
            } else {
                return [];
            }
        } catch (e) {
            return [];
        }
    };

    const [nameObject, setNameObject] = useState<string>('');
    const [listObject, setListObject] = useState<PropsListObject[]>([]);

    useEffect(() => {
        setListObject(checkLocalStorage);
    }, []);

    useEffect(() => {
        if (nameObject !== '') {
            if (listObject.length !== 0) {
                let i = 0;
                listObject.forEach((item, index) => {
                    if (item.name.toLowerCase() === nameObject.toLowerCase()) {
                        let newArray = [...listObject];
                        newArray[index].number = newArray[index].number + 1;
                        setListObject(newArray);
                        i++;
                    } else {
                        if (i === 0) setListObject([...listObject, { name: nameObject, number: 1 }]);
                    }
                });
            } else {
                setListObject([...listObject, { name: nameObject, number: 1 }]);
            }
            setNameObject('');
        }
        localStorage.setItem('listData', JSON.stringify([...listObject]));
    }, [nameObject, listObject]);

    const addNumber = useCallback((evt: any, index: number): void => {
        evt.preventDefault();
        const key = index;
        setListObject(prevItems =>
            prevItems.map((element, index) => {
                if (key === index) {
                    return { name: element.name, number: element.number + 1 };
                }
                return element;
            }),
        );
    }, []);

    const deleteNumber = useCallback((evt: any, index: number, number: number, name: string): void => {
        evt.preventDefault();
        const key = index;
        if (number - 1 !== 0) {
            setListObject(prevItems =>
                prevItems.map((element, index) => {
                    if (key === index) {
                        return { name: element.name, number: element.number - 1 };
                    }
                    return element;
                }),
            );
        } else {
            setListObject(prevItems => prevItems.filter(prevItems => prevItems.name !== name));
        }
    }, []);

    const deleteInList = useCallback((evt: any, name: string): void => {
        evt.preventDefault();
        setListObject(prevItems => prevItems.filter(prevItems => prevItems.name !== name));
    }, []);

    return (
        <GestionElementComponents>
            <Wrapper>
                <InputAddElement setNameObject={setNameObject} />
                <DeleteAllElement setListObject={setListObject} />
            </Wrapper>
            <ListElement
                listObject={listObject}
                addNumber={addNumber}
                deleteNumber={deleteNumber}
                deleteInList={deleteInList}
            />
        </GestionElementComponents>
    );
});

export default GestionElement;
