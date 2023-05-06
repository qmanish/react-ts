import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <section className='flex w-screen h-screen items-center flex-col gap-10 justify-center'>
        <Link to='/' className=''>
          <Logo className='h-10' />
        </Link>
        <div className='flex w-screen items-center'>
          <h1 className='font-bold bg-gradient-to-r from-purple-500 to-sky-700 bg-clip-text text-transparent pb-4 text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto'>
            404 Not Found!
          </h1>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
