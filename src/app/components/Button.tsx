import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> { }


/**
 * A button component with a gray background, rounded corners, and a hover effect that changes the background and text color.
 * 
 * @param props - The standard HTML button element props.
 * @returns A React component that renders a button with the specified styles.
 */
export const Button = (props: ButtonProps) => {
    return (
        <button className="flex justify-between items-center px-5 h-12 bg-gray-500 transition-colors duration-200 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900"
            {...props} />
    )
}
