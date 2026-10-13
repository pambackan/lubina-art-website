# Lubina N Salam — bilingual artist website

A starter project for a premium art portfolio and commission enquiry website.

## Stack
- Frontend: Next.js App Router, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express, Sequelize, MySQL
- Languages: English (`/en`) and German (`/de`)
- Admin: JWT-protected dashboard for managing artwork and reviewing enquiries
- Shop: portfolio and enquiry flow first; checkout intentionally not included yet

## Requirements
- Node.js 20+
- MySQL 8+

## 1. Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your MySQL credentials and a long JWT_SECRET
npm install
npm run dev
```
Create an empty MySQL database matching `DB_NAME` first. Sequelize sync creates the tables for local development. For production, replace `sequelize.sync()` with migrations.

Create an admin account:
```bash
npm run create-admin -- --email admin@example.com --password 'ChangeThisPassword!'
```
The admin script uses the same `.env` database connection.

API runs on `http://localhost:4000` by default. Uploaded images are stored in `backend/uploads` for local development. For production, use object storage (e.g. S3-compatible storage) and a reverse proxy.

## 2. Frontend
```bash
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```
Open `http://localhost:3000/en` or `http://localhost:3000/de`.

## Admin
Open `/en/admin` or `/de/admin`, sign in with the admin account, then add/edit artwork and review commission enquiries. The dashboard keeps the JWT in component state rather than localStorage. Refreshing the page requires signing in again; this can be changed to secure httpOnly cookies for production.

## Configuration
- `NEXT_PUBLIC_API_URL`: backend API origin, e.g. `http://localhost:4000/api`
- Backend CORS allows `FRONTEND_URL`; set it to your frontend origin.
- Set `JWT_SECRET` to a unique secret before deployment.

## Before production
- Add rate limiting, email notifications, CAPTCHA/anti-spam and request logging.
- Configure HTTPS, backups, secure cookie-based admin sessions and database migrations.
- Add a privacy policy, Impressum, consent handling where needed, and clear shipping/returns terms before enabling sales.
- Replace sample images with Lubina's own artwork and confirm image rights.
- German copy is a working translation of the supplied PDF content and should be reviewed by the artist before launch.
