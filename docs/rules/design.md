# Design.md — Manual de diseño del Portfolio

Reglas visuales obligatorias para cualquier cambio de UI. Léelo junto con `AGENTS.md` antes de tocar estilos.

## Identidad

**Nombre**: "Terminal Portfolio" — tema oscuro inspirado en una terminal de desarrollador. Combinar el lenguaje de línea de comandos (prompts `$`, comandos color verde, respuestas del sistema) con una UI limpia y moderna.

**Gol de percepción**: tech, profesional, con personalidad. Debe leerse como "backend/RPA/Cloud dev" sin decirlo dos veces.

## Paleta

| Rol | Valor | Uso |
|-----|-------|-----|
| Fondo base | `#050b18` | Color de `body` |
| Gradiente 1 | `rgba(32, 25, 84, 0.4)` | Radial púrpura 30% 20% |
| Gradiente 2 | `rgba(18, 41, 89, 0.3)` | Radial azul 70% 80% |
| Gradiente 3 | `rgba(25, 74, 29, 0.3)` | Radial verde 80% 10% |
| Primario | `green-500` (`#22c55e`) | Prompts, CTA, acento principal |
| Secundario | `blue-300`/`blue-400` | Nombres de empresa, links demo |
| Acento extra | `orange-400`, `purple-400`, `yellow-400` | Respuestas del terminal |
| Texto | `white`, `gray-300`, `gray-400` | Jerarquía de texto |
| Superficies | `gray-800/40`, `gray-900`, borde `gray-800`/`gray-700` | Cards, inputs, paneles |

**Reglas**: el verde es el color de acción. No mezclar más de 3 acentos en una vista. Los gradientes del fondo nunca cambian.

## Tipografía

- **Prompts / terminal / comandos**: `JetBrains Mono` (vía `style="font-family: 'JetBrains Mono', monospace;"`). Nunca en texto largo.
- **Body / títulos**: sans-serif por defecto (Tailwind `font-sans`).
- Jerarquía: títulos `text-4xl font-bold text-white`, subtítulos `text-gray-400`.

## Componentes

### Terminal / prompt de sección
Cada sección inicia con un "prompt" de una línea:
```
$ <comando verde>
<span class="subtle-blink text-green-500 ml-1 bg-green-500">:)</span>
```
- `$` en `text-gray-400`, comando en `text-green-500`, con `JetBrains Mono`.
- La carita `:)` parpadea con `.subtle-blink` (definido en `global.css`).

### Cards (project / experiencia)
- Fondo `bg-gray-800/40`, borde `border-1 border-gray-800`, radio `rounded-lg`, padding `p-6`.
- Hover: `hover:translate-y-[-4px]`, `hover:shadow-md hover:shadow-gray-700/40`, `transition duration-500`.
- Chips de tecnología: `bg-gray-800/80 px-4 py-2 rounded-full` con ícono `h-6 w-6` + nombre.

### Botones
- **Primario (CTA verde)**: `bg-green-500 text-black font-semibold` con hover `hover:bg-green-400`.
- **Outline**: `border-2 border-gray-600` con hover `hover:bg-gray-600`.
- Hover estándar: `hover:translate-y-[-2px]` + sombra suave.

### Imágenes de stack / redes
- Íconos de tecnologías en `public/` (nodejs.png, mongodb.png, docker.png, etc.).
- Iconos de redes: `bg-gray-800 rounded-xl p-2` con hover teñido (ej. LinkedIn → `hover:bg-[#0865c3]`).

## Patrones

1. **Animaciones**: como parte del lenguaje terminal. El `.subtle-blink` es el único parpadeo permitido (2.4s, opacidad → 0.1).
2. **Hover consistente**: transiciones de 400-600ms, elevar con `translate-y-[-2px/-4px]`, sombras discretas.
3. **Gradientes del fondo**: `radial-gradient` fijos, `background-attachment: fixed`. No agregar otros fondos.
4. **Respuesta móvil**: el grid escritorio es `xl:grid-cols-2`; en mobile las columnas colapsan a una. El menú mobile es el slide-menu con `sm:hidden`.
5. **Espaciado**: secciones con `min-h-screen` (nunca `h-screen` para contenido largo). Padding lateral `md:px-32 xl:px-46`.

## Reglas finales

1. Antes de una UI nueva, confirma qué componentes existentes puedes reutilizar.
2. No introducir librerías de UI nuevas sin consultar.
3. Cualquier color/fuente nuevo debe venir de esta paleta; si necesitas uno, agrégalo aquí primero y actualiza el doc.
4. Probar responsive antes de dar por terminada una sección.