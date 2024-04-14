import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "bg-stone-200 p-1 w-full border-b-2 rounded-sm border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='uppercase text-stone-500 font-bold' htmlFor={label}>
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} id={label} ref={ref} />
      ) : (
        <input className={classes} {...props} id={label} ref={ref} />
      )}
    </p>
  );
});

export default Input;
