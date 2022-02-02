import React from "react"
import s from "./Counter.module.css"
function Counter(props) {
    const { currIdx, length, handleIdxChange } = props
    //generate numbers from 0 to fill in counter bar
    let counterArr = [...Array(length).keys()]
    return (
        <div className={s.counterCont}>
            {currIdx == 0 ? (
                <></>
            ) : (
                <div
                    className={s.counterItem}
                    onClick={() => handleIdxChange(currIdx - 1)}
                >
                    Prev
                </div>
            )}

            {counterArr.map((item) => {
                return (
                    <div
                        className={`${s.counterItem} ${
                            item == currIdx ? `${s.active}` : ""
                        }`}
                        onClick={() => handleIdxChange(item)}
                    >
                        {item}
                    </div>
                )
            })}
            {currIdx == length - 1 ? (
                <></>
            ) : (
                <div
                    className={s.counterItem}
                    onClick={() => handleIdxChange(currIdx + 1)}
                >
                    Next
                </div>
            )}
        </div>
    )
}

export default Counter
