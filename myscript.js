console.log("Iniciando Programa");

var selectSlider = 0;//Index del arreglo imagenes
var imagenes = []; // arreglo con los src de las imagenes
window.addEventListener("load", function () {
  imagenes[0] = "archivos/image/image1.jpg";
  imagenes[1] = "archivos/image/image2.jpg";
  imagenes[2] = "archivos/image/image3.jpg";
  imagenes[3] = "archivos/image/image4.jpg";
  imagenes[4] = "archivos/image/image5.jpg";
  this.document.sliderImg.src = imagenes[selectSlider];
});

const desplazarDerecha = () => {
  console.log("Tendria que desplazar a la derecha: ", selectSlider);
  if (selectSlider < imagenes.length - 1) {
    selectSlider++;
    
  } else {
    selectSlider = 0;
  }
  this.document.sliderImg.src = imagenes[selectSlider];
};


const desplazarIzquierda = () => {
  console.log("Tendria que desplazar a la izquierda: ", selectSlider);
  if (selectSlider > 0) {
    selectSlider--;
  } else {
    selectSlider = 6;
  }
  this.document.sliderImg.src = imagenes[selectSlider];
};
