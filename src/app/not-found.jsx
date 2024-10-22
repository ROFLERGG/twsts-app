import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col space-y-6">
      <p>Page doesn't exist yet</p>
      <Link href="/">Return to home</Link>
    </div>
  );
};

export default Custom404;
