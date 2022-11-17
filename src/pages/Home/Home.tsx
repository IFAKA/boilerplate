import { Spinner } from "@/components"
import { useData } from "@/context"
import { IContext } from "@/models"
import { urls } from "@/services"
import useSWR from "swr"

const Home = () => {
  const { data, setProp, reset } = useData() as IContext
  const { data: api } = useSWR(urls.base)
  const click = () => setProp({ counter: data.counter + 1 })
  return (
    <>
      <div className="font-bold">Home</div>
      <button onClick={click} className={"block px-4 border w-full"}>
        Clicked {data.counter} times
      </button>
      <button onClick={reset} className={"block px-4 border w-full"}>
        Reset
      </button>
      {api ? (
        <a
          href={api[6]?.homepage}
          className="max-w-xs break-words hover:underline"
        >
          {api[6]?.homepage}
        </a>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default Home
