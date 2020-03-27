import React from 'react';

import { connect } from 'react-redux';
import { getData } from '../../redux/menu/menu-actions';
import PropTypes from 'prop-types';

import './menu-item.styles.scss';

import MenuButton from '../button-menu/button-menu';



class MenuItem extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div className='menu-item'>
                <div className='menu-item-body'>
                    <div className='image'></div>
                </div>
                <div className="item-footer">
                    <div className='name'></div>
                    <MenuButton className='button-custom' /> 
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    data: state.menuReducer.data
});

export default connect(mapStateToProps, {getData})(MenuItem);