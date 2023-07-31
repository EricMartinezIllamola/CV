import React from 'react';

function SoftSkills() {
    return (
        <section id="SoftSkills">
            <h1>Soft Skills</h1>
            <div class="accordion" id="accordionPanelsStayOpen">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            - UOC
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            {'lorem'}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            - Bootcamp Fundació Esplai
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            {'lorem'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SoftSkills;