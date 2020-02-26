import React from 'react';

import './menu.styles.scss';

// import MenuPreview from '../menu-preview/menu-preview';
import SeeMoreBtn from '../see-more-btn/see-more-btn';


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tyres_array: [],
            isLoaded: false
        }

    }

    componentDidMount() {
        const url = 'https://66dc2247.ngrok.io/';
        fetch('https://cors-anywhere.herokuapp.com/' + url)
            .then(res => res.json())
            .then(data => this.setState({
                tyres_array: data
            }))
    
    };


    render() {
        const { tyres_array } = this.state
        
        return (
            <div className='menu'>
                <ul>
                    { tyres_array.map(tyre => (
                        <li key={tyre.id}>{tyre.code}</li>
                    ))}
                </ul>
                <SeeMoreBtn/>
            </div>
        );
    };
};


export default Menu;