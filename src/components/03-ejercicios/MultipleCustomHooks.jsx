import { useFetch } from "../../hooks/useFetch"


export const MultipleCustomHooks = () => {
    const URL = 'https://www.breakingbadapi.com/api/quotes/1';
    const {data, error, isLoading,state } = useFetch(URL)
    console.log(state);
  return (
    <div className="mt-4">
        <h3>Multiple Custom Hooks</h3>
    </div>
  )
}
