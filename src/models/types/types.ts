export interface IChild {
  children: React.ReactNode
}

export interface Data {
  counter: number
}

export type Partial<T> = {
  [P in keyof T]?: T[P]
}
export interface IContext {
  data: Data
  setProp: (obj: Partial<Data>) => void
  reset: () => void
}
