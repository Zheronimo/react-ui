import React, {ReactNode} from 'react';
import "./Layout.scss";

interface LayoutProps {
    children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="Layout">
            <div className="Layout-Container">
                {children}
            </div>
        </div>
    )
}
export default Layout
