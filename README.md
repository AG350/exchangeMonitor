# Monitor de Cotizacion de Monedas Extrangeras

### [endpoint dolar](https://exchange-server-app.herokuapp.com/cotizacion/dolar)
### [Endpoint euro](https://exchange-server-app.herokuapp.com/cotizacion/euro)
### [Endpoint real](https://exchange-server-app.herokuapp.com/cotizacion/real)
### [Demo Front](https://get-quote-app.herokuapp.com/)

_ Las demos fueron implementadas en Heroku

## consumo de api: [Cambio](https://cambio.today/api/quotes/full)

### Instalación 🔧
_Esta aplicacion esta desarrollada en entorno NodeJS, por lo que necesitara instalarlo, si no lo tiene puede acceder en el siguiente link y seguir los pasos que indica.

```
https://nodejs.org/es/
```

_Para instalar las dependencias y ejecutar la API necesita acceder al directorio /api y desde la terminal ejecutar los siguientes comando
```
npm install

npm start
```

_Para instalar las dependencias y ejecutar el servicio cliente necesita acceder al directorio /client y desde la terminal ejecutar el siguiente comando

```
npm install

npm start
```
_La aplicacion estara corriendo en localhost:3000, desde cualquier navegador ingrese a la misma. _

_las url de la api las acceden desde localhost:9000 :

/cotizacion/dolar
/cotizacion/euro
/cotizacion/real 

/cotizacion/selected/\< [CODIGOS DISPONIBLES](https://cambio.today/api/currencies/list) \>


