import type { ReactNode } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0 flex flex-col">
      <header className="bg-white border-b border-slate-200 py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
            Trustpilot <span className="text-emerald-600">Review Shop</span>
          </Link>
          <nav className="hidden md:flex gap-8 font-semibold text-slate-600">
            <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">{children ?? <Outlet />}</main>
      
      <footer className="bg-white border-t border-slate-200 mt-20 py-8 px-4 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <div className="flex justify-center flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <Link to="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">•</span>
            <Link to="/terms" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
            <span className="text-slate-300">•</span>
            <Link to="/disclosure" className="hover:text-emerald-600 transition-colors">Affiliate Disclosure</Link>
            <span className="text-slate-300">•</span>
            <Link to="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
