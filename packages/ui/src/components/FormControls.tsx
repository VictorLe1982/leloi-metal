import React from 'react';

export interface FormGroupProps {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  error,
  helperText,
  required = false,
  children,
  className = ''
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-[13px] font-heading font-semibold text-[#172033] tracking-wider uppercase flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error ? (
        <span className="text-xs text-red-600 font-medium">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-500">{helperText}</span>
      ) : null}
    </div>
  );
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full min-h-[48px] px-4 py-3 bg-white border text-base sm:text-sm text-[#172033] rounded-lg transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] focus:border-transparent [&::-webkit-inner-spin-button]:ml-2 ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-[#E2E8F0] hover:border-[#9AA3AF]'
        } ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, className = '', children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`w-full min-h-[48px] px-4 py-3 pr-10 bg-white border text-base sm:text-sm text-[#172033] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] focus:border-transparent cursor-pointer ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-[#E2E8F0] hover:border-[#9AA3AF]'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = 'Select';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full p-4 min-h-[120px] bg-white border text-base sm:text-sm text-[#172033] rounded-lg transition-colors placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] focus:border-transparent ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-[#E2E8F0] hover:border-[#9AA3AF]'
        } ${className}`}
        rows={4}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
