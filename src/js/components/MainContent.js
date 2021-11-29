
import React from "react";
function MainContent(props){

    function revealCatMenu(){
        document.querySelector(".cat_multiselect ul").classList.toggle('revealCatMenu');
    }
    
    return (
    
    <><div className="mainContent">{props.children}</div></>
    )
    
};

export default MainContent;