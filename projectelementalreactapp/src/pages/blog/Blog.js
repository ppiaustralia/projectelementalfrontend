import React, { Component } from "react"
import s from "./Blog.module.css"
import NewsList from "./newsList/NewsList"
import Sidebar from "./sidebar/Sidebar"

function Blog() {
    //contain all the state. lets think about redux for the blog
    return (
        <div className={s.blogContainer}>
            <div className={s.title}>
                <h2>Welcome to PPIA Blog</h2>
            </div>
            <div className={s.blogContent}>
                <div className={s.blogSidebar}>
                    <Sidebar />
                </div>
                <div className={s.blogNews}>
                    <NewsList />
                </div>
            </div>
        </div>
    )
}

export default Blog
