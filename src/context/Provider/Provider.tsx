import { emptyData, IChild, IContext } from "@/models";
import { cleanLocalStorage, setLocalStorage } from "@/utils";
import { createContext, useContext, useState } from "react";

const Context = createContext<IContext | null>(null)

export const useData = () => useContext(Context)

const initialState = localStorage.getItem("data")
    ? +JSON.parse(localStorage.getItem("data") as string)
    : emptyData

export const Provider = ({ children }: IChild) => {
    const [data, setData] = useState(initialState)

    const setValue = (value: number) => {
        setLocalStorage(data + value)
        setData(prev => prev + value)
    }
    const reset = () => {
        cleanLocalStorage()
        setData(emptyData)
    }

    return (
        <Context.Provider value={{
            data,
            setValue,
            reset,
        }}>
            {children}
        </Context.Provider>
    )
}