import { forwardRef } from "react";
import { cn } from "../../util/cn";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    round?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "success" | "warning" | "danger" | "black" | "white";
    stroke?: boolean;
    icon?: React.ReactElement;
    label: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
    ({ round, size, variant, stroke, icon, label, ...props }, buttonRef) => {
        const btnClasses = cn(
            "transition-all px-4 py-2 rounded-lg font-medium",
            {
                "rounded-full": round,
                "bg-white border-2 border-regent-gray-300 text-regent-gray-900 hover:bg-regent-gray-100":
                    variant === "white",
                "bg-black text-white hover:bg-regent-gray-800":
                    variant === "black",
                "bg-success-500 text-white hover:bg-success-600":
                    variant === "success",
                "bg-warning-500 text-white hover:bg-warning-600":
                    variant === "warning",
                "bg-danger-500 text-white hover:bg-danger-600":
                    variant === "danger",
                "bg-primary-500 text-white hover:bg-primary-600":
                    variant === "primary",
                "px-2 py-2 text-sm": size === "sm",
                "px-3 py-2": size === "md",
                "px-4 py-2": size === "lg",
            },
            stroke &&
                `border-${variant}-500 text-${variant}-500 border-2 bg-transparent`
        );
        return (
            <button
                {...props}
                ref={buttonRef}
                className={`${btnClasses} ${props.className}`}
            >
                {icon && icon}
                {label}
            </button>
        );
    }
);
