import React from 'react';
import { Link } from 'react-router-dom';
import { CookbookData } from '../models';

import "../App.css"

export default function CookbookView(props: CookbookData) {
    const tiles = props.recipes.map(r => {
        const href = "/r/" + r.id
        return (
            <div className="collection-tile">
                <Link to={href}>{r.title}</Link>
            </div>
        )
    });

    return (
        <div className="collection-holder">
            <h1 className="collection-title">{props.title}</h1>
            <pre>{props.body}</pre>
            <div className="collection">
            {tiles}
        </div>
        </div>
    );
}