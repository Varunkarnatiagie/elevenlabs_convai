import * as React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "destructive";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "md", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded text-sm font-medium focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed";

        const variantStyles = {
            default: "bg-blue-600 text-white hover:bg-blue-700",
            outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
            destructive: "bg-red-600 text-white hover:bg-red-700",
        };

        const sizeStyles = {
            sm: "px-3 py-1 text-xs",
            md: "px-4 py-2",
            lg: "px-6 py-3 text-lg",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
