thrivelab-giveaway

Multi-step Giveaway Form
A multi-step form to collect user information, validate emails and phone numbers, and persist data across accidental refreshes or navigation between steps. Built with modern frontend and backend technologies following best practices for scalability and user experience.

Figma Prototype: https://www.figma.com/design/FgdaHAv4fR5Zf4fRFf6ukA/For-Dev?node-id=0-1&p=f&t=n0elvqs2jgE88xSr-0

Live Demo: https://thrivelab-giveaway.vercel.app/


Table of Contents

Overview

Technologies Used

Setup & Installation

Environment Variables

Architecture & Design Decisions

Trade-offs

Assumptions

Future Improvements

Screenshots

Overview

The project is a multi-step giveaway form flow that collects user input across multiple screens:

Step 1: Contact Info (first name, last name, email, phone, Instagram handle)

Step 2: Pain Area (single select, optional “Other” field)

Step 3: Why Not Yet? (multi-select)

Step 4: Interest Level (single select)

Step 5: Confirmation page after submission


Key Features:

Form validation for emails, phone numbers, and required fields

Data persistence using localStorage to handle accidental refreshes or navigating back

Final submission sent to backend and saved in Supabase / PostgreSQL

Friendly error handling for duplicate emails (HTTP 409 Conflict) using SweetAlert

Smooth step transitions with Framer Motion

Technologies Used

Frontend:

Next.js (App Router) + TypeScript

Tailwind CSS

Framer Motion (step animations)

SweetAlert

Zod (form validation)

Backend:

NestJS + Prisma ORM

DTOs and validation pipes

Supabase / PostgreSQL

Setup & Installation
Clone the repository
git clone https://github.com/johnDev-90/thrivelab-giveaway.git
cd thrivelab-giveaway

Install dependencies

Client:

cd client
npm install


Server:

cd ../server
npm install

Run the project locally

Client:

npm run dev


Server:

npm run start:dev

Environment Variables
Frontend (client/.env.local)
NEXT_PUBLIC_SUPABASE_URL=https://zzbujehrmhimdjayjivg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_7s6j6ksqQJuU3SdFRVY0ng_rFhJ_YIY

Backend (server/.env)
# Server environment variable
DATABASE_URL="your_supabase_database_url_here"



Architecture & Design Decisions

Global state management: Used Context API instead of Redux to avoid over-engineering. The application’s state is lightweight and centralized, making Context API sufficient.

Data persistence: Every step of the form saves user inputs to localStorage, allowing users to refresh the page or navigate backward without losing progress.

Backend design: Data is only sent to Supabase when the user completes the form, avoiding unnecessary API calls.

Error handling: Duplicate emails trigger a 409 Conflict from the backend and are displayed in a user-friendly manner with SweetAlert.

Project structure: Separated frontend (client) and backend (server) in a single repository. The Next.js frontend uses the App Router without a src folder, organizing components directly in client/app/components.


Trade-offs

Simplified state management using Context API instead of Redux to save development time.

Used localStorage for temporary persistence instead of saving drafts in the database.

Frontend validation handled via Zod and Tailwind, without complex form libraries.


Assumptions

Instagram handle is optional

Users will complete the form in one session, so localStorage is sufficient for persistence


Future Improvements

Add unit testing for all components

Improve form accessibility and ARIA labels

Add server-side validation for additional security

Enhance animations with more engaging transitions



