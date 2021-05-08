import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
                {newArticle("PAPA React is Back", "Top news - 9099 readers")}
                {newArticle("Coronavirus: UK updates", "Top news - 886 readers")}
                {newArticle("TESLA hists new hights", "Cars & auto - 300 readers")}
                {newArticle("Bitcoins Breaks $22k", "Crypto - 8000 readers")}
                {newArticle("Is Redux too Good", "Code - 123 readers")}
                {newArticle("PAPA React launches course?!", "Top news - 6503 readers")}


        </div>

    );
}

export default Widgets
