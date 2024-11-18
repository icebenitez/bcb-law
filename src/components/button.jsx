"use client";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="flex h-10 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg bg-emerald-500 px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#111418]"
      onClick={onClick}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
