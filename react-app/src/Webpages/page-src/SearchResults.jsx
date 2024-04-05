//Ticket #13
import React, { useEffect, useState } from "react";

//component reference from Chinedu Imoh at: https://www.telerik.com/blogs/how-to-implement-standard-search-using-react
//this is specifically a component configured to work with express, so should be relatively simple
//to link with backend later
export const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        // Test search results
        const testSearchResults = [
            { id: 1, name: 'Product 1', info: 'Product Info' },
            { id: 2, name: 'Product 2', info: 'Product Info' },
            { id: 3, name: 'Product 3', info: 'Product Info' },
        ];

        setSearchResults(testSearchResults);
    }, []);
    //const [error, setError] = useState(false);
    const handleAddToList = (resultId) => {
        // Handle adding the item to the list
        console.log(`Adding item with ID ${resultId} to list`);
    };

    return (
        <div className="search-results-container">
            <h2>Results:</h2>
            <div className="search-results">
                {searchResults.map((searchResult) => (
                    <div key={searchResult.id} className="search-result">
                        <div>{searchResult.name}</div>
                        <div className="product-info">{searchResult.info}</div>
                        <button onClick={() => handleAddToList(searchResult.id)} className="add-to-list-button">
                            <span>+ </span>
                            <span>Add to List</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SearchResults;