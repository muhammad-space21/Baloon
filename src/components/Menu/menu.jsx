import React from 'react';

import './menu.styles.scss';

// import MenuPreview from '../menu-preview/menu-preview';
import MenuItem from '../menu-item/menu-item';
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
        const url = 'https://203a9dc7.ngrok.io';
        fetch('https://cors-anywhere.herokuapp.com/' + url)
            .then(res => res.json())
            .then(data => this.setState({
                tyres_array: data
            }))
    
    }


    render() {
        const { tyres_array } = this.state
        
        return (
            <div className='menu'>
                    { tyres_array
                        .map(({id, ...otherPreviewProps}) => (
                        <MenuItem key={id} { ...otherPreviewProps } />
                    ))
                    }
                <SeeMoreBtn/>
            </div>
        );
    };
};


export default Menu;