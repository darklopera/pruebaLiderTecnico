Presentación de prueba para Líder Técnico

Tissini

Oscar Camilo Lopera Lopera

3113175080

Para el desarrollo de esta prueba se realizó la creación de 2 vistas principales:

Login: En el login tenemos una validación doble para el ingreso de un numero de teléfono. Se está haciendo validación de un servicio web expuesto en el ejemplo, el cual presenta problema de CORS (Intercambio de Recursos de Origen Cruzado) y además se hace la validación con un archivo de configuración parte del Front diseñado; si se requiere agregar más números de teléfono para dar acceso a más usuarios se pueden incluir en el archivo accessUser.js en la ruta pruebalidertecnico/src/enums/accessUser.js.

Catalogo: En el catalogo tenemos la lista de los productos con los cuales cuneta la compañía para su venta, desde este es posible revisar las prendas y colores disponibles y si es el usuario deseo puede hacer una preselección de los productos en su carro de compras, para finalizarse pagando y retirando los productos en 1 de las tiendas de la compañía.

Para ejecutar el proyecto puede ingresar al link:
https://pruebatissini.herokuapp.com/


Para ejecutar el proyuecto en local debe:
-	Clonar el proyecto
-	Instalar las dependencias necesarias (npm i)
-	Ejecutar el proyecto en local (npm start)
-	Abrir en un navegador la url del proyecto (localhost:3000)
