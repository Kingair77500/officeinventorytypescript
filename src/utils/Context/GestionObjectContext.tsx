import React, { createContext, useState, ReactNode } from 'react';

/*type PropsContext = {
    inputData: (string | undefined | null | React.Dispatch<React.SetStateAction<string>>)[];
    inventory: (PropsListObject[] | React.Dispatch<React.SetStateAction<PropsListObject[]>>)[];
};*/

type PropsContext = {
    inputData: { nameObject: string; setNameObject: React.Dispatch<React.SetStateAction<string>> };
    inventory: {
        listObject: PropsListObject[];
        setListObject: React.Dispatch<React.SetStateAction<PropsListObject[]>>;
    };
};

export const StoreGestionObjectContext = createContext<PropsContext>({} as PropsContext);

type PropsListObject = {
    name: string;
    number: number;
};

type PropsChildren = {
    children: ReactNode;
};

export default ({ children }: PropsChildren): JSX.Element => {
    const [nameObject, setNameObject] = useState<string | ''>('');
    const [listObject, setListObject] = useState<PropsListObject[]>([]);

    const storeGestionObject = {
        inputData: { nameObject, setNameObject },
        inventory: { listObject, setListObject },
    };
    return (
        <StoreGestionObjectContext.Provider value={storeGestionObject}>{children}</StoreGestionObjectContext.Provider>
    );
};
