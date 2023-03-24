## 1. Crear un repositorio en local
Primero creamos la carpeta donde se va alojar nuestro repositorio

![captura 1](./content/captura%201.png)

Una vez creada, creamos una carpeta con el nombre de nuestro repositorio

![captura 2](./content/captura%202.png)

Luego, nos metemos en esa carpeta

![captura 3](./content/captura%203.png)

Y después inicializaremos nuestro repositorio

![captura 4](./content/captura%204.png)

## 2. Subir el repositorio a Github

Lo primero que vamos a hacer será crear el repositorio en Github

![captura 5](./content/captura%205.png)

## *Inciso*

Para poder seguir con la práctica tendremos que crear las claves ssh para poder conectarnos al repositorio para ello la generamos con el siguiente comando:

![captura 6](./content/captura%206.png)

![captura 7](./content/captura%207.png)

Una vez hecho se nos habrá creado dos pares de claves llamadas id_rsa y id_rsa.pub

![captura 8](./content/captura%208.png)

Ahora lo que tenemos que hacer será irnos al apartado de "**Settings**", y dentro,al apartado "**SSH and GPG keys**" y pulsamos en "New SSH key"

![captura 9](./content/captura%209.png)

Nos llevará a está pantalla en donde le ponemos un titulo a nuestra clave SSH y pegamos nuestra clave pública en el recuadro que pone "Key" y por último le damos al botón "Add SSH key"

Después de haber hecho el paso anterior podremos seguir con la práctica

![captura 10](./content/captura%2010.png)

Seleccionamos que la URL sea por SSH (recuadro verde claro) y pulsamos en el icono de la derecha para poder copiar la URL (fñecha azul) 
Cuando lo copiemos nos iremos al bash de Git y con el comando **git clone** clonammos el repo en la carpeta que creamos anteriormente.

![captura 12](./content/captura%2012.png)

![captura 13](./content/captura%2013.png)

Como podemos ver nuestro repositorio de Github se ha clonado correctamente.

## 3. Hacer un commit y un push

![captura 14](./content/captura%2014.png)

Lo primero que haremos para poder subir los cambios a nuestro repositorio de Github será ejecutar el comando que hay en la imagen

![captura 15](./content/captura%2015.png)

Luego de ejecutar el comado anterior crearemos un fichero dentro de la carpeta de nnuestro repositorio, en mi caso cree un archivo de javascript pero puede ser ccualquiera.

![captura 16](./content/captura%2016.png)

Después de crear el archivo ejecutaremos el comando **git add .** para poner en modo staging (como preparar el archivo para la subida)

![captura 17](./content/captura%2017.png)

Lo siguiente que vamos a hacer será ejecutar el primer comando de la imagen (flecha azul) y después el segundo comando (flecha roja). Esto nos va a permitir configurar nuestra cuenta de Github en local para poder trabajar con ella

![captura 18](./content/captura%2018.png)

Lo siguiente que vamos a ejecutar es el comando **git commit** con la opción -m para poner un texto descriptivo a la hora de la subida

![captura 19](./content/captura%2019.png)

Por último para subir los cambios a nuestro repositorio en Github tendremos que ejecutar el comando **git push**

## 4. Crear una rama

![captura 20](./content/captura%2020.png)

Con el comando **git branch** creamos una nueva rama llamada *development*

![captura 21](./content/captura%2021.png)

Y para movernos de la rama ***main*** a la rama ***development*** utilizaremos el comando **git checkout** igual que en la imagen 

![captura 22](./content/captura%2022.png)

Modificamos el archivo index.js que teníamos de antes

![captura 23](./content/captura%2023.png)

![captura 24](./content/captura%2024.png)

Añadimos y hacemos un commit de los cambios desde la rama de ***development***

![captura 25](./content/captura%2025.png)

Luego con el comando de la imagen podemos subir los cambios a Github

## 5. Hacer un merge

![captura 26](./content/captura%2026.png)

Nos movemos de la rama ***development*** a la rama ***main***

![captura 27](./content/captura%2027.png)

Y hacemos un merge de la rama ***development*** a la rama ***main*** tambien en esta misma captura podemos ver que no ha habido ningún conflicto

![captura 28](./content/captura%2028.png)

Por último, hacemos un ***git push*** para subir todas las modificaciones a nuestro repositorio en Github. 