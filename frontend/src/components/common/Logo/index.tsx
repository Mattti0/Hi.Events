import React from "react";
import { getConfig } from "../../../utilites/config";

export const Logo: React.FC<{ light?: boolean, className?: string }> = ({ light, className }) => {
    const appName = getConfig("VITE_APP_NAME", "ILMO.");
    
    if (appName === "ILMO.") {
        return (
            <div className={className} style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontWeight: 800, 
                fontSize: '24px', 
                letterSpacing: '-0.02em',
                color: light ? '#FDFDFD' : '#1D1D1F',
                display: 'flex',
                alignItems: 'baseline',
                textTransform: 'uppercase'
            }}>
                ILMO<span style={{ color: '#005FCC' }}>.</span>
            </div>
        );
    }

    if (appName === "Naapurinpoj.at") {
        return (
            <div className={className} style={{ 
                fontFamily: 'Inter, sans-serif', 
                fontWeight: 600, 
                fontSize: '20px', 
                color: light ? '#FDFDFD' : '#1D1D1F',
                display: 'flex',
                alignItems: 'baseline'
            }}>
                Naapurinpoj<span style={{ fontFamily: 'IBM Plex Mono, monospace', color: '#2A9D8F' }}>.at</span>
            </div>
        );
    }

    return (
        <img 
            src={light ? getConfig("VITE_APP_LOGO_LIGHT", "/logos/hi-events-text-dark.svg") : getConfig("VITE_APP_LOGO_DARK", "/logos/hi-events-stacked-light.svg")} 
            alt={`${appName} logo`} 
            className={className}
        />
    );
};
