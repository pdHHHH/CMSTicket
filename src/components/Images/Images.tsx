import { FC } from 'react';

export const Logo: FC<{ height: number; width: number; className?: string }> = ({ height, width, className }) => {
    return (
        <div className={className} style={{height: height, width: width}}>
            <img src={require('assets/App.png')} alt="" height={"100%"} width={"100%"} style={{objectFit: 'cover'}} />
        </div>
    );
};
