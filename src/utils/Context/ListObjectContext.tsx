import React, { createContext, useState, useMemo, memo } from 'react';

type PropsListObject = {
    name: string;
    number: number;
};

type PropsContext = {
    inventory: {
        listObject: PropsListObject[];
        setListObject: React.Dispatch<React.SetStateAction<PropsListObject[]>>;
    };
};

export const ListObjectContext = createContext<PropsContext>({} as PropsContext);

type PropsChildren = {
    children: React.ReactNode;
};

const ListObjectProvider = memo(
    ({ children }: PropsChildren): JSX.Element => {
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

        const [listObject, setListObject] = useState<PropsListObject[]>(checkLocalStorage() || []);

        const listObjectData = useMemo(
            () => ({
                inventory: { listObject, setListObject },
            }),
            [listObject],
        );

        return useMemo(() => {
            return <ListObjectContext.Provider value={listObjectData}>{children}</ListObjectContext.Provider>;
        }, [listObjectData, children]);
    },
);

export default ListObjectProvider;
