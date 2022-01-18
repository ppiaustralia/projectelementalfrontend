import React from "react"
import Filters from "./filters/Filters"
import RecentPost from "./recentPost/RecentPost"
import Search from "./Search"
import s from "./Sidebar.module.css"

function Sidebar() {
    return (
        <div className={s.sidebarCont}>
            <Search />
            <RecentPost />
            <Filters />
        </div>
    )
}
export default Sidebar
