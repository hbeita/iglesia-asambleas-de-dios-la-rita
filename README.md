# Iglesia Asambleas de Dios La Rita

Un sitio web moderno y responsive para la Iglesia Asambleas de Dios La Rita, construido con React, Tailwind CSS y shadcn/ui.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional optimizada para conversión
- **Responsive**: Funciona perfectamente en dispositivos móviles, tablets y desktop
- **SEO Optimizado**: Meta tags, structured data y optimización para motores de búsqueda
- **Accesible**: Navegación por teclado, alt text y contraste apropiado
- **Rápido**: Optimizado para Core Web Vitals y carga rápida
- **Formularios**: Integración con Netlify Forms para el formulario de contacto

## 📱 Páginas

- **Inicio**: Hero section, horarios de servicio, eventos destacados, ministerios y testimonios
- **Ministerios**: Grid de ministerios con filtros y modales de detalle
- **Sobre Nosotros**: Historia, misión, visión, valores, equipo pastoral y declaración de fe
- **Eventos**: Calendario de eventos con filtros y exportación a Google Calendar
- **Donar**: Métodos de donación, transparencia financiera y versículos bíblicos
- **Contacto**: Formulario de contacto, información de la iglesia y mapa

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 con Vite
- **Styling**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Routing**: React Router DOM
- **Formularios**: React Hook Form con Zod validation
- **Deploy**: Netlify

## 🎨 Paleta de Colores

- **Primario**: Azul (#2563eb)
- **Secundario**: Dorado (#f59e0b)
- **Acento**: Verde (#10b981)
- **Neutros**: Grises y blancos de Tailwind

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/iglesia-asambleas-dios-la-rita.git
cd iglesia-asambleas-dios-la-rita
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🚀 Deploy

El proyecto está configurado para deploy automático en Netlify:

1. Conecta tu repositorio a Netlify
2. El build se ejecutará automáticamente
3. El sitio estará disponible en tu dominio de Netlify

### Configuración de Netlify

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                 # Componentes base de shadcn/ui
│   ├── layout/             # Header, Footer, Layout
│   └── sections/           # Componentes de secciones
├── pages/                  # Páginas principales
├── data/                   # Datos estáticos (ministerios, eventos, equipo)
├── utils/                  # Utilidades y constantes
└── hooks/                  # Custom hooks
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecutar ESLint

## 📝 Contenido

El contenido está organizado en archivos de datos en la carpeta `src/data/`:

- `ministerios.ts` - Información de ministerios
- `eventos.ts` - Eventos y actividades
- `team.ts` - Equipo pastoral e información de la iglesia

## 🎯 Características Técnicas

### SEO
- Meta tags optimizados
- Structured data (JSON-LD)
- Open Graph y Twitter Cards
- URLs amigables
- Sitemap automático

### Performance
- Lazy loading de imágenes
- Optimización de Core Web Vitals
- Compresión de assets
- Caching optimizado

### Accesibilidad
- Navegación por teclado
- Alt text en imágenes
- Contraste apropiado
- Etiquetas ARIA

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@asambleasdelarita.cr
- **Teléfono**: +506 2222-3333
- **Dirección**: Av. Principal 123, San José, Costa Rica

## 🙏 Agradecimientos

- [shadcn/ui](https://ui.shadcn.com/) por los componentes base
- [Tailwind CSS](https://tailwindcss.com/) por el framework de estilos
- [Lucide React](https://lucide.dev/) por los iconos
- [React Hook Form](https://react-hook-form.com/) por el manejo de formularios
- [Zod](https://zod.dev/) por la validación de esquemas

---

**Hecho con ❤️ para la gloria de Dios**
