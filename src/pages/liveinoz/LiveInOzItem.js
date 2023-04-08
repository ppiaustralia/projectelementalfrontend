import react from 'react'
import parse from 'html-react-parser'

function LiveInOzItem(props){
    console.log(props)
    const {title, content}= props.content
    return(
        <div className="LiveInOzItemContainer">
            <h2> {title}</h2>
            <div className="flex flex-col">
                {parse(content)}
            </div>

        </div>
    )
}

export default LiveInOzItem