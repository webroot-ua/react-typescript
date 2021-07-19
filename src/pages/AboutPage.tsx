import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Information page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem consequuntur eaque expedita explicabo ipsa maxime placeat voluptates voluptatum!</p>
            <button className="btn" onClick={() => history.push('/')} >Back to tasks list</button>
        </>
    )
}