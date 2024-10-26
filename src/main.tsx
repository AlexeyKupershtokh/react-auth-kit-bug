import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from "react-auth-kit";
import {DebugUser} from "./DebugUser.tsx";
import {Auther} from "./Auther.tsx";

const store = createStore({
    debug: true,
    authName: '_auth',
    authType: 'localstorage',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider store={store}>
          <>
                <Auther />
                <DebugUser n="external"/>
          </>
      </AuthProvider>
  </StrictMode>,
)
