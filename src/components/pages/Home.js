import React from 'react'
import Iframe from 'react-iframe'

export default function Home() {
    return (
        <div className="iframe">
             <Iframe url="https://datastudio.google.com/embed/reporting/73559fd4-3d23-4a2f-9bf2-38e7b0f90113/page/2edeC"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}/>
        </div>
    )
}
