import React, {DOMAttributes} from 'react'
import {newGuid} from "../../utils/guid"
import classNames from "classnames"
import "./Icon.scss"
import Pdf from "../assets/icons/files/Pdf.svg?react"
import ArrowDown from "../assets/icons/arrowDown.svg?react"

export type IconType = | "Pdf" | "ArrowDown";

const iconTypes = new Map([
    ["Pdf", <Pdf key={newGuid()} />],
    ["ArrowDown", <ArrowDown key={newGuid()} /> ]
]);

export interface IconProps extends DOMAttributes<HTMLDivElement> {
    className?: string;
    type: IconType
}

const getIcon = (type: IconType):JSX.Element => iconTypes.get(type) as JSX.Element;

const Icon:React.FC<IconProps> = ({className, type, ...props}) => {
    return (
        <div className={classNames("Icon", className)}>{getIcon(type)}</div>
    );
};
export default Icon
