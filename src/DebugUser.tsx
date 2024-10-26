import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {useState} from "react";

export const DebugUser = ({n}) => {
    const [state, changeState] = useState<Date>(new Date());
    const user = useAuthUser()
    console.log('Inside DebugToken, user: ', n, user);
    return (
        <div>
            {n} {user?.id || "null"} {JSON.stringify(user)}
            <button onClick={() => changeState(new Date())}>REFRESH {state.getMilliseconds()}</button>
        </div>
    );
}