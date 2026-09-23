interface LogoProps {
  onClick?: () => void;
  id?: string;
}

// Brand mark + wordmark, shared by the navbar and footer
export default function Logo({ onClick, id }: LogoProps) {
  return (
    <div onClick={onClick} className="flex cursor-pointer items-center space-x-2 group w-max" id={id}>
      <svg className="h-6 w-6 text-[#FFD700]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
        <polygon points="50,27 70,38 70,62 50,73 30,62 30,38" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" opacity="0.6" />
        <circle cx="50" cy="50" r="10" fill="currentColor" />
      </svg>
      <span className="font-sans text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FFD700]">
        Beu <span className="text-[#FFD700]">Tech</span>
      </span>
    </div>
  );
}
