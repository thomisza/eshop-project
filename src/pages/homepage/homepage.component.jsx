import React from 'react';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.style';
import './homepage.style.scss';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default HomePage;