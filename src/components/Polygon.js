import React from 'react'
import { css, cx } from 'react-emotion'
import { toPath } from '../utils/svg'


const polygon = css`
    stroke: gray;
    stroke-width: 3;
    fill: #f5f5f5;
`

const editedClass = css`
    stroke: red;
    fill: transparent;
`

const highlightedClass = css`
    stroke: green;
`


function Polygon( { points, edited, highlighted, ...pathProps } )
{
    const classNames = cx(
        polygon,
        { [editedClass]: edited },
        { [highlightedClass]: highlighted }
    )

    return (
        <path
            { ...pathProps }
            d={ toPath( points, edited ) }
            className={ classNames } />
    )
}


export default Polygon
