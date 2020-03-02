import React from 'react';

import './menu.styles.scss';

import { Container } from 'react-bootstrap';

// import MenuPreview from '../menu-preview/menu-preview';
import MenuItem from '../menu-item/menu-item';
import SeeMoreBtn from '../see-more-btn/see-more-btn';


class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tyres_array:[]
        }
    }


    componentDidMount() {
        const url = 'https://78161d90.ngrok.io/api/tyres';
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
                <Container>
                    { tyres_array
                        .map(({id, ...otherItemProps}) => (
                            <MenuItem  key={id} { ...otherItemProps } />
                        ))
                    }
                </Container>
                <SeeMoreBtn />
            </div>
        );
    };
};


export default Menu;