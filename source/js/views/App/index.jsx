import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ShotItem from '../ShotsItem/ShotItem';
import ShotsList from '../ShotsList/ShotsList';

const Layout = props => ({
  render() {
    return (
      <div className="container">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default Layout;