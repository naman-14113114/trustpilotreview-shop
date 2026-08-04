import { Oswald, Arimo, Abril_Fatface } from 'next/font/google';

const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-oswald', 
  weight: ['400', '500', '600', '700'] 
});
const arimo = Arimo({ 
  subsets: ['latin'], 
  variable: '--font-arimo', 
  weight: ['400', '700'] 
});
const abril = Abril_Fatface({ 
  subsets: ['latin'], 
  variable: '--font-abril', 
  weight: ['400'] 
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${oswald.variable} ${arimo.variable} ${abril.variable} bg-[#ffffff] text-[#4B4F58] font-sans antialiased min-h-screen`}>
      {children}
    </div>
  );
}
