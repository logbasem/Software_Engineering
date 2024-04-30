//Ticket #13
//Ticket #66
//Ticket #65 - Add to List Button

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
    const [buttonStates, setButtonStates] = useState([]);

    useEffect(() => {
        // Test search results
        const testSearchResults = [
            { id: 1, name: 'Product 1', info: 'Product Info' },
            { id: 2, name: 'Product 2', info: 'Product Info' },
            { id: 3, name: 'Product 3', info: 'Product Info' },
        ];

        setSearchResults(testSearchResults);
    }, []);

    //TODO: Get search results from backend
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

    //initialize button states for each search result
    useEffect(() => {
        const initialState = {};
        searchResults.forEach((searchResult) => {
            initialState[searchResult.id] = false;
        });
        setButtonStates(initialState);
    }, []);

    //handle adding item to list
    const handleAddToList = (resultId) => {
        //TODO: Implement adding item to list (need a backend representation of the list first)
        console.log(`Adding item with ID ${resultId} to list`);
        
        //change button text to 'Added' and disable button after clicked
        const newButtonStates = { ...buttonStates };
        newButtonStates[resultId] = true;
        setButtonStates(newButtonStates);
    };

    return (
        <div className="search-results-container">
            <h2>Results:</h2>
            <div className="search-results">
                {searchResults.map((searchResult) => (
                    <div key={searchResult.id} className="search-result">
                    <a href='/product'>
                        <div className="product-name">{searchResult.name}</div>
                        <div className="product-info">{searchResult.info}</div>
                    </a>
                        <button onClick={() => handleAddToList(searchResult.id)} 
                        className={`add-to-list-button ${buttonStates[searchResult.id] ? 'gray-button' : ''}`}
                        disabled={buttonStates[searchResult.id]}>
                            <span>+ </span>
                            <span>{buttonStates[searchResult.id] ? 'Added' : 'Add to List'}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SearchResults;