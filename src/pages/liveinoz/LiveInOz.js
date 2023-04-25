import react, {useState ,useEffect}from 'react'
import axios from 'axios'
import LiveInOzItem  from './LiveInOzItem'

function LiveInOz() {
    const [articles, setArticles]= useState([])
    const [contentBeingViewed, setContentBeingViewed] = useState({})

    useEffect(() => {
        axios.get('https://elemental-backend.onrender.com/liveinoz/articles/').then(res => {
            if(res.status == 200){
                console.log(res.data)
                setArticles(res.data)
                setContentBeingViewed(res.data[0]);
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