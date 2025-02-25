import React from 'react';

type Props = {
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
};

/** обертка для кнопки */
export const WButton = ({ children, disabled = false, ...props }: Props) => {
  return (
    <button
      className={`px-4 py-2 text-white rounded ${
        disabled
          ? 'bg-gray-300'
          : 'bg-blue-400 hover:bg-blue-500 hover:cursor-pointer'
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
