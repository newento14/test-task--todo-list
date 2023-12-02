import {Link} from "react-router-dom";

const links = [
  {
    href: '/',
    label: 'All',
  },
  {
    href: '/active',
    label: 'Active',
  },
  {
    href: '/completed',
    label: 'Completed',
  },
]

const Header = () => {
  return (
    <header className="bg-secondary text-white/70 uppercase h-[50px] flex justify-center items-center border-b-[1px] border-purple fixed w-full z-[1000]">
      <nav>
        <ul className="flex justify-center items-center gap-x-4">
          {links.map(({ href, label }) => (
            <li key={label} className="hover:text-purple transition-all duration-300">
              <Link to={href}>{label}</Link>
            </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;