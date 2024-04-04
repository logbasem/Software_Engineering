import React, { useState } from "react";
import { useHistory } from "react-router-dom"

//component reference from Chinedu Imoh at: https://www.telerik.com/blogs/how-to-implement-standard-search-using-react
//this is specifically a component configured to work with express, so should be relatively simple
//to link with backend later
export const SearchInput = () =>
{
    const [search, setSearch] = useState("");
    const history = useHistory();
    return (
        <div>
            <InputGroup>
                <Input
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                    type="search"
                    placeholder="Search product"
                />
                <InputRightElement>
                    <div>
                        <button onClick={() => history.push(`/search?query=${search}`)} >Search</button>
                    </div>
                </InputRightElement>
            </InputGroup>
        </div>
    )
}
export default SearchInput;