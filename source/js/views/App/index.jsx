import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ShotItem from '../ShotsItem/ShotItem';

const Layout = props => ({
  render() {
    return (
      <div className="o-container">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    );
  }
});

export default Layout;