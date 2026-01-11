import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Layout = ({ children, isDark, toggleTheme }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
