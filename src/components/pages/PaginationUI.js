import React from 'react'
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'

export default function PaginationUI() {

    return (
        <div>
            <Button variant="primary" onClick={() => console.log("Primary")}>
                Previous
            </Button>
            <Button variant="primary" onClick={() => console.log("Primary")}>
                Next
            </Button>
        </div>
    )
}
