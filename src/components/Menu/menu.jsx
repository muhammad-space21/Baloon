import React from 'react';

import './menu.styles.scss';

import { Container, Row, Col } from 'react-bootstrap';

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
        const url = 'https://80ed8e50.ngrok.io/api/tyres';
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
                            <Row><MenuItem as={Col} key={id} { ...otherItemProps } /></Row>
                        ))
                    }
                </Container>
                <SeeMoreBtn />
            </div>
        );
    };
};


export default Menu;