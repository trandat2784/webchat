import { createContext } from "react";

const AppContext = createContext()
function AppContextProvider(props) {
    const value ={}
    return (
       <AppContext.Provider value={value}>
          {props.children}
       </AppContext.Provider>
      );
}

export default AppContextProvider;