import React, { /* PropTypes */ } from 'react'

export default function Link(props) {
    return (
        <a href={props.url}>{props.children}</a>
    )
}

// Link.propTypes = {
//
// }
