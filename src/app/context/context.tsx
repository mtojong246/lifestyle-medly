'use client';

import { createContext, useState, ReactNode, MouseEvent, Dispatch, SetStateAction } from "react";

interface ContextState {
    pageCount: number,
    nextPage: (e:MouseEvent<HTMLButtonElement>) => void,
    previousPage: (e:MouseEvent<HTMLButtonElement>) => void,
    setPageCount: Dispatch<SetStateAction<number>>,
}

export const GlobalContext = createContext<ContextState>({
    pageCount: 0,
    nextPage: () => {},
    previousPage: () => {},
    setPageCount: () => {},
});

export const GlobalContextProvider = ({ children } : { children: ReactNode }) => {
    const [ pageCount, setPageCount ] = useState(0);
    

    const nextPage = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const count = pageCount + 1;
        setPageCount(count);
    }

    const previousPage = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const count = pageCount - 1;
        setPageCount(count);
    }

    const value = {pageCount, nextPage, previousPage, setPageCount};

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}