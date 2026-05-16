# JG DISTRIBUIDORA — Proyecto Web

## Descripción del Proyecto
Sitio web para JG Distribuidora, tienda virtual de fragancias reembazadas ubicada en Jamundí, Valle del Cauca, Colombia.

**Tipo de negocio:** Tienda virtual de esencias/fragancias reembazadas (NO son perfumes originales — son esencias inspiradas).
**WhatsApp:** 3128682456
**Ubicación:** Jamundí, Valle del Cauca, Colombia
**Cobertura:** Envíos a nivel nacional
**Compras:** Al por mayor y al detal

## Stack Tecnológico
- HTML + CSS + JS puro (sin frameworks)
- Múltiples páginas HTML estáticas
- Sin dependencias externas excepto Google Fonts
- Publicación: GitHub Pages

## Estructura del Proyecto
```
JG DISTRIBUIDORA/
├── index.html              ← Página principal
├── productos.html          ← Catálogo de productos con filtros y carrito
├── politicas.html          ← Políticas (envíos, devoluciones, datos personales)
├── CLAUDE.md               ← Este archivo
├── PROYECTO.md             ← Documentación del proyecto
└── assets/
    ├── inventario.xlsx     ← Catálogo de productos (fuente de verdad)
    ├── Banner/             ← Banner1.webp, Banner2.webp, Banner3.webp
    ├── Productos/          ← Imagen1.png … Imagen105.png
    ├── Marcas/             ← Logos SVG de marcas (11 logos)
    └── Presentación/       ← Fotos de envases (1.jpeg–6.webp)
```

## Skill Utilizada
`C:\Users\Manuel\OneDrive\IA\SKILLS\kit-web-scrolling` — Genera webs profesionales con animaciones de scroll, parallax y diseño premium. Un único archivo HTML autocontenido con CSS/JS inline.

> Para este proyecto se genera múltiples archivos HTML dado que hay páginas separadas (principal, productos, políticas).

## Inventario de Productos
- **Total:** 105 referencias
- **Dama:** #1–25 (25 productos)
- **Caballero:** #26–74 (49 productos)
- **Unisex:** #75–105 (31 productos)
- **Imágenes:** assets/Productos/Imagen{N}.png (donde N = número de producto)

## Logos de Marcas Disponibles
Montblanc, Dior, Calvin Klein, Rabanne, Gucci, Carolina Herrera, Chanel, Lattafa, Lacoste, Afnan, Benetton

## Presentaciones de Fragancias
- **Tubular (Cilindro):** 30ml, 60ml, 100ml
- **Cuadrada (Corrugado):** 60ml, 100ml
- Imágenes en: assets/Presentación/

## Métodos de Pago
Transferencia, Nequi, Efectivo, Daviplata, Dale, Llave, NU
> **Regla:** No se hacen envíos sin pago previo.

## GitHub
- **Usuario:** ManuelMina
- **Token PAT:** En archivo de credenciales
- **Repo destino:** `jg-distribuidora`
- **URL GitHub Pages:** `https://manuelMina.github.io/jg-distribuidora`

## Reglas del Proyecto
1. Fondo claro, elegante y profesional (NO oscuro ni sobrio)
2. Aclarar siempre que son ESENCIAS INSPIRADAS, no perfumes originales
3. WhatsApp 3128682456 para consultas y pedidos
4. El carrito envía mensaje al WhatsApp con lista de productos + nombre del cliente
5. No mostrar precios fijos si no están en el inventario — consultar por WhatsApp
6. Filtros en productos: por género (Dama / Caballero / Unisex) y por marca
7. Cinta de marcas animada (scroll automático de derecha a izquierda)
8. Sección de 15 perfumes populares al azar con movimiento de derecha a izquierda
9. Políticas en página separada (envíos, devoluciones, datos personales)
