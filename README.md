# Enigma Developers — Web Corporativa

Sitio web corporativo de **Enigma Developers S.A.C.** Arquitectura full-stack dockerizada con Nginx como reverse proxy.

## Arquitectura

```
nginx:80
├── /api/*  →  backend:4000  (Express + Prisma + PostgreSQL)
└── /*      →  frontend:5173 (React + Vite)
```

### Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19, React Router 7, Tailwind CSS 4, Motion (Framer), Vite 6 |
| Backend | Node.js, Express 5, Prisma 6 (ORM), Zod (validación), Nodemailer |
| Base de datos | PostgreSQL 16 |
| Reverse proxy | Nginx |
| Contenedores | Docker Compose |

### Estructura de archivos

```
enigma-web/
├── frontend/
│   ├── src/
│   │   ├── components/    # Navbar, Footer, Hero, Services, Plans, etc.
│   │   ├── pages/         # Home, Contact, About, ServicesPage, PlansPage,
│   │   │                  # ComplaintBook, PrivacyPolicy, TermsOfService, CookiePolicy
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   │   └── brand/         # Brand manual (HTML estático, indexable)
│   ├── Dockerfile
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── controllers/   # contactController, complaintsController
│   │   ├── routes/        # contact, leads, complaints
│   │   ├── db.js          # Prisma client
│   │   ├── mail.js        # Nodemailer config
│   │   └── index.js       # Express app
│   ├── prisma/
│   │   └── schema.prisma  # Modelos: Contact, Lead, Post, Category, Complaint
│   └── Dockerfile
├── nginx/
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
├── .env.example
└── .gitignore
```

### API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/contact` | Formulario de contacto |
| POST | `/api/leads` | Solicitud de diagnóstico gratuito |
| POST | `/api/complaints` | Libro de reclamaciones (INDECOPI) |
| GET | `/api/health` | Health check |

### Rutas del frontend

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/servicios` | Servicios |
| `/planes` | Planes |
| `/nosotros` | Nosotros |
| `/contacto` | Contacto |
| `/libro-reclamaciones` | Libro de Reclamaciones |
| `/privacidad` | Política de privacidad |
| `/terminos` | Términos de servicio |
| `/cookies` | Política de cookies |
| `/brand` | Brand manual (HTML estático) |

## Instalación

### Requisitos

- Docker y Docker Compose

### Pasos

1. Clonar el repositorio:

```bash
git clone https://github.com/sdelsolar90/webenigma.git
cd webenigma
```

2. Crear el archivo de variables de entorno:

```bash
cp .env.example .env
```

3. Editar `.env` con las credenciales reales (PostgreSQL, SMTP, etc.)

4. Levantar los contenedores:

```bash
docker compose up -d
```

5. Ejecutar la migración de base de datos:

```bash
docker compose exec backend npx prisma migrate dev
```

6. Abrir `http://localhost` en el navegador.

### Desarrollo local (sin Docker)

Si se prefiere trabajar sin Docker, levantar cada servicio por separado:

```bash
# Terminal 1 — Base de datos PostgreSQL (necesaria por separado)

# Terminal 2 — Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

# Terminal 3 — Frontend
cd frontend
npm install
npm run dev
```

Configurar `DATABASE_URL` en `.env` apuntando a la instancia local de PostgreSQL.
