import React, { useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";


function SearchBar2() {
    const [searchTerm, setSearchTerm] = useState("")
    const {  searchPost } = useContext(PostContext);
    const handleSearch = () => {
        console.log("ya clicked the search button", searchTerm)
        searchPost(searchTerm)
        document.querySelector("#search").value = "";
    }
    return (<>
        <input className="mt-5" type="text" id="search" placeholder="Enter your search phrase here..." onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
    </>)
}
export default SearchBar2;