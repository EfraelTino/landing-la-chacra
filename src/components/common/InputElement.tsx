import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';


interface InputElementProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: FieldError;
  labelClass?:string
  classinput?:string
}

const InputElement: React.FC<InputElementProps> = ({
  id,
  label,
  type,
  register,
  error,
  placeholder,
  labelClass,
  classinput
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className={`${labelClass} text-[#03B349E0] font-bold text-base font-montserrat`}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register}
        placeholder={placeholder}
        className={` ${classinput}
          bg-[#EEEEEE] rounded px-2 py-2  transition-colors 
          focus:outline-none focus:ring-2 focus:ring-[#03B349E0] font-montserrat focus:border-[#03b34962]
          hover:border-[#03B349E0] active:border-[#03B349] w-full
        `}
      />
      {error && <p className="text-red-500 text-[10px] font-light">{error.message}</p>}
    </div>
  );
};

export default InputElement;
