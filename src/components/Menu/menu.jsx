import React from 'react';

import './menu.styles.scss';

import MenuPreview from '../menu-preview/menu-preview';
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
        const url = 'https://bbb4f3c5.ngrok.io';
        fetch('https://cors-anywhere.herokuapp.com/' + url)
            .then(res => res.json())
            .then(data => {
                this.setState({ 
                    isLoaded: true,
                    tyres_array: data
                })
            })
    };


    render() {
        const { isLoaded, tyres_array } = this.state;
        return (
            <div className='menu'>
                {/* {
                    tyres_array.map(({ id, ...otherTyreProps }) => (
                        <MenuPreview key={id}  {...otherTyreProps} />
                    ))
                } */}
        
                <SeeMoreBtn />
            </div>
        );
    };
};


export default Menu;