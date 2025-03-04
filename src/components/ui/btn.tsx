import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface BtnProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Btn = ({ label, onClick, className = "" }: BtnProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-black hover:bg-white hover:text-black border cursor-pointer text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2 transition-all duration-300 ${className}`}
    >
      <ShoppingCartIcon className="h-5 w-5" />
      {label}
    </button>
  );
};

export default Btn;
