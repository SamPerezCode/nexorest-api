# NexoRest API

Backend de NexoRest, una plataforma de gestion para restaurantes, cafeterias,
panaderias y otros negocios gastronomicos.

El primer MVP cubrira el flujo operativo entre meseros y cocina: apertura de
ordenes por mesa, registro de productos, generacion de comandas, preparacion,
adiciones, cancelaciones y cierre de la orden con trazabilidad historica.

> Este repositorio contiene solamente el backend. El frontend futuro vivira en
> un proyecto separado llamado `nexorest-web`.

## Tecnologias previstas

- Node.js y TypeScript.
- Express y API REST.
- MySQL 8 con `mysql2/promise`.
- Zod para validacion.
- JWT y bcrypt para autenticacion.
- ESLint y Prettier.
- Socket.IO en una etapa posterior.

## Estado actual

**Bloque actual:** configuracion de la base tecnica.

**Ultimo avance verificado:** proyecto Node.js inicializado mediante
`npm init -y`.

## Checklist del proyecto

Una tarea se marca como terminada solo despues de implementarla y comprobar
que funciona.

### Configuracion

- [x] Confirmar la carpeta independiente `nexorest-api`.
- [x] Inicializar el proyecto con Node.js y npm.
- [ ] Inicializar el repositorio Git.
- [ ] Configurar TypeScript.
- [ ] Crear la estructura inicial de directorios.
- [ ] Configurar variables de entorno.
- [ ] Crear `.gitignore` y proteger informacion sensible.
- [ ] Configurar ESLint.
- [ ] Configurar Prettier.
- [ ] Crear scripts de desarrollo, compilacion y ejecucion.

### API y servidor

- [ ] Instalar y configurar Express.
- [ ] Separar `app.ts` y `server.ts`.
- [ ] Crear `GET /api/health`.
- [ ] Configurar rutas.
- [ ] Crear middleware para rutas no encontradas.
- [ ] Crear manejo centralizado de errores.
- [ ] Definir el formato basico de respuestas HTTP.

### Base de datos

- [ ] Disenar el modelo conceptual del MVP.
- [ ] Analizar entidades y relaciones.
- [x] Elegir diseno conceptual previo con construccion progresiva por modulos.
- [x] Elegir migraciones SQL pequenas y numeradas con seeds separados.
- [ ] Crear la estructura para migraciones y seeds.
- [ ] Crear `nexorest_db` en MySQL.
- [ ] Configurar las variables de conexion.
- [ ] Configurar el pool con `mysql2/promise`.
- [ ] Comprobar la conexion desde el backend.
- [ ] Crear consultas de verificacion.
- [ ] Crear progresivamente tablas, llaves y restricciones.
- [ ] Agregar indices justificados por las consultas.
- [ ] Agregar datos iniciales mediante seeds controlados.
- [ ] Implementar transacciones y rollback.
- [ ] Verificar las reglas de historial y trazabilidad.

### Modulos del MVP

- [ ] Roles.
- [ ] Usuarios.
- [ ] Autenticacion.
- [ ] Autorizacion.
- [ ] Categorias.
- [ ] Productos.
- [ ] Mesas.
- [ ] Ordenes.
- [ ] Detalles de ordenes.
- [ ] Comandas.
- [ ] Adiciones.
- [ ] Cancelaciones.
- [ ] Historial de estados.
- [ ] Registro de reimpresiones.

### Validacion y seguridad

- [ ] Validar entradas con Zod.
- [ ] Almacenar contrasenas con hash de bcrypt.
- [ ] Implementar autenticacion con JWT.
- [ ] Proteger variables sensibles.
- [ ] Validar roles y permisos.
- [ ] Validar transiciones de estado.
- [ ] Evitar confiar en precios o totales enviados por el frontend.

### Verificacion

- [ ] Preparar pruebas manuales con Postman.
- [ ] Ejecutar consultas de comprobacion en MySQL.
- [ ] Verificar casos exitosos.
- [ ] Verificar casos de error.
- [ ] Verificar transacciones y rollback.
- [ ] Verificar permisos por rol.

### Tiempo real

- [ ] Estudiar los fundamentos de Socket.IO.
- [ ] Conectar cliente y servidor.
- [ ] Crear eventos de ordenes.
- [ ] Crear eventos de cocina.
- [ ] Gestionar la reconexion.
- [ ] Recuperar el estado mediante la API REST.

### Seguimiento del aprendizaje

- [ ] Mantener un registro de conceptos aprendidos.
- [ ] Mantener un registro de comandos aprendidos.
- [ ] Mantener un registro de consultas SQL aprendidas.
- [ ] Documentar errores relevantes y su solucion.
- [ ] Documentar decisiones tecnicas.
- [ ] Documentar pendientes de etapas posteriores.

## Decisiones tecnicas

### DT-001: arquitectura inicial

NexoRest se construira como un monolito modular. Los modulos estaran separados
por responsabilidad de negocio, pero se desplegaran como una sola aplicacion.

### DT-002: acceso a datos

Se utilizara MySQL directamente mediante SQL y `mysql2/promise`. No se usara
Prisma durante este MVP.

### DT-003: evolucion del esquema

Antes de crear las tablas se definira el modelo conceptual minimo del MVP. La
implementacion se hara progresivamente mediante migraciones SQL pequenas,
numeradas y guardadas en el repositorio. Los datos iniciales se mantendran en
scripts de seeds separados.

### DT-004: endpoint de salud

`GET /api/health` sera una comprobacion sencilla de que el proceso HTTP esta
activo. La disponibilidad de MySQL se comprobara por separado para distinguir
un fallo del servidor web de un fallo de infraestructura.

## Fuera del alcance del primer MVP

- Inventario, recetas y produccion.
- Pedidos web a domicilio.
- Caja, arqueos y pagos en linea.
- Facturacion electronica.
- Integracion con WhatsApp.
- Impresion termica automatica.

## Proximo paso

Configurar los metadatos basicos de `package.json` y preparar TypeScript. Cada
paso se implementara y verificara antes de avanzar al siguiente.
