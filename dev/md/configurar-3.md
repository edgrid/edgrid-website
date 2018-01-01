```
// Valores en config.scss
// Definalos en true o false (sin escribir !default) antes de importar ed-grid
$cssCore    : false;  // como trabajaré en Sass no quiero que compile tooodo el CSS
$cssHelpers : true;  // recomendamos activar las ayudas
$devMode    : false; // cuando quiera activar el modo dev, basta poner esta variable en true
@import "path/ed-grid/ed-grid" // Importamos ed-grid luego de redefinir las variables
```
