import axios from "axios"
const fetcher = (url: string) => axios.get(url).then(r => r.data)
export default fetcher