import React,{useContext,createContext} from "react"
export const SearchContext = createContext();

const SerachContextProvider = ({children})=>{
    const getvalue = (name)=>{
       console.log(name)
      } 
    const value={
        getvalue,
    }

    return(
        <SearchContext.Provider vlaue={value} >
            {
                children
            }
        </SearchContext.Provider>
    )
}
export default SerachContextProvider;