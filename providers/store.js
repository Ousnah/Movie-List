import { createContext, useEffect } from "react";

export const StoreContext = createContext()

export function StoreProvider(props) {
    const [user, setUser] = useState(null)

    useEffect(() => {

        setUser ({
            id:1,
            fistname: "Doe",
            lastname: "john"
        })
    })
}
const StoreContext = createContest()

function StoreProvider () {
    return{
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    }
}