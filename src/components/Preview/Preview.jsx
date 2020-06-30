import React from 'react'
import { Link } from 'react-router-dom'
import './Preview.scss'

export default function Preview(props) {
  return (
    <Link to={props.link ? props.link: ''} className="Preview">
        <div className="Wrapper">
            <div className="Image" style={{backgroundImage: 'url(' + props.image + ')'}}>
            </div>
            <div className="Content">
                <h2 className="Title">{props.title}</h2>
                <p className="Text">{props.text}</p>
            </div>
        </div>
    </Link>
  )
}
