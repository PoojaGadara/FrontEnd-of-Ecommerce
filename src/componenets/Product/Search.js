import React, { Fragment, useState } from 'react'
import { createBrowserHistory } from "history";
import './Search.css'

const Search = () => {

    let history = createBrowserHistory();
    const [keyword, setKeyword] = useState("")

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/products/${keyword}`);
        } else {
            history.push("/products")
        }
    }
    return (
        <Fragment>
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a Product....."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <input type="submit" value="search" />
            </form>
        </Fragment>
    )
}
export default Search