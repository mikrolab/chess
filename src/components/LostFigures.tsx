import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(figures =>
                <div key={figures.id} className="lost-figure">
                    {figures.name} {figures.logo && <img width={20} height={20} src={figures.logo} alt={figures.name}/>}
                </div>
            )}
        </div>
    );
};

export default LostFigures;
