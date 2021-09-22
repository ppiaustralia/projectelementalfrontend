import styles from "./Branch.module.css"

function Branch(data) {
    console.log(data)
    //destructure data
    //one branch each chapter
    const {
        ppia_id,
        name,
        president,
        state,
        level,
        image,
        parent,
        details,
        is_deleted,
        others,
    } = data.data[0]

    return (
        <div className={`${styles["chapter"]}`}>
            <h2>Chapter: {name} </h2>
            <p>Indonesian Student Association of New South Wales</p>
            <p>President: {president}</p>
            <p>Parent: {parent}</p>
            <p>State: {state}</p>
        </div>
    )
}

export default Branch
