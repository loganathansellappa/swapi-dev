import React from "react";
import {ImSpinner2} from "react-icons/all";
import "./Loader.scss";

interface LoaderProps {
    size?: number
    color?: string
    className?: string
}

export const Loader = ({size = 100, color = 'white', className = 'inline'}: LoaderProps) =>
    <div  >
        <ImSpinner2 size={size}  color={color} className={className}/>
    </div>
