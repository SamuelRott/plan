import React from 'react'
import styled from 'react-emotion'
import map from 'lodash/map'

import Polygon from './Polygon';


const StageContainer = styled( 'svg' )`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: crosshair;
`


class Stage extends React.Component
{
    render()
    {
        const { polygons, children, ...stageProps } = this.props;

        return (
            <StageContainer { ...stageProps }>
                { polygons.map( ( polygon, i ) => (
                    <Polygon
                        key={ i }
                        index={ i }
                        points={ polygon } />
                ) ) }
                { children }
            </StageContainer>
        );
    }
}


export default Stage

