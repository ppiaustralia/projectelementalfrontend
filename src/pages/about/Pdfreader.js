import React, { useState } from "react"
import { Document, Page } from "react-pdf"
import styled from "styled-components"

const StyledSection = styled.section`
    margin: auto auto 0 auto;
    width: 50%;

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    .column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
    }
    .double-column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 3;
    }
`

export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1) //setting 1 to show first page

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
        setPageNumber(1)
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset)
    }

    function previousPage() {
        changePage(-1)
    }

    function nextPage() {
        changePage(1)
    }

    const { pdf } = props

    return (
        <StyledSection>
            <div className="wrapper">
                <div className="row">
                    <div className="column"></div>
                    <div className="double-column">
                        <h1>AD / ART</h1>
                        <Document
                            file={pdf}
                            options={{ workerSrc: "/pdf.worker.js" }}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>

                    </div>
                </div>
            </div>
        </StyledSection>
    )
}
