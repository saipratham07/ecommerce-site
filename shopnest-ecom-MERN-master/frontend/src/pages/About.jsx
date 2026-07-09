import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>
      
      {/* Logo */}
      <img
        src="https://nexorith-it.vercel.app/assets/logo-DXNIuvxU.jpeg"
        alt="NEXORITH IT SOLUTIONS"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #f97316',
          marginBottom: '20px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)'
        }}
      />

      {/* Title */}
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>
        About Us
      </h2>

      <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>
        NEXORITH IT SOLUTIONS
      </h3>

      {/* Description */}
      <p style={{
        color: '#a1a1aa',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        maxWidth: '650px',
        margin: '0 auto 30px auto'
      }}>
        <strong>Engineering the Digital Future.</strong><br />
        Nexorith IT Solutions is a high-performance software development company
        specializing in full-stack web development, cloud architecture, AI integration,
        UI/UX design, and scalable SaaS platforms. We help startups and enterprises
        transform ideas into powerful digital products.
      </p>

      {/* Website Button */}
      <div style={{ marginBottom: '20px' }}>
        <a
          href="https://nexorith-it.vercel.app/#home"
          target="_blank"
          rel="noreferrer"
          style={{
            ...socialBtnStyle,
            background: '#e38948',
            color: '#000',
            fontWeight: 'bold'
          }}
        >
          🌐 Visit Official Website
        </a>
      </div>

      {/* Social Links */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px'
      }}>
        <a href="#" style={socialBtnStyle}>📺 YouTube</a>
        <a href="#" style={socialBtnStyle}>📸 Instagram</a>
        <a href="#" style={socialBtnStyle}>💼 LinkedIn</a>
        <a href="#" style={socialBtnStyle}>✖️ X (Twitter)</a>
        <a href="#" style={socialBtnStyle}>💬 WhatsApp</a>
      </div>
    </div>
  );
};

export default About;