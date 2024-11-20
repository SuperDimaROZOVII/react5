import React, { useState, useEffect } from "react";

export default function SearchForm({ array, value, onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = onSearch.filter(bat =>
            bat.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}