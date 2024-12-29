# Plan de Negocio - Aplicación Web

Una aplicación moderna para crear y gestionar planes de negocio de forma profesional, con integración con Zoho Books y editor tipo Notion.

## Características

- 📝 Editor tipo Notion para una redacción flexible
- 📊 Integración con Zoho Books para datos financieros
- 🎨 Interfaz moderna y minimalista
- 🌙 Modo oscuro/claro
- 📱 Diseño responsive
- 🔄 Guardado automático
- 📑 Plantillas predefinidas

## Tecnologías

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui
- TipTap Editor
- Zustand
- Zod

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/plan-de-negocio.git
```

2. Instala las dependencias:
```bash
cd plan-de-negocio
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto

```
├── app/                  # Rutas y páginas (Next.js App Router)
├── components/          # Componentes React reutilizables
├── lib/                # Utilidades y hooks
├── public/             # Archivos estáticos
└── styles/             # Estilos globales
```

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

MIT