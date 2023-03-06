import React from "react"
import s from "./Search.module.css"

function Search() {
    return (
        <div className={s.searchCont}>
            <p className={s.searchTitle}>
                <strong>Search</strong>
            </p>{" "}
            <form action="/" method="get" className={s.searchForm}>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                    className={s.newsSearchBar}
                />
                <button type="submit" className={s.searchButton}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default Search
