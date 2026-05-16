# PROYECTO.md — JG Distribuidora Web

## Estado del Proyecto
**Fecha inicio:** 2026-05-12
**Estado:** EN PLANIFICACIÓN — Pendiente respuesta preguntas iniciales

---

## Resumen del Encargo
Crear sitio web completo para JG Distribuidora, tienda virtual de fragancias reembazadas. El diseño se inspira en disfragancias.com. Publicación en GitHub Pages.

---

## Páginas a Crear

### 1. `index.html` — Página Principal
- [ ] Navbar fijo con logo, links a secciones y carrito (icono con contador)
- [ ] Hero con banner (Banner seleccionado de assets/Banner/)
- [ ] Sección "Sobre nosotros" — tienda virtual, Jamundí, envíos nacionales
- [ ] Cinta de logos de marcas (scroll automático derecha → izquierda)
- [ ] Sección de presentaciones de envases (Tubular y Cuadrada)
- [ ] Sección "Métodos de pago"
- [ ] Sección "15 Perfumes Populares" (carrusel automático derecha → izquierda)
- [ ] Footer con links, WhatsApp, políticas

### 2. `productos.html` — Catálogo
- [ ] Filtros: Dama / Caballero / Unisex / Todos
- [ ] Filtro por marca
- [ ] Cards de producto: imagen, referencia, marca, género
- [ ] Botón "Agregar al carrito" por producto
- [ ] Botón directo de WhatsApp por producto

### 3. `politicas.html` — Políticas
- [ ] Política de envíos
- [ ] Política de devoluciones
- [ ] Política de tratamiento de datos personales
- [ ] Nota clara: "Vendemos esencias inspiradas, NO perfumes originales"

### 4. Carrito (componente global)
- [ ] Panel deslizante lateral (drawer)
- [ ] Agregar producto + cantidad
- [ ] Campo nombre del cliente (obligatorio)
- [ ] Botón "Finalizar pedido" → genera mensaje WhatsApp con lista de productos

---

## Assets Disponibles

| Asset | Ruta | Estado |
|-------|------|--------|
| Banner 1 (Lujo Árabe - oscuro) | assets/Banner/Banner1.webp | ✅ |
| Banner 2 (Mamá - claro/floral) | assets/Banner/Banner2.webp | ✅ |
| Banner 3 (Decants - verde claro) | assets/Banner/Banner3.webp | ✅ |
| Productos Imagen1–105 | assets/Productos/Imagen{N}.png | ✅ |
| Logo Montblanc | assets/Marcas/montblanc_245x.svg | ✅ |
| Logo Dior | assets/Marcas/dior_245x.svg | ✅ |
| Logo Calvin Klein | assets/Marcas/calvin-klein_245x.svg | ✅ |
| Logo Rabanne | assets/Marcas/Rabanne_245x.svg | ✅ |
| Logo Gucci | assets/Marcas/gucci_245x.svg | ✅ |
| Logo Carolina Herrera | assets/Marcas/carolina-herrera_245x.svg | ✅ |
| Logo Chanel | assets/Marcas/chanel_245x.svg | ✅ |
| Logo Lattafa | assets/Marcas/lattafa_245x.svg | ✅ |
| Logo Lacoste | assets/Marcas/Lacoste_245x.svg | ✅ |
| Logo Afnan | assets/Marcas/Afnan_245x.svg | ✅ |
| Logo Benetton | assets/Marcas/Benetton_245x.svg | ✅ |
| Presentación Corrugado 100ml | assets/Presentación/1.jpeg | ✅ |
| Presentación Cilindro 30ml | assets/Presentación/4.jpeg | ✅ |
| Presentación (otras) | assets/Presentación/2,3,5.jpeg + 6.webp | ✅ |

---

## Inventario de Productos (105 referencias)

### Dama (1–25)
| # | Referencia | Marca |
|---|-----------|-------|
| 1 | Cloud | Ariana Grande |
| 2 | C. Nº 5 Classic | Chanel |
| 3 | Moon Sparkle | — |
| 4 | Thank U Next | — |
| 5 | Delilah | — |
| 6 | Good Girl | Carolina Herrera |
| 7 | Noble Blush | — |
| 8 | 212 VIP | Carolina Herrera |
| 9 | Heiress Pink | — |
| 10 | Toy 2 | — |
| 11 | Osadía | Yanbal |
| 12 | Yara Elixir | Lattafa |
| 13 | Yara | Lattafa |
| 14 | Cielo | — |
| 15 | Passport | — |
| 16 | Burberry | Burberry |
| 17 | 360° | — |
| 18 | Ralph Lauren | Ralph Lauren |
| 19 | Fantasy | Britney Spears |
| 20 | Sorbetto Rosso | — |
| 21 | Loquito Por Ti | — |
| 22 | Issey Miyake | Issey Miyake |
| 23 | Bombshell | Victoria's Secret |
| 24 | La Vida Es Bella | Lancôme |
| 25 | Tommy | Tommy Hilfiger |

### Caballero (26–74)
| # | Referencia | Marca |
|---|-----------|-------|
| 26 | Angel | Mugler |
| 27 | Bleu de Chanel | Chanel |
| 28 | Curve | Liz Claiborne |
| 29 | Diesel Plus | Diesel |
| 30 | Blue Seduction | — |
| 31 | 9PM | Afnan |
| 32 | 360 | — |
| 33 | Blue Jeans | Versace |
| 34 | Eros | Versace |
| 35 | Freiche | Versace |
| 36 | Fahrenheit | Dior |
| 37 | Winner Sport | Ésika |
| 38 | Dorsay | Ésika |
| 39 | Solo | Yanbal |
| 40 | Odyssey Wild One | Armaf |
| 41 | Armaf Odyssey Spectra | Armaf |
| 42 | Odyssey Mandarin Sky | Armaf |
| 43 | Dissey Pour Homme | Issey Miyake |
| 44 | Issey Miyake | Issey Miyake |
| 45 | Black XS L'Excès | Paco Rabanne |
| 46 | Montblanc Legend Night | Montblanc |
| 47 | Nitro Red | — |
| 48 | Club de Nuit | Armaf |
| 49 | Hawas Tropical | Rasasi |
| 50 | Ultra Male | Jean Paul Gaultier |
| 51 | Jean Paul Gaultier | Jean Paul Gaultier |
| 52 | Yves Saint Laurent M7 | YSL |
| 53 | Nautica Voyage | Nautica |
| 54 | Pour Homme | BVLGARI |
| 55 | Agua de Bvlgari | BVLGARI |
| 56 | Marine Bvlgari | BVLGARI |
| 57 | Oud for Glory | — |
| 58 | Hugo Orange | Hugo Boss |
| 59 | Creed Aventus | Creed |
| 60 | Givenchy Blue | Givenchy |
| 61 | Moschino Toy 2 | Moschino |
| 62 | Maluma Garnet | — |
| 63 | Asad | Lattafa |
| 64 | Asad Bourbon | Lattafa |
| 65 | One Million Lucky | Paco Rabanne |
| 66 | Starwalker | Montblanc |
| 67 | Swiss Army | — |
| 68 | Lacoste Red | Lacoste |
| 69 | Lacoste Blanca | Lacoste |
| 70 | Tommy | Tommy Hilfiger |
| 71 | Clinique Happy | Clinique |
| 72 | Invictus | Paco Rabanne |
| 73 | 212 VIP Black | Carolina Herrera |
| 74 | 212 VIP | Carolina Herrera |

### Unisex (75–105)
| # | Referencia | Marca |
|---|-----------|-------|
| 75 | Kahmrah | Lattafa |
| 76 | Amethyste | Lattafa |
| 77 | Pink to Pink | Lattafa |
| 78 | Noble Blush | Lattafa |
| 79 | Musuman White Intense | Lattafa |
| 80 | Arrurru | — |
| 81 | Alexandria II | — |
| 82 | Orientica Oud Saffron | Orientica |
| 83 | Velvet Gold | Orientica |
| 84 | Azure Fantasy | Orientica |
| 85 | Amber Rogue | Orientica |
| 86 | Amber Noir | Orientica |
| 87 | Royal Amber | Orientica |
| 88 | Fujairah | — |
| 89 | Alhmarain Amber Oud | Al Haramain |
| 90 | Al Haramain Manège Rouge | Al Haramain |
| 91 | Al Haramain Amber Oud Gold | Al Haramain |
| 92 | Club de Nuit Milestone | Armaf |
| 93 | Tom Ford Ombré Leather 16 | Tom Ford |
| 94 | Ombré Nomade | Louis Vuitton |
| 95 | Baccarat Rouge | Maison Francis Kurkdjian |
| 96 | Intense Café | — |
| 97 | 9 PM Rebel | Afnan |
| 98 | Stallion 53 | — |
| 99 | Sceptre Malachite | — |
| 100 | Layton | Parfums de Marly |
| 101 | Honor y Gloria | — |
| 102 | Juego de Espadas | — |
| 103 | Erba Pura Ferjoff | Sospiro |
| 104 | Bharara King | Bharara |
| 105 | CK One / It You | Calvin Klein |

---

## Preguntas Pendientes (antes de diseñar)
_Ver mensaje en chat_

---

## Historial de Cambios

| Fecha | Cambio | Autor |
|-------|--------|-------|
| 2026-05-12 | Creación de CLAUDE.md y PROYECTO.md | Claude |
| 2026-05-12 | Revisión de assets, inventario y banners | Claude |

---

## Pasos de Desarrollo (checklist)

- [ ] **PASO 0:** Responder preguntas iniciales y dar visto bueno
- [ ] **PASO 1:** Crear `index.html` (página principal con todas las secciones)
- [ ] **PASO 2:** Crear `productos.html` (catálogo con filtros y carrito)
- [ ] **PASO 3:** Crear `politicas.html` (3 políticas en una sola página)
- [ ] **PASO 4:** Probar carrito → mensaje WhatsApp en todos los pasos
- [ ] **PASO 5:** Probar responsivo en móvil, tablet y desktop
- [ ] **PASO 6:** Crear repositorio GitHub `jg-distribuidora`
- [ ] **PASO 7:** Subir archivos y activar GitHub Pages
- [ ] **PASO 8:** Entregar URL final al cliente
