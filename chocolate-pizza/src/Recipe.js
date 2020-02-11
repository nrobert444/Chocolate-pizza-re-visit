import React, { Component } from 'react';

export default class Recipe extends Component {
    render() {
        return (
            <div>
                <ul className="ingredients">
                    <img src="list-bg.png" alt = 'list-bg'/>
                        <li>{this.props.ingredient}</li>
                        <li>{this.props.ingredient1}</li>
                        <li>{this.props.ingredient2}</li>
                        <li>{this.props.ingredient3}</li>
                </ul>
            </div>
        )
    }

}