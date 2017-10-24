import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-router-dom'

import withURLState from './withURLState';


import help from '../help'

const NavContainer = styled( 'nav' )`
    position: absolute;
    top: 25px;
    left: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LinkContainer = styled( 'div' )`
    display: flex;
    border: 1px solid black;
`

const ToggleLink = styled( Link )`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${ p => p.active ? 'lightgray' : 'white' };
    color: ${ p => p.active ? 'black' : 'lightgray' }
    font-weight: bold;
    text-decoration: none;
`

const RoundButton = styled( 'a' )`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-left: 15px;
    border-radius: 15px;
    background-color: lightgray;
    color: black;
    font-weight: bold;
    text-decoration: none;
`


class Navigation extends React.Component
{
    componentDidMount()
    {
        document.addEventListener( 'keydown', this.handleKeyDown )
    }

    componentWillUnmount()
    {
        document.removeEventListener( 'keydown', this.handleKeyDown )
    }

    isActive( route )
    {
        return ( this.props.location.pathname === route )
    }

    handleKeyDown = ( e ) => {
        // toggle path when SPACE is pressed
        if ( e.key === ' ' )
        {
            const route = this.isActive( '/' ) ? '/move' : '/'
            this.props.history.push( route )
        }

        // reset stage after pressing ESC
        if ( e.key === 'Escape' )
        {
            this.props.reset()
        }
    }

    render()
    {
        const { panZoom, reset } = this.props

        return (
            <NavContainer>
                <LinkContainer>
                    <ToggleLink to="/" active={ this.isActive( '/' ) }>EDIT</ToggleLink>
                    <ToggleLink to="/move" active={ this.isActive( '/move' ) }>MOVE</ToggleLink>
                </LinkContainer>
                <RoundButton title="Clear stage" href='#' onClick={ reset }>X</RoundButton>
                <RoundButton title="Reset viewport" href='#' onClick={ () => panZoom( [0, 0], 1 ) }>R</RoundButton>
                <RoundButton title="Show help" href="#" onClick={ help }>?</RoundButton>
            </NavContainer>
        );
    }
}


export default withURLState( Navigation )
