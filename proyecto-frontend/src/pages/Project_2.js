import React from 'react';

function Project_2() {
    return (
        <section id="Project_1">
            <div className='text_code'></div>
            <div className='text_png'>
                <p>head(countries)</p>
                <img className='img_P2_1'></img>
            </div>
            <div className='text_png'>
                <p>{'clus_title\<\-countries[,c("country", "child_mort","life_expec","health","gdpp","income")] \n knitr::kable(head(clus_title), "simple"'})</p>
                <img className='img_P2_2'></img>
            </div>
            <div className='text_png'>
                <p>{'clus<-countries[,c("child_mort","life_expec","health","gdpp","income")] \n summary(clus)'}</p>
                <img className='img_P2_3'></img>
            </div>
        </section>)
}

export default Project_2;