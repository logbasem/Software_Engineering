//Ticket #13
//Ticket #66
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../css-html/SearchResults.css';
import "../css-html/index.css";

//component reference from Chinedu Imoh at: https://www.telerik.com/blogs/how-to-implement-standard-search-using-react
//this is specifically a component configured to work with express, so should be relatively simple
//to link with backend later

export const SearchResults = () => {
    //const location = useLocation();
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

    /*
    //get search results from searchAllProducts request (see Header.jsx)
    useEffect(() => {
        //extract search results from query parameter
        const searchResultsQuery = new URLSearchParams(location.search).get('results');
        if (searchResultsQuery) {
            //setSearchResults(JSON.parse(decodeURIComponent(searchResultsQuery)));
            console.log(searchResultsQuery);
        }
    }, [location.search]);*/

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
                    <a href='/product'><div key={searchResult.id} className="search-result">
                        <div>{searchResult.name}</div>
                        <div className="product-info">{searchResult.info}</div>
                        <button onClick={() => handleAddToList(searchResult.id)} className="add-to-list-button">
                            <span>+ </span>
                            <span>Add to List</span>
                        </button>
                    </div></a>
                ))}
            </div>
        </div>
    )
}
export default SearchResults;