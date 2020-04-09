import React, { useContext, useEffect } from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { StoreGestionObjectContext } from '../utils/Context/GestionObjectContext';

const ListElement: React.FC = () => {
    const {
        inputData: { nameObject, setNameObject },
        inventory: { listObject, setListObject },
    } = useContext(StoreGestionObjectContext);

    useEffect(() => {
        if (nameObject === '') {
            console.log(listObject);
        } else {
            setListObject([...listObject, { name: nameObject, number: 1 }]);
        }
        setNameObject('');
    }, [nameObject]);

    console.log(listObject);

    return <div></div>;
};

export default ListElement;
