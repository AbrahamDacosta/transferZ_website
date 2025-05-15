import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-primary">Transfer Z</div>
      <nav className="hidden md:flex space-x-6 text-sm text-dark font-medium">
        <a href="#problem" className="hover:text-primary">Problème</a>
        <a href="#solution" className="hover:text-primary">Solution</a>
        <a href="#impact" className="hover:text-primary">Impact</a>
        <a href="#team" className="hover:text-primary">Équipe</a>
        <a href="#contact" className="hover:text-primary">Contact</a>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}