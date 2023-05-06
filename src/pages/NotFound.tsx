import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <section className='flex w-full h-full items-center flex-col gap-10 justify-center'>
        <Link to='/' className=''>
          <Logo className='h-10' />
        </Link>
          <h1 className='font-bold bg-gradient-to-t from-sky-200 to-sky-800 bg-clip-text text-transparent pb-4 text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto'>
            404 Not Found!
          </h1>
      </section>
    </main>
  );
};

export default NotFound;
