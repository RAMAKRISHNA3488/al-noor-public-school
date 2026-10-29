import React from 'react';

export const PageFooter: React.FC = () => {
  return (
    <footer
      style={{
        height: '56px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #EEEEEE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        fontSize: '13px',
        marginTop: 'auto'
      }}
    >
      <div>
        <a
          href="#home"
          style={{
            color: '#1976FF',
            fontWeight: 500,
            textDecoration: 'none'
          }}
        >
          AL-Noor Public School
        </a>
      </div>

      <div style={{ color: '#555555' }}>
        2026, made with <span style={{ color: '#FF525F', margin: '0 2px' }}>❤️</span> by{' '}
        <a
          href="https://bigpage.in"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#1976FF',
            fontWeight: 500,
            textDecoration: 'none'
          }}
        >
          Bigpage
        </a>
      </div>
    </footer>
  );
};
