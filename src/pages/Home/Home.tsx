import { Spinner } from "@/components"
import { useData } from "@/context"
import { IContext } from "@/models"
import { urls } from "@/services"
import useSWR from "swr"

const Home = () => {
  const { data, setValue, reset } = useData() as IContext
  const { data: api } = useSWR(urls.base)
  const click = () => setValue(1)
  return (
    <>
      <div className="font-bold">Home</div>
      <button onClick={click} className={"block px-4 border w-full"}>
        Clicked {data} times
      </button>
      <button onClick={reset} className={"block px-4 border w-full"}>
        Reset
      </button>
      {api ? (
        <div className="max-w-xs break-words">{api[5]?.homepage}</div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default Home
