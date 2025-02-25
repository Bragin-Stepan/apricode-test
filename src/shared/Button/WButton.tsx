import React from 'react';

interface WButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/** Обертка для кнопки */
export const WButton: React.FC<WButtonProps> = ({
  children,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`px-4 py-2 text-white rounded ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-blue-400 hover:bg-blue-500 hover:cursor-pointer'
      } ${className || ''}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
