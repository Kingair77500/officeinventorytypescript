import React, { createContext, useState, useMemo } from 'react';

type PropsContext = {
    inputData: { nameObject: string; setNameObject: React.Dispatch<React.SetStateAction<string>> };
};

export const StoreGestionObjectContext = createContext<PropsContext>({} as PropsContext);

type PropsChildren = {
    children: React.ReactNode;
};

export default ({ children }: PropsChildren): JSX.Element => {
    const [nameObject, setNameObject] = useState<string | ''>('');

    const storeGestionObject = useMemo(
        () => ({
            inputData: { nameObject, setNameObject },
        }),
        [nameObject],
    );

    return useMemo(() => {
        return (
            <StoreGestionObjectContext.Provider value={storeGestionObject}>
                {children}
            </StoreGestionObjectContext.Provider>
        );
    }, [storeGestionObject, children]);
};
