import react, {useState ,useEffect}from 'react'
import axios from 'axios'
import LiveInOzItem  from './LiveInOzItem'
import Loading from "../../components/Loading"

function LiveInOz() {
    const [articles, setArticles]= useState([])
    const [contentBeingViewed, setContentBeingViewed] = useState({})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://elemental-backend.onrender.com/liveinoz/articles/').then(res => {
            if(res.status === 200){
                console.log(res.data)
                setArticles(res.data)
                setContentBeingViewed(res.data[0])
                setCategories([...new Set(res.data.map(article => article.category))])
            }
        }).catch(err => {
            console.error(err.message)
        })
    },[])

    const handleClickLink = (content) =>{
        if(content){
            setContentBeingViewed(content)
        }
        console.log('handleClickLink called')
    }

    if (Object.keys(articles).length === 0) {
        return <Loading />;
      }

    return (
        <div className="w-full flex flex-col text-center justify-center">
            <div className="flex flex-row">
                <div className="LiveInOzList w-1/4 text-sm overflow-auto max-h-[75vh]">
                <ul>
                    {categories.map(category => {
                        return (
                            <div key={category} className="mb-4">
                            <h2 className="text-lg font-bold p-2 text-left">{category}</h2>
                            {articles.filter(article => article.category === category).map(eachArticle => (
                                <div className="LiveInOzItem flex flex-col cursor-pointer border p-2 hover:bg-gray-600 text-xs" 
                                    onClick={() => handleClickLink(eachArticle)}
                                    key={eachArticle.liveinoz_id}>
                                <h3 className="m-2 text-left"> {eachArticle.title}</h3>
                                </div>
                            ))}
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div className="LiveInOzContent flex flex-col w-3/4 overflow-auto max-h-[75vh]">
                {contentBeingViewed && (
                    <LiveInOzItem content={contentBeingViewed} />
                )}
            </div>
      </div>
    </div>

    )
}

export default LiveInOz