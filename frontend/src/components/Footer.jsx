import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon-box">
              <Utensils size={19} color="#fff" />
            </div>
            <span className="brand-name">Common <span>Table</span></span>
          </div>
          <p className="footer-desc">
            A living collection of recipes, small rituals, and dishes worth passing around the table.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <Link to="/?category=Sri%20Lankan">Island cooking</Link>
          <Link to="/?category=Italian">Pasta nights</Link>
          <Link to="/?category=Vegan">Plants first</Link>
          <Link to="/?category=Dessert">Something sweet</Link>
        </div>

        <div className="footer-links-group">
          <h4>Community</h4>
          <Link to="/create-recipe">Add your notes</Link>
          <Link to="/register">Join the table</Link>
          <a href="#about">Our point of view</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex-between footer-bottom-inner">
          <p>© {new Date().getFullYear()} Common Table. Made for real kitchens.</p>
          <p className="footer-love">
            Made with <Heart size={14} fill="var(--accent-primary)" color="var(--accent-primary)" /> for curious cooks.
          </p>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #090b0e;
          border-top: 1px solid var(--border-subtle);
          margin-top: auto;
          padding-top: 3.5rem;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }
        .footer-desc {
          margin-top: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          max-width: 420px;
          line-height: 1.6;
        }
        .footer-links-group h4 {
          font-size: 1rem;
          margin-bottom: 1.25rem;
          color: #fff;
        }
        .footer-links-group a {
          display: block;
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.65rem;
          transition: color var(--transition-fast);
        }
        .footer-links-group a:hover {
          color: var(--accent-primary);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.25rem 0;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .footer-love {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        @media (max-width: 768px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
