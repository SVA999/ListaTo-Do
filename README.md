# ListaTo-Do



Lista personal To-Do
Mini practica






Santiago Viana Ayala









Plataformas de Programacion empresarial
Ingenieria de Sistemas e Informatica



Universidad Pontificia Bolivariana
Medellín, 28 de agosto de 2025
Proyecto:

Lista personal To-Do 
Una app donde puedes:
•	Crear tareas. 
•	Marcar tareas como completadas. 
•	Ver la lista.

FRONTEND 
Tecnología: React + Vite + CSS vanilla

 Justificación:
•	React + Vite: Para este proyecto los componentes reutilizables de React son perfectos para listas de tareas, además de un Build rápido y ligero para un desarrollo ágil.

BACKEND 
Tecnología: Node.js + Express + pg

 Justificación:
•	Express: Para unsetup rapido, excelente para APIs REST simples
•	Node.js: Mismo lenguaje (JavaScript) en todo el stack = menos context switching
•	Consultas SQL directas: mayor control y desempeño
•	Implementacion de un Middleware básico: CORS para conectar con frontend, express.json() para parsing.




 BASE DE DATOS 
Tecnología: PostgreSQL

Justificación:
•	PostgreSQL: Robusto, gratuito, excelente soporte en Vercel
•	Esquema simple: Una tabla todos con id, title, completed, created_at
•	Ventaja: Mejor que SQLite para despliegue, mejor que MongoDB para estructura simple.
DESPLIEGUE 
Vercel
Justificación:
•	Frontend: Deploy automático desde Git-
•	Backend: Vercel Functions (serverless), para escalado automático
•	Base de datos: Vercel Postgres incluido
