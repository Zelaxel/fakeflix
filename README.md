# Fakeflix
Alejandro Ramírez Lorenzo, Edwin Osagie Batista, Jesús Toro del Dedo


## Contenido
- [Introducción](#introducción)
- [Estructura del código](#estructura-del-código)
	- [Componentes](#componentes)
	- [Páginas](#páginas)
- [Estructura de los datos](#estructura-de-los-datos)
	- [Punto de partida](#punto-de-partida)
	- [Modelo](#modelo)
	- [Estructura de Firebase](#estructura-de-firebase)


## Introducción
El objetivo del tercer _sprint_ es la migración a **Angular** de la aplicación desarrollada en el _sprint_ anterior, así como la implementación de **Firebase**.


## Estructura del Código

En este apartado se detallarán los componentes creados y su funcionalidad.

En primer lugar, es destacable que, si bien **Angular** no hace distinción entre componentes y páginas,
en el desarrollo se han tratado de forma separada para mantener cierto grado de limpieza.
De este modo, ha quedado la siguiente estructura de directorios:

```
src/app/
	components/
		header/
		season/
		title-item/
		user-panel/
	pages/
		homepage-guest/
		homepage/
		login/
		profile-editor/
		signin/
		title-details/
		title-grid/
		video-player/
```

A continuación, se detalla la funcionalidad de cada componente y página.

### Componentes
|Componente | Descripción|
|:-:|:--|
|**Header** | Encabezado de las páginas y navegabilidad entre las mismas. Además, contiene una barra de búsqueda y el panel de usuario.|
|**Season** | Representa una temporada de una serie. Contiene una lista con los episodios.|
|**Title Item** | Representa un título, tanto en la lista general de títulos como en cualquier otra que se pueda presentar.| 
|**User Panel** | Panel de usuario. Muestra los datos del usuario y permite su edición. Contiene el botón de cerrar sesión.|

### Páginas

|Página | Descripción|
|:-:|:--|
|**Homepage Guest** | Página de inicio para usuarios sin autenticar. Permite el acceso al inicio de sesión y a la creación de cuentas.|
|**Homepage** | Página de inicio. Muestra una serie de títulosrecomendados para el usuario.|
|**Log In** | Página de inicio de sesión.|
|**Profile Editor** | Permite editar el usuario.|
|**Sign In** | Página de creación de usuarios.|
|**Title Details** | Vista detallada de un título. Muestra el nombre, la descripción y la portada de un título, así como una lista de temporadas con sus episodios en el caso de las series.|
|**Title Grid** | Lista de títulos. Permite el filtrado por tipo de título, por títulos recientes y por nombre y etiquetas del título gracias a las funcionalidades del **header**.|
|**Video Player** | Reproductor de vídeo. Tiene las funcionalidades básicas de los reproductores de vídeo.|


## Estructura de los datos
En este _sprint_ se pretendía pasar los datos, previamente almacenados en ficheros _JSON_, a la plataforma **Firebase**. 
Para el proyecto, se ha decidido usar los siguientes servicios de la plataforma:
- Firestore
- Authentication

No se ha considerado el uso de **Firebase storage** por la obligatoriedad de su coste económico.
En su lugar, se ha empleado un repositorio de github para almacenar lo que de otro modo hubiera estado en el almacenamiento de **Firebase** (imágenes). 
El repositorio en cuestión es el siguiente: [fakeflix-assets](https://github.com/fakeflix-team/fakeflix-assets).


### Punto de partida
Para comprender la estructura elegida para la base de datos, es necesario conocer el origen de los datos.
En el sprint anterior se contaba con tres ficheros _JSON_ distintos para el almcacenaje de los datos:

```
data/
	titles.json
	popular-titles.json
	users.json
```

- **titles** almacenaba los datos relativos a los títulos mostrados en la página.
- **users** guardaba el registro de los usuarios.
- **popular-titles** contenía los identificadores de los títulos recomendados en la pantalla de inicio de la aplicación.


### Modelo

A continuación, se muestra el diagrama de clases del modelo de la página.

![UML del modelo](https://raw.githubusercontent.com/fakeflix-team/fakeflix-assets/refs/heads/main/fakeflix-readme/model_uml.png)

Se cuenta con las interfaces **Movie**, para representar películas y **Series**, para representar series.
Ambas interfaces heredan la interfaz **Title**.

Todos los títulos (**Title**) tienen identificador, nombre, descripción, portada y etiquetas.
Además, es destacable la inclusión de los campos _booleanos_ **featured** y **popular**,
que ahora son los responsables de determinar qué títulos se deben mostrar en la página de inicio,
eliminando la necesidad de la colección _popular-titles_.

Las películas (**Movie**) cuentan con una _URL_ a su fichero de video correspondiente.

Las **Series**, por otro lado, están compuestas por temporadas (**Seasons**), que a su vez están compuestas por episodios (**Episodes**). 
Cada episodio tiene un nombre propio y la _URL_ a su vídeo correspondiente.


### Estructura de Firebase
Como se ha mencionado anteriormente, ya no es necesario contar con una colección separada para los títulos recomendados.
Por ello, únicamente se han incluido dos colecciones en el **Firebase**:

- **titles**, que almacena los títulos.
- **users**, que almacena los datos de los usuarios.

A continuación, se muestran los datos en **Firebase**:

#### Titles
![Títulos en Firebase](https://raw.githubusercontent.com/fakeflix-team/fakeflix-assets/refs/heads/main/fakeflix-readme/firebase_titles2.png)

Hay que destacar el campo **type**.
Si bien este campo no aparecía en el modelo previamente expuesto, su inclusión facilita la segregación en series y películas en el apartado técnico.

#### Users
![Usuarios en Firebase](https://raw.githubusercontent.com/fakeflix-team/fakeflix-assets/refs/heads/main/fakeflix-readme/firebase_users.png)


