import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "shadowed";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "rounded-lg p-6 backdrop-filter backdrop-blur-lg";

    const variantStyles = {
        default: "bg-white border border-gray-200",
        glass: "bg-white/30 border border-white/20 shadow-lg",
        shadowed: "bg-gray-50 border border-gray-300 shadow-2xl",
    };

    return (
        <div
            ref={ref}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        />
    );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={`pb-4 border-b border-gray-300 ${className}`} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <h2 ref={ref} className={`font-bold text-xl text-gray-800 ${className}`} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <p ref={ref} className={`text-sm text-gray-600 ${className}`} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={`py-4 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={`pt-4 border-t border-gray-300 ${className}`} {...props} />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
