import React, {useState ,useEffect} from 'react'
import axios from 'axios'
import LiveInOzItem  from './LiveInOzItem'
import useSWR from 'swr'
import Loading from "../../components/Loading"

function LiveInOz() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, isLoading } = useSWR('https://elemental-backend.onrender.com/liveinoz/articles/', fetcher)

    useEffect(() => {
        if (data !== undefined){
            const uniqueCategories = [...new Set(data.map(content => content.category))];
            setSelectedCategory(uniqueCategories[0]);
        }
    }, [data])

    const handleClickCategory = category => {
        setSelectedCategory(category);
        setSelectedContent(null);
        setCurrentPage(1);
    }

    const handleClickTitle = content => {
        setSelectedContent(content);
    }

    if (!data) {
        return <Loading />;
    }

    const uniqueCategories = [...new Set(data.map(content => content.category))];
    const contents = data.filter(content => content.category === selectedCategory);
    const totalPages = Math.ceil(contents.length / itemsPerPage);

    return (
        <div className="w-full flex flex-col text-center justify-center">
            <div className="flex flex-row">
                <div className="LiveInOzList w-1/4 text-sm overflow-auto min-h-[125vh] max-h-[125vh]">
                    <ul>
                        {uniqueCategories.map((category, i) => {
                            return (
                                <li key={i} onClick={() => handleClickCategory(category)} className="cursor-pointer p-4 m-4 hover:bg-gray-200 text-left">
                                    {category}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="LiveInOzContent flex flex-col w-3/4 border-l-2 overflow-auto min-h-[125vh] max-h-[125vh]">
                {selectedContent ? (
                        <LiveInOzItem content={selectedContent} />
                    ) : (
                        <div>
                            <ul>
                                {contents
                                    .slice(
                                        (currentPage - 1) * itemsPerPage,
                                        currentPage * itemsPerPage
                                    )
                                    .map((content, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleClickTitle(content)}
                                            className='cursor-pointer p-4 border-b-2 border-gray-400 m-4 hover:text-red-500 text-xs'
                                        >
                                            <h2 className='m-2 text-left'>
                                                {content.title}
                                            </h2>
                                            <h3 className='overflow-hidden overflow-ellipsis text-left'>
                                                {decodeHTML(trimContent(content.content.replace(/<\/?[^>]+(>|$)/g, '').replace(/^\s*(\d+|\w)\.\s*/, '').trim(), 200))}
                                            </h3>
                                        </div>
                                    ))}
                            </ul>
                            {!selectedContent && totalPages > 1 && (
                                <div>
                                    {currentPage > 1 && (
                                        <button
                                            onClick={() =>
                                                setCurrentPage((page) =>
                                                    Math.max(page - 1, 1)
                                                )
                                            }
                                            className="bg-white text-primaryRed border border-red-100 rounded m-4 hover:text-black"
                                        >
                                            Previous
                                        </button>
                                    )}
                                    {currentPage < totalPages && (
                                        <button
                                            onClick={() =>
                                                setCurrentPage((page) =>
                                                    Math.min(page + 1, totalPages)
                                                )
                                            }
                                            className="bg-white text-primaryRed border border-red-100 rounded m-4 hover:text-black"
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function decodeHTML(html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function trimContent(content, length) {
    if (content.length <= length) return content;
    let trimmedContent = content.substr(0, length);
    trimmedContent = trimmedContent.substr(0, Math.min(trimmedContent.length, Math.max(trimmedContent.lastIndexOf(" "), trimmedContent.lastIndexOf(".") - 1)));
    return trimmedContent + "...";
}

export default LiveInOz
