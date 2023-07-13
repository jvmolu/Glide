import React from "react"
import { Paper } from "@mui/material"

function Item(props) {

    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <h2>{props.item.surname}</h2>
            <h1>{props.item.class}</h1>
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default Item;