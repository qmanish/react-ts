const Logo = ({ className = '' }) => {
  return <img className={`h-10 ${className}`} src={'/logo.svg'} alt='react' />;
};

export default Logo;
