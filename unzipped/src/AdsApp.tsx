import React from 'react';
import App from './App';

import { Link } from 'react-router-dom';

export default function AdsApp() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ADVERTORIAL DISCLOSURE BANNER */}
      <div className="bg-slate-900 text-slate-300 text-xs text-center py-2 px-4 shadow-sm relative z-50 uppercase tracking-widest">
        <strong>Advertorial</strong> — This page is an advertisement feature and not an independent news article.
      </div>
      
      {/* MAIN APP CONTENT */}
      <div className="flex-grow">
        <App />
      </div>

      {/* COMPLIANT FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 mt-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="text-sm leading-relaxed max-w-2xl">
            <p className="mb-4">&copy; 2026 Trustpilot Review Shop. All rights reserved.</p>
            <p className="mb-4 text-xs">
              <strong>ADVERTORIAL DISCLOSURE:</strong> This website is an advertorial feature. The content depicted here is based on the results that some people who have used these products have achieved. However, individual results can and do vary. This is not a news article or an independent editorial piece.
            </p>
            <p className="text-xs">
              <strong>AFFILIATE DISCLOSURE:</strong> We may receive compensation for clicks on or purchase of products featured on this site. This helps support our research and operations.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3 text-sm font-semibold whitespace-nowrap">
            <Link to="/privacy" className="hover:text-emerald-500 transition-colors uppercase tracking-tight">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-emerald-500 transition-colors uppercase tracking-tight">Terms of Service</Link>
            <Link to="/disclosure" className="hover:text-emerald-500 transition-colors uppercase tracking-tight">Affiliate Disclosure</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors uppercase tracking-tight">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
