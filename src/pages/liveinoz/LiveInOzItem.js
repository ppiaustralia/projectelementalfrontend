import react from 'react'
import parse from 'html-react-parser'
import Loading from "../../components/Loading"

function LiveInOzItem(props){
    console.log(props)
    const {title, content}= props.content

    return(
        <div className="LiveInOzItemContainer ml-16">
            <div className=" mx-auto text-center p-4">
                <h2>{title}</h2>
            </div>
            <div className="flex flex-col mx-auto text-center items-center p-4">
                {typeof content === 'string' ? parse(content) :  <Loading />}
            </div>
        </div>
    )
}

export default LiveInOzItem