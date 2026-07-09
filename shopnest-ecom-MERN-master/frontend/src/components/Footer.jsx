import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0a0a0f, #111827)',
        borderTop: '1px solid rgba(249, 115, 22, 0.2)',
        padding: '50px 20px',
        marginTop: 'auto',
        color: '#e5e7eb'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '25px'
        }}
      >
        {/* Brand Section */}
        <div>
          <h3 style={{ color: '#f97316', marginBottom: '10px', fontSize: '1.4rem' }}>
            ShopNest
          </h3>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
            Premium E-Commerce Platform.
          </p>

          {/* Developer Credit */}
          <p style={{
            marginTop: '10px',
            fontSize: '0.85rem',
            color: '#f97316',
            fontWeight: '500'
          }}>
            Designed & Developed by<a href="https://nexorith-it.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#fffdfc', textDecoration: 'underline', marginLeft: '5px' }}>NEXORITH IT SOLUTIONS</a>
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
          <Link to="/about" style={{ color: '#d1d5db', fontSize: '0.95rem', textDecoration: 'none' }}>
            About Us
          </Link>

          <Link to="/return" style={{ color: '#d1d5db', fontSize: '0.95rem', textDecoration: 'none' }}>
            Return Policy
          </Link>

          <Link to="/disclaimer" style={{ color: '#d1d5db', fontSize: '0.95rem', textDecoration: 'none' }}>
            Disclaimer
          </Link>
        </div>

        {/* Copyright */}
        <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;