import React from 'react';

function Project_2() {
    return (
        <section id="Project_2">
            <div class="accordion" id="accordionPanelsStayOpen_1">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #1
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_1" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#Definimos directorio de trabajo \n \n setwd(“ruta”) \n \n #Cargamos los paquetes necesarios \n \n library(tm) \n library(plyr) \n library(class) \n library(caret) \n\n #Leemos los datos \n \n options(stringsAsFactors = FALSE) \n data <- read.table("data_reuter.txt", header=FALSE, sep="\\t")'}
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
                            {'#Definimos directorio de trabajo \n \n setwd(“ruta”) \n \n #Cargamos los paquetes necesarios \n \n library(tm) \n library(plyr) \n library(class) \n library(caret) \n\n #Leemos los datos \n \n options(stringsAsFactors = FALSE) \n data <- read.table("data_reuter.txt", header=FALSE, sep="\\t")'}
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
                            {'#Transformación para agregar las frecuencias (temática acq) \n \nmmat_acq <- as.matrix(mat[[1]]$mat) \n v_acq <- sort(rowSums(mmat_acq), decreasing=TRUE) \nd_acq <- data.frame(word=names(v_acq), freq=v_acq) \nd_acq[,3]<-"acq" \n \n#Transformación para agregar las frecuencias (temática earn) \n \nmmat_earn <- as.matrix(mat[[2]]$mat) \nv_earn <- sort(rowSums(mmat_earn), decreasing=TRUE) \nd_earn <- data.frame(word=names(v_earn), freq=v_earn) \nd_earn[,3]<-"earn" \n \n#Juntamos las 2 matrices y cambiamos el nombre de las columnas \n \nfdata<-rbind(d_acq,d_earn) \ncolnames(fdata)<-c("Palabra", "Frecuencia", "Tematica") \ncolnames(d_acq)<-c("Palabra", "Frecuencia", "Tematica") \ncolnames(d_earn)<-c("Palabra", "Frecuencia", "Tematica")'}
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
                            {'#Creación de un data.frame apto para K-NN \n \n#Acq \n \ns.mat_acq <- t(data.matrix(mat[[1]]$mat)) \ns.df_acq <- as.data.frame(s.mat_acq, stringsAsFactors = FALSE) \nTema <- rep(mat[[1]]$name, nrow(s.df_acq)) \ns.df_acq<-cbind(s.df_acq,Tema) \n \n#Earn \n \ns.mat_earn <- t(data.matrix(mat[[2]]$mat)) \ns.df_earn <- as.data.frame(s.mat_earn, stringsAsFactors = FALSE) \nTema <- rep(mat[[2]]$name, nrow(s.df_earn)) \ns.df_earn<-cbind(s.df_earn,Tema) \n \n#Conectar las 2 matrices \n \npila <-rbind.fill(s.df_acq, s.df_earn) \npila[is.na(pila)] <- 0 \n \n#Función knn paquete class \n \nset.seed(111) \nentrena.idx <- sample(nrow(pila), ceiling(nrow(pila) * 0.7)) \ntest.idx <- (1:nrow(pila))[-entrena.idx] \ntema <- pila[, "Tema"] \npila.nl <- pila[, !colnames(pila) %in% "Tema"] \nknn.pred <- knn(pila.nl[entrena.idx, ], pila.nl[test.idx, ], tema[entrena.idx])'}
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
                            {'#Validación knn - class \n \nknn.pred <- knn(pila.nl[entrena.idx, ], pila.nl[test.idx, ], tema[entrena.idx]) \nconf.mat <- table("Predicción" = knn.pred,"Real" = tema[test.idx])'}
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
                            {'#Función train paquete caret \n \ndat_train<-cbind(pila.nl[entrena.idx, ],tema[entrena.idx]) \nknnGrid <-  expand.grid(k = c(1:3)) \nknn.caret <- train(`tema[entrena.idx]`~., data=dat_train,method = "knn",tuneGrid = knnGrid)'}
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
                            {'#Función train paquete caret \n \ndat_train<-cbind(pila.nl[entrena.idx, ],tema[entrena.idx]) \nknnGrid <-  expand.grid(k = c(1:3)) \nknn.caret <- train(`tema[entrena.idx]`~., data=dat_train,method = "knn",tuneGrid = knnGrid)'}
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
                            {'#Función train paquete caret \n \ndat_train<-cbind(pila.nl[entrena.idx, ],tema[entrena.idx]) \nknnGrid <-  expand.grid(k = c(1:3)) \nknn.caret <- train(`tema[entrena.idx]`~., data=dat_train,method = "knn",tuneGrid = knnGrid)'}
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