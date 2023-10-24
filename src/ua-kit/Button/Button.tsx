import React, {DOMAttributes} from 'react';
import classNames from "classnames";
import "./Button.scss";


export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
    className?: string;
    isDisabled?: boolean;
    typeButton?: ButtonType;
    onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({className, children, isDisabled, typeButton, onClick, ...props}) => {
    return (
        <button
            className={
                classNames("Button", className, {"Button__disabled": isDisabled})
            }
            disabled={isDisabled}
            type={typeButton}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button
