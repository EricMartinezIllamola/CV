import React from 'react';

function Project_1() {
    return (
        <section id="Project_1">
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
                <p>{'knitr::kable(table(data$V1), "simple", col.names = c("Tematica", "Nº Doc"), align = c("l", "r"))'}</p>
                <img className='img_P1_1'></img>
            </div>
            <div className='text_png'>
                <p>{'library(ggplot2)\n qplot(data$V1,xlab="Tematica", main = "Frecuencias")+ coord_flip()'}</p>
                <img className='img_P1_2'></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_2">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #2_1
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#Seleccionamos las 2 temáticas (acq y earn) \n \n data2<-data[which(data$V1 %in% c("acq","earn")),] \n \n #Creación y acondicionamiento del corpus de la temática acq. \n \n data_acq<-data2[(data2$V1=="acq"),] \n source <- VectorSource(data_acq$V2) \n corpus1 <- Corpus(source) \n corpus1 <- tm_map(corpus1, content_transformer(tolower)) \n corpus1 <- tm_map(corpus1, removeNumbers) \n corpus1 <- tm_map(corpus1, removePunctuation) \n corpus1 <- tm_map(corpus1, stripWhitespace) \n v_stopwords <- c(stopwords("english"),c("dont","didnt","arent","cant","one","also","said")) \n corpus1 <- tm_map(corpus1, removeWords, v_stopwords) \n corpus1 <- tm_map(corpus1, removePunctuation) \n corpus1 <- tm_map(corpus1, stemDocument, language="english") \n \n #Creación y acondicionamiento del corpus de la temática earn. \n \n data_earn<-data2[(data2$V1=="earn"),] \n source <- VectorSource(data_earn$V2) \n corpus2 <- Corpus(source) \n corpus2 <- tm_map(corpus2, content_transformer(tolower)) \n corpus2 <- tm_map(corpus2, removeNumbers) \n corpus2 <- tm_map(corpus2, removePunctuation) \n corpus2 <- tm_map(corpus2, stripWhitespace) \n v_stopwords <- c(stopwords("english"),c("dont","didnt","arent","cant","one","also","said")) \n corpus2 <- tm_map(corpus2, removeWords, v_stopwords) \n corpus2 <- tm_map(corpus2, removePunctuation) \n corpus2 <- tm_map(corpus2, stemDocument, language="english")'}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo_2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion #2_2
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseTwo_2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {'#Generación de la matriz de términos (TDM-Terms Data Matrix) para la temática acq. \n \nmat_acq <- TermDocumentMatrix(corpus1) \nmat_acq<- removeSparseTerms(mat_acq,  0.80) \nmat_acq<-list(name="acq",mat=mat_acq) \n \n#Generación de la matriz de términos (TDM-Terms Data Matrix) para la temática earn. \n \nmat_earn <- TermDocumentMatrix(corpus2) \nmat_earn<- removeSparseTerms(mat_earn,  0.80) \nmat_earn<-list(name="earn",mat=mat_earn) \n \n#Juntamos ambas matrices \n \nmat<-list(mat_acq, mat_earn)'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'inspect(mat[[1]]$mat)'}</p>
                <img className='img_P1_3'></img>
            </div>
            <div className='text_png'>
                <p>{'inspect(mat[[2]]$mat)'}</p>
                <img className='img_P1_4'></img>
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
                <p>{'knitr::kable(head(fdata), "simple", align = "l")'}</p>
                <img className='img_P1_5'></img>
            </div>
            <div className='text_png'>
                <p>{'ggplot(subset(fdata,Frecuencia>400),aes(Frecuencia,Palabra,fill=Tematica))+geom_bar(stat="identity",position=position_stack())+theme(axis.text.x=element_text(angle=45, hjust=1))'}</p>
                <img className='img_P1_6'></img>
            </div>
            <div className='text_png'>
                <p>{'sd_acq<-subset(d_acq, Frecuencia>400)\n wordcloud(sd_acq$Palabra, d_acq$Frecuencia,min.freq=400,scale=c(3,.5),random.color=FALSE, colors=rainbow(3))'}</p>
                <img className='img_P1_7'></img>
            </div>
            <div className='text_png'>
                <p>{'sd_earn<-subset(d_earn, Frecuencia>400)\n wordcloud(sd_earn$Palabra, d_earn$Frecuencia,min.freq=400,scale=c(4,.5),random.color=FALSE, colors=rainbow(3))'}</p>
                <img className='img_P1_8'></img>
            </div>
            <div className='text_png'>
                <p>{'sfdata<-subset(fdata, Frecuencia>400)\n wordcloud(sfdata$Palabra, fdata$Frecuencia,min.freq=400,scale=c(3.5,.5),random.color=FALSE,ordered.colors=TRUE,colors=rainbow(2)[factor(fdata$Tematica)])'}</p>
                <img className='img_P1_9'></img>
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
                <p>{'head(knn.pred)'}</p>
                <img className='img_P1_10'></img>
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
                <p>{'conf.mat'}</p>
                <img className='img_P1_11'></img>
            </div>
            <div className='text_png'>
                <p>{'Sensitivity'}</p>
                <img className='img_P1_12'></img>
            </div>
            <div className='text_png'>
                <p>{'Specificity'}</p>
                <img className='img_P1_13'></img>
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
                <p>{'knn.caret'}</p>
                <img className='img_P1_14'></img>
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
                            {'dat_test<-cbind(pila.nl[test.idx, ],tema[test.idx]) \npreds_knn<-predict(knn.caret, dat_test)'}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{'confusionMatrix(preds_knn,as.factor(dat_test$`tema[test.idx]`))'}</p>
                <img className='img_P1_15'></img>
            </div>
        </section>)
}

export default Project_1;