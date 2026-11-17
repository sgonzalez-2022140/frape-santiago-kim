# Cisne Digital · Vite + React + TypeScript

Página responsive para una agencia de diseño y desarrollo web enfocada en pymes. Diseño marfil, terracota y crema, con la taza y el cisne como identidad.

## Instalación sobre TU proyecto actual

**No necesitas volver a crear el proyecto Vite.**

1. Haz una copia de seguridad de tu proyecto, o confirma tus archivos en Git.
2. Extrae este ZIP. Copia su contenido **dentro de `cisne-digital/`**, la carpeta que contiene `package.json`.
3. Permite reemplazar los archivos `src/App.tsx`, `src/App.css`, `src/index.css`, `src/main.tsx`, `index.html` y `vite.config.ts`. Se añaden los archivos de `src/Components` y `src/data`.
4. **Conserva tu propio `public/logo.png`**. El ZIP no trae ningún logo que lo sobrescriba.
5. Abre la terminal en `cisne-digital/` y ejecuta:

```powershell
npm install
npm install lucide-react tailwindcss @tailwindcss/vite
npm run dev
```

6. Abre la dirección `http://localhost:5173/` que indique Vite.

## Configurar datos de contacto

Copia `.env.example` a `.env`. Cambia las variables:

```env
VITE_WHATSAPP_NUMBER=502XXXXXXXX
VITE_CONTACT_EMAIL=
```

* El número debe llevar código internacional sin `+` (Guatemala `502`) y debe ser el **número real de ustedes**, no el ejemplo.
* Si configuras WhatsApp, el formulario abrirá un mensaje listo para que el cliente confirme y envíe.
* Si no hay WhatsApp y hay correo, abre un borrador de correo.
* Si no configuras ninguno, la página ofrecerá **copiar** la solicitud. No tiene backend ni guarda solicitudes.
* Reinicia `npm run dev` después de modificar `.env`.

## Archivos principales

- `src/Components/Navbar.tsx` — Navegación responsive.
- `src/Components/Hero.tsx` — Principal con el logo.
- `src/Components/Services.tsx` — Servicios disponibles.
- `src/Components/WhyUs.tsx` — Propuesta de valor.
- `src/Components/Process.tsx` — Etapas del proceso.
- `src/Components/Portfolio.tsx` — **Demos conceptuales**, no clientes reales.
- `src/Components/Pricing.tsx` — Planes sin precios ficticios.
- `src/Components/About.tsx` — Historia del estudio.
- `src/Components/FAQ.tsx` — Preguntas frecuentes.
- `src/Components/Contact.tsx` — Formulario funcional mediante WhatsApp, mailto o copia.
- `src/Components/Footer.tsx` — Pie de página.
- `src/data/siteData.ts` — Texto editable de servicios, planes y preguntas.
- `src/App.css` — Estilos y variables de color.

## Edición de colores

Modifica las variables `:root` de `src/App.css`:

```css
--ivory: #fffaf4;
--terracotta: #af5e45;
--terracotta-deep: #873b2b;
--cream: #f7ede2;
--cocoa: #30211e;
```

## Notas

- El nombre `Cisne Digital` es editable en `Brand.tsx`, en `index.html` y en el contenido.
- El proyecto tiene una sola página con navegación por secciones, sin rutas adicionales.
- Las tarjetas del portafolio son ilustrativas y lo dicen explícitamente.
- Los botones de redes no incluyen links inventados.
- Google Fonts requiere internet; existen tipografías alternativas locales.
- Si Vite muestra un error relacionado con Node, consulta la versión que exija la instalación de Vite de tu proyecto.
