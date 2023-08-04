import React from 'react';

function Project_2() {
    return (
        <section id="Project_2">
            <h1></h1>
            <div class="accordion" id="accordionPanelsStayOpen_1">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #1
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_1" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#Definimos directorio de trabajo y cargamos los datos \n \nsetwd(“ruta”) \ncountries = read.csv("Country-data.csv", na.string = c("", "NA"))'}
                        </div>
                    </div>
                </div>
            </div>
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
            <div className='text_png'>
                <p>{'plot(countries[c("life_expec","health")], xlab="Esperanza de vida", ylab="Inversión en salud (%)") title(main="Nube de puntos A1", col.main="blue", font.main=1)'}</p>
                <img className='img_P2_4'></img>
            </div>
            <div className='text_png'>
                <p>{'plot(countries[c("life_expec","gdpp")], xlab="Esperanza de vida", ylab="GDDP") title(main="Nube de puntos B1", col.main="blue", font.main=1)'}</p>
                <img className='img_P2_5'></img>
            </div>
            <div className='text_png'>
                <p>{'plot(countries[c("health","gdpp")], xlab="Inversión en salud (%)", ylab="GDPP") title(main="Nube de puntos C1", col.main="blue", font.main=1)'}</p>
                <img className='img_P2_6'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_2">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #2
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#K-means \n \nclus_norm<-clus \nclus_norm[,c("child_mort")] <- (clus$child_mort-mean(clus$child_mort))/sd(clus$child_mort) \nclus_norm[,c("life_expec")] <- (clus$life_expec-mean(clus$life_expec))/sd(clus$life_expec) \nclus_norm[,c("health")] <- (clus$health-mean(clus$health))/sd(clus$health) \nclus_norm[,c("gdpp")] <- (clus$gdpp-mean(clus$gdpp))/sd(clus$gdpp) \nclus_norm[,c("income")] <- (clus$income-mean(clus$income))/sd(clus$income) \n \nset.seed(123) \nbss <- kmeans(clus_norm,centers=1)$betweenss \nfor (i in 2:10) bss[i] <- kmeans(clus_norm,centers=i)$betweenss'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'plot(1:10, bss, type="l", xlab="Número de grupos",ylab="Sumas de cuadrados entre grupos")'}</p>
                <img className='img_P2_7'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_3">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #3
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_3" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'clus_kmeans=clus \nNumCluster=5 \nset.seed(123) \nModelo=kmeans(clus_norm,NumCluster) \nclus_kmeans$clusterKmeans= Modelo$cluster'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(aggregate(.~clusterKmeans,FUN=mean, data=clus_kmeans), "simple")'}</p>
                <img className='img_P2_8'></img>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(table(clus_kmeans$clusterKmeans), "simple")'}</p>
                <img className='img_P2_9'></img>
            </div>
            <div className='text_png'>
                <p>{'plot(clus_kmeans[c("life_expec","health")], xlab="Esperanza de vida", ylab="Inversión en salud (%)",col=clus_kmeans$clusterKmeans) title(main="Nube de puntos A2", col.main="blue", font.main=1)'}</p>
                <img className='img_P2_10'></img>
            </div>
            <div className='text_png'>
                <p>{'plot(clus_kmeans[c("life_expec","gdpp")], xlab="Esperanza de vida", ylab="GDDP",col=clus_kmeans$clusterKmeans) title(main="Nube de puntos B2", col.main="blue", font.main=1)'}</p>
                <img className='img_P2_11'></img>
            </div>
            <div className='text_png'>
                <p>{'plot(clus_kmeans[c("health","gdpp")], xlab="Inversión en salud (%)", ylab="GDPP",col=clus_kmeans$clusterKmeans) title(main="Nube de puntos C2", col.main="blue", font.main=1)'}</p>
                <img className='img_P2_12'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_4">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #4
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_4" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#Diferentes valores de K \n \n#K=2 \n \nclus_kmeans=clus \nNumCluster=2 \nset.seed(123) \nModelo=kmeans(clus_norm,NumCluster) \nclus_kmeans$clusterKmeans= Modelo$cluster'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(aggregate(.~clusterKmeans,FUN=mean, data=clus_kmeans), "simple")'}</p>
                <img className='img_P2_13'></img>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(table(clus_kmeans$clusterKmeans), "simple")'}</p>
                <img className='img_P2_14'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_5">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_5" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #5
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_5" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#K=3 \n \nclus_kmeans=clus \nNumCluster=3 \nset.seed(123) \nModelo=kmeans(clus_norm,NumCluster) \nclus_kmeans$clusterKmeans= Modelo$cluster'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(aggregate(.~clusterKmeans,FUN=mean, data=clus_kmeans), "simple")'}</p>
                <img className='img_P2_15'></img>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(table(clus_kmeans$clusterKmeans), "simple")'}</p>
                <img className='img_P2_16'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_6">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_6" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #6
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_6" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#K=4 \n \nclus_kmeans=clus \nNumCluster=4 \nset.seed(123) \nModelo=kmeans(clus_norm,NumCluster) \nclus_kmeans$clusterKmeans= Modelo$cluster'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(aggregate(.~clusterKmeans,FUN=mean, data=clus_kmeans), "simple")'}</p>
                <img className='img_P2_17'></img>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(table(clus_kmeans$clusterKmeans), "simple")'}</p>
                <img className='img_P2_18'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_7">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_7" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #7
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_7" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#K=5 \n \nclus_kmeans=clus \nNumCluster=5 \nset.seed(123) \nModelo=kmeans(clus_norm,NumCluster) \nclus_kmeans$clusterKmeans= Modelo$cluster'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(aggregate(.~clusterKmeans,FUN=mean, data=clus_kmeans), "simple")'}</p>
                <img className='img_P2_19'></img>
            </div>
            <div className='text_png'>
                <p>{'knitr::kable(table(clus_kmeans$clusterKmeans), "simple").png'}</p>
                <img className='img_P2_20'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_8">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_8" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #8
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_8" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#K=5 \n \nclus_kmeans=clus \nNumCluster=5 \nset.seed(123) \nModelo=kmeans(clus_norm,NumCluster) \nclus_kmeans$clusterKmeans= Modelo$cluster'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'plot(k, type="b", avg_sil, xlab="Number of clusters", ylab="Average Silhouette Scores", frame=FALSE)'}</p>
                <img className='img_P2_21'></img>
            </div>
        </section>)
}

export default Project_2;