'use client';

interface ButtonProps {
    text?: string
}

export function Button({text}: ButtonProps) {
    return (
        <button className="px-6 py-3 text-lg font-bold text-black bg-white border border-black rounded rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer mt-9">
            {text}
        </button>
    )
}

export default Button;