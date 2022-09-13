
const contenedorListaMusic=document.getElementById('lista-music');
const controles=document.getElementById('controles');

const menuMusic=document.getElementById('menuMusic');
const titlePlaylist=document.getElementById('titlePlaylist');
const playDescription=document.getElementById('playDescription');
const imgAlbum=document.getElementById('imgAlbum');
const album=document.getElementById('album');

//EVENTOS
const btnReaccion=document.getElementById('reaccion'); //EVENTO REACCION DEL CORAZON
menuMusic.addEventListener('click',cargarInfo); // EVENTO DEL MENU LISTA DE REPRODUCION

/*Funcion Boton Corazon*/
btnReaccion.addEventListener('click',likear);
let estado= 0;
function likear (){
    if (estado==0){
        btnReaccion.classList.add('reaccion-activa');
        estado=1;
    }else if (estado===1){
        btnReaccion.classList.remove('reaccion-activa');
        estado=0
    }
}
/*Funcion Cargar informacion*/
function cargarInfo (e){
    let jsonurl='';
    let titlePlay='';
    let descripcionPlay ='';
    let srcImg='';

    if(e.target.classList.contains('playEstudiar')){
        jsonurl='Model/musicJSON/estudiando.json';
        titlePlay='Play List para estudiar';
        descripcionPlay='La mejor Música para estudiar';
        srcImg='../images/imgEstudiar.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url (../images/imgEstudiar.jpg)";

    }else if(e.target.classList.contains('playRock')){
        jsonurl='Model/musicJSON/rock.json';
        titlePlay='Play List para Rockear';
        descripcionPlay='La mejor Música para Rockear';
        srcImg='../images/imgRock.jpg';
        album.style.background="linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url (../images/imgRock.jpg)";

    }else if(e.target.classList.contains('playDeporte')){
        jsonurl='Model/musicJSON/deporte.json';
        titlePlay='Play List para hacer deporte';
        descripcionPlay='La mejor Música para hacer deporte';
        srcImg='../images/imgSport.jpg';
        album.style.background="linear-gradient(to right, rgba(2,2,2, 0.726) 15%, rgba (8,8,8, 0.829)), url(images/imgSport.jpg)";
    }
    titlePlaylist.innerHTML=titlePlay;
    playDescription.innerHTML=descripcionPlay;
    imgAlbum.src=srcImg;

    cargarMusica(jsonurl);
}