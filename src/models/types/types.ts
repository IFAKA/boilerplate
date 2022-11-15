export interface IChild {
    children: React.ReactNode
}

export type TData = number

export interface IContext {
    data: TData
    setValue: (data: number) => void
    reset: () => void
}