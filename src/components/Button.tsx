import Loading from './Loading';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    variant,
    className = '',
    type = 'button',
    isLoading = false,
    disabled = false,
  } = props;

  const baseClassName =
    'flex items-center justify-center gap-2 h-fit py-1.5 px-3 md:px-4 rounded-md shadow-sm transition-all duration-200 ease-in-out hover:shadow-lg';

  const getClassName = (variant: ButtonProps['variant']) => {
    if (variant === 'contained')
      return 'border border-primary bg-primary hover:bg-primary/75 hover:border-primary/75';
    if (variant === 'outlined')
      return 'border border-primary text-primary hover:bg-primary/10';
    return '';
  };

  return (
    <button
      className={baseClassName + ' ' + getClassName(variant) + ' ' + className}
      type={type}
      onClick={onClick}
      disabled={disabled ?? isLoading}
    >
      {children} {isLoading && <Loading />}
    </button>
  );
};

export default Button;
