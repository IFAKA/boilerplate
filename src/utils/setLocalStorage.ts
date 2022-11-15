import { TData } from "@/models"

export const setLocalStorage = (data: TData) =>
  localStorage.setItem("data", JSON.stringify(data))
