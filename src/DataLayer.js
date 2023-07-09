import { createContext,useContext,useReducer } from "react";

// create a context object
export const DataLayerContext=createContext();

// this is the main data layer which will be exported to index.js
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children }
    </DataLayerContext.Provider>
)

// to use the data layer context we export it with useContext hook
export const useDataLayerValue = () => useContext(DataLayerContext);