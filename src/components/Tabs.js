import React, { useState } from 'react';

const Tabs = props => {
    const [IdxSelected, SetIdxSelected] = useState(0);

    const OnClickHandler = (e, value) => {
        SetIdxSelected(value);
    }


    const TabStyle = {
        padding: '12px 15px',
        display: 'inline-block'
    }

    return (
        <div>
            {
                props.TabSections.map((tab, i) => {
                    return (
                        <div onClick={(e) => OnClickHandler(e, i)} style={TabStyle}>
                            <span key={i}>{tab.label}</span>
                        </div> 
                    )
                })
            }
            <div>
                {<p>{props.TabSections[IdxSelected].content}</p>}
            </div>
        </div>
    );
}

export default Tabs;