# Repositorio de Clientes — Manuel Mina

Sincronización automática de carpetas de clientes con GitHub y GitHub Pages.

---

## Estructura esperada

```
CLIENTES/
├── ACTUALIZAR_REPOS.bat     ← ejecutable principal (doble clic)
├── sync-clientes.ps1        ← lógica de sincronización
├── README.md                ← este archivo
│
├── NombreCliente1/
│   ├── index.html           ← página principal del cliente
│   └── ...otros archivos...
│
├── NombreCliente2/
│   └── index.html
└── ...
```

---

## Uso

### Sincronización manual

1. **Doble clic** en `ACTUALIZAR_REPOS.bat`
2. El script detecta automáticamente las carpetas nuevas o modificadas
3. Sube los cambios a GitHub
4. Muestra los links de publicación de cada cliente

### Primera vez

La primera ejecución pedirá autenticación de GitHub:
- **Usuario**: `ManuelMina`
- **Contraseña**: un **Personal Access Token** (NO tu contraseña de GitHub)

Para generar un token:
1. Ir a https://github.com/settings/tokens
2. `Generate new token (classic)`
3. Activar permisos: `repo`
4. Copiar el token generado (solo se muestra una vez)

Las credenciales quedan guardadas en Windows Credential Manager para usos futuros.

---

## Links de publicación

Los links de GitHub Pages siguen este formato:

```
https://manuelmina.github.io/clientes/NombreCliente/index.html
```

> **Requisito**: GitHub Pages debe estar activado en el repositorio.
> Ir a: `https://github.com/ManuelMina/clientes` → Settings → Pages → Branch: `main`

---

## Automatización (opcional)

Para que la sincronización ocurra **automáticamente** cada vez que se modifique la carpeta:

1. Abrir **Programador de tareas** de Windows
2. Crear tarea nueva → Desencadenador: `Al modificarse un archivo` o `Al iniciar sesión`
3. Acción: ejecutar `ACTUALIZAR_REPOS.bat`

O con Task Scheduler por horario (ej. cada hora):
```
schtasks /create /tn "SyncClientes" /tr "\"C:\Users\Manuel\OneDrive\IA\CLIENTES\ACTUALIZAR_REPOS.bat\"" /sc hourly
```

---

## Notas de seguridad

- El token de GitHub **nunca** debe estar escrito en los scripts — se usa Windows Credential Manager
- Los scripts `sync-clientes.ps1` y `ACTUALIZAR_REPOS.bat` están en el `.gitignore` y no se suben al repo público
