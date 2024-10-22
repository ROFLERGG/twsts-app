import Link from 'next/link';

const pages = [
  {
    name: 'ThreeJS',
    url: '/threejs',
  },
  {
    name: 'List',
    url: '/list',
  },
];

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`absolute z-50 flex flex-col right-0 top-20 bg-neutral-950 border-2 border-neutral-800 rounded-xl p-4 space-y-2 ${isOpen ? 'animate-appear' : ''}`}>
      {pages.map((page) => (
        <Link key={page.name} href={page.url} className="rounded-full hover:bg-neutral-50 hover:bg-opacity-5 px-4 py-2 duration-300 ease-in-out">
          {page.name}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
