import React from 'react';

function Project_1() {
    return (
        <section id="Project_1">
            <div className='text_code'></div>
            <div className='text_png'>
                <p>knitr::kable(table(data$V1), "simple", col.names = c("Tematica", "Nº Doc"), align = c('l', 'r'))</p>
                <img className='img_P1_1'></img>
            </div>
            <div className='text_png'>
                <p>library(ggplot2)qplot(data$V1,xlab="Tematica", main = "Frecuencias")+ coord_flip()</p>
                <img className='img_P1_2'></img>
            </div>
        </section>)
}

export default Project_1;