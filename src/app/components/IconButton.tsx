import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> { }

export const IconButton = ({ className, ...props }: IconButtonProps) => {
    return (
        <button className={twMerge("p-1.5 bg-gray-500 transition-colors duration-200 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900", className)} {...props} />
    )
}
