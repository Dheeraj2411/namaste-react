import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err=useRouteError()
    console.log(err)
    return(<><h2>Page not found</h2>
             <h3>{err.status}:{err.statusText}</h3>

    </>
    )
}

export default Error