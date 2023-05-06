import react, {useState ,useEffect}from 'react'
import axios from 'axios'
import LiveInOzItem  from './LiveInOzItem'
import useSWR from 'swr'

function LiveInOz() {
    const [articles, setArticles]= useState([])
    const [contentBeingViewed, setContentBeingViewed] = useState({})

    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error, isLoading } = useSWR('https://elemental-backend.onrender.com/liveinoz/articles/', fetcher)
    
    useEffect(() => {
        if (data !== undefined){
            setArticles(data)
            setContentBeingViewed(data[0])
        }
    }, [data])
    
    const handleClickLink = (content) =>{
        if(content){
            setContentBeingViewed(content)
        }
        console.log('handleClickLink called')
    }

    return (
        <div className="w-full flex flex-col text-center justify-center">
            <div className="flex flex-row">
                <div className="LiveInOzList w-1/4 bg-primaryRed text-sm">
                <ul>
                    {articles.map(eachArticle => {
                        return (
                            <div className="LiveInOzItem flex flex-col cursor-pointer p-2 hover:bg-gray-600 text-white" onClick={(() => handleClickLink(eachArticle))}>
                                <h2> {eachArticle.title}</h2>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="LiveInOzContent flex flex-col w-3/4 bg-gray-200">
                {contentBeingViewed && (
                    <LiveInOzItem content={contentBeingViewed} />
                )}
            </div>
      </div>
    </div>

    )
}

export default LiveInOz