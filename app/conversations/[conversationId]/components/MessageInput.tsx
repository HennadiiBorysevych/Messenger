"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  register,
  type,
  required,
  errors,
}) => {
  return (
    <div className="relative w-full ">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={id}
        {...register(id, { required })}
        className="text-black font-light px-2 py-4 bg-neutral-100 w-full rounded-full focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
