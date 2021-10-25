import React from 'react';
import Blog from '../Blog/Blog';
import Client from '../Client/Client';
import ConnectUs from '../ConnectUs/ConnectUs';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Client></Client>
            <Blog></Blog>
            <Doctor></Doctor>
            <ConnectUs></ConnectUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;