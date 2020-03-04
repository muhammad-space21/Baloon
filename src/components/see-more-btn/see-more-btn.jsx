import React from 'react';

import './see-more-btn.styles.scss';

import arrowDown from '../../Assets/Icons/down-arrow.png';
import arrowUp from '../../Assets/Icons/up-arrow.png';


class SeeMoreBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
            // seeMoreVisible: false

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            visible: false
            // seeMoreVisible: true
        })
    }

    
    render() {
        return (
            <div className='see-more-btn'>
                <div className='title'> 
                    <h1>See more</h1> 
                </div>
                <div className='btn-container'>
                    {
                        this.state.visible ? 
                        <img 
                        className='btn-toggle' 
                        src={arrowDown}
                        onClick={this.handleClick}
                        alt="see-more-btn"/>
                        : 
                        <img
                        className='btn-toggle'
                        src={arrowUp}
                        onClick={this.handleClick}
                        alt="see-more-btn-up"
                        />        
                    }      
                </div>
            </div>
        );
    };
};

export default SeeMoreBtn;