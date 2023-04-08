import react, {useState ,useEffect}from 'react'
import axios from 'axios'
import LiveInOzItem  from './LiveInOzItem'

function LiveInOz() {
    const [articles, setArticles]= useState([])
    const [viewingContent, setViewingContent]= useState(false)
    const [contentBeingViewed, setContentBeingViewed] = useState({})

    useEffect(() => {
        axios.get('https://elemental-backend.onrender.com/liveinoz/articles/').then(res => {
            if(res.status == 200){
                console.log(res.data)
                setArticles(res.data)
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
        setViewingContent(!viewingContent)
    }

    return (
        <div className="flex flex-col w-full text-center bg-blue-200 justify-center ">
            {!viewingContent ?

                <div className="LiveInOzList">
                    <ul>
                        {articles.map(eachArticle => {
                            return (
                                <div className="LiveInOzItem flex flex-col bg-green-200 mb-2" onClick={(() => handleClickLink(eachArticle))}>
                                    <h2> {eachArticle.title}</h2>
                                </div>
                            )
                        })}
                    </ul>
                </div>

                :

                <div onClick={handleClickLink}>
                    <LiveInOzItem content={contentBeingViewed} />
                </div>
            }
        </div>

    )
}

export default LiveInOz