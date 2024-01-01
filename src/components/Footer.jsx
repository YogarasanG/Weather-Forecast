import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'Black',
    padding: '20px',
    textAlign: 'center',
    position:'fixed',   
    bottom: '0',
    width: '100%',
  };

  const disclaimerStyle = {
    fontSize: '15px',
    color: '#888',
    marginTop: '5px',
  };

  return (
    <div style={footerStyle}>
      <p>Created by Yogarasan</p>
      <p style={disclaimerStyle}>
        API data provided by <a href="https://www.weatherapi.com">www.weatherapi.com</a>. <br />If content is not shown, the link validity may have expired.
      </p>
    </div>
  );
};

export default Footer;
