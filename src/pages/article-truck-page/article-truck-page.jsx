import React from 'react';

import './article-truck.styles.scss';

import NavbarMain from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import BackButton from '../../components/back-button/back-button';



const ArticleTruckPage = () => (
    <div className='article-truck-page'>
        <NavbarMain />
        <div className='header'>
                <h1 className='title'>
                TRUCK / BUS <br/> <span>TYRES</span></h1>
            </div>
            <div className='article-body'>
                <p>
                    <span className='beginning'> Lorem </span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <span className='text-highlighted'>incididunt</span>ut labore et dolore magna aliqua. Lacus luctus accumsan tortor posuere ac. Rhoncus est pellentesque elit ullamcorper dignissim. Amet consectetur <span className='text-highlighted'>incididunt</span> adipiscing elit ut aliquam purus sit amet. Viverra justo nec ultrices dui sapien eget mi. Neque gravida in fermentum et sollicitudin <span className='text-highlighted'>incididunt</span> ac orci phasellus egestas. Vivamus arcu felis bibendum ut tristique et egestas. Commodo viverra maecenas accumsan lacus vel. Lectus quam id leo in vitae turpis massa. Erat velit scelerisque in dictum non consectetur a.
                    Adipiscing commodo <span className='text-highlighted'>incididunt</span> elit at imperdiet dui accumsan. Quam lacus suspendisse faucibus interdum. Sagittis orci a scelerisque purus semper eget duis. Risus viverra adipiscing at in tellus <span className='text-highlighted'>incididunt</span> integer feugiat. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Non nisi est sit amet facilisis magna etiam tempor orci. Cum sociis natoque <span className='text-highlighted'>incididunt</span> penatibus et. Urna nec tincidunt praesent semper feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Ut sem viverra aliquet eget sit amet. Eu mi bibendum neque egestas congue quisque egestas. Odio aenean sed adipiscing diam donec adipiscing tristique. Eget nullam non <span className='text-highlighted'>incididunt</span> nisi est sit amet. Id porta nibh venenatis cras sed felis eget. Justo nec ultrices dui sapien eget mi. Eleifend mi in nulla posuere sollicitudin aliquam. Elementum facilisis leo vel fringilla est ullamcorper <span className='text-highlighted'>incididunt</span> eget.
                    Etiam tempor orci <span className='text-highlighted'>incididunt</span> eu lobortis elementum. Sem et tortor consequat id. Nullam vehicula ipsum a arcu cursus. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Eleifend quam  <span className='text-highlighted'>incididunt</span> adipiscing vitae proin sagittis. Arcu non sodales neque sodales. Nunc eget lorem dolor sed. Eu lobortis elementum nibh tellus molestie nunc. Tempor orci eu lobortis elementum nibh tellus molestie. Tincidunt <span className='text-highlighted'>incididunt</span> nunc pulvinar sapien et ligula ullamcorper malesuada. Magna eget est lorem ipsum dolor sit. Interdum velit laoreet id donec ultrices tincidunt arcu non. Magnis dis parturient montes nascetur ridiculus <span className='text-highlighted'>incididunt</span>  mus mauris. Morbi tristique senectus et netus et malesuada fames ac. Curabitur vitae nunc sed velit. Diam donec adipiscing tristique risus nec feugiat in fermentum. Sapien eget mi proin sed libero enim sed faucibus turpis. Quisque non tellus orci ac auctor <span className='text-highlighted'>incididunt</span> augue mauris augue.
                </p>
            </div>
            <div className='back-button-container'>
                <BackButton />
            </div>
        <Footer />
    </div>
);

export default ArticleTruckPage;