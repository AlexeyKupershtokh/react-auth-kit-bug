import useSignIn from "react-auth-kit/hooks/useSignIn";
import {useEffect} from "react";
import {SignInActionPayload, signInFunctionParams} from "react-auth-kit";
import {DebugUser} from "./DebugUser.tsx";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

interface UserState {
    id: string|null,
    username: string|null,
}

const handle = async (
    signIn: (signInConfig: signInFunctionParams<UserState>) => boolean
) => {
    console.log("before signing in")

    const authConfig: SignInActionPayload<UserState> = {
        auth: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYmFja2VuZCJdLCJleHAiOjE3MzAxMjU4NzMsImh0dHBzOi8vZ2xhbWRhbmNlLnJ1L2p3dC9jbGFpbXMiOnsieC1nbGFtZGFuY2UtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtZ2xhbWRhbmNlLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWdsYW1kYW5jZS11c2VyLWlkIjoiMjI3NWZhMTQtOGUxMC00OWY2LTllMzUtZjA2ZDQyZTBmMTY2IiwieC1nbGFtZGFuY2UtdXNlci1pcy1hbm9ueW1vdXMiOiJmYWxzZSJ9LCJpYXQiOjE3Mjk4NjY2NzMsImlzcyI6ImF1dGguc3RhZ2luZy5nbGFtZGFuY2UucnUiLCJqdGkiOiJlZDczZTY5ZS1kZGI1LTQwNTctOWVhOS03NTM3NmRiNzEyM2YiLCJuYmYiOjE3Mjk4NjY2NzMsInN1YiI6IjIyNzVmYTE0LThlMTAtNDlmNi05ZTM1LWYwNmQ0MmUwZjE2NiJ9.EcjnqTiC-BZHlTkMWcgXWPFMx9YLBfvq_x_nFacUm5Q",
            type: 'Bearer',
        },
        userState: {
            id: "2275fa14-8e10-49f6-9e35-f06d42e0f166",
            username: "Alexey K",
        },
    };

    console.log("authConfig", authConfig)

    const result = signIn(authConfig)

    console.log("handle result", result)
}

export const Auther = () => {
    const signIn = useSignIn<UserState>()
    const user = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    useEffect(() => {
        setTimeout(() => {handle(signIn).then()}, 3000)
    }, [])

    return <>
            <div>{JSON.stringify(user)}</div>
            <div>{JSON.stringify(isAuthenticated)}</div>
            <DebugUser n="internal"/>
        </>;
}