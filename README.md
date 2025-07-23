# Star Wars Hub: Your Galaxy's Guide

Welcome to **Star Wars Hub**, a comprehensive wiki and information center for the entire Star Wars universe! Built with **Next.js 14 (App Router)**, this project aims to be your go-to destination for exploring films, characters, planets, starships, and the rich lore of a galaxy far, far away.

Whether you're a seasoned Jedi Master or a curious Padawan, **Star Wars Hub** offers a user-friendly interface to navigate through detailed information, ensuring you always have the knowledge of the Force at your fingertips.

<img width="4095" height="2328" alt="image" src="https://github.com/user-attachments/assets/d05b2817-c0f9-4f5b-8b24-c060cb05e581" />

---

## Features

### Extensive Star Wars Database

Explore a vast collection of data on:

- **Films**: Dive into each iconic movie, from the original trilogy to the latest sagas.
- **Characters**: Discover heroes, villains, and everything in between, with details on their species and home planets.
- **Planets**: Journey to diverse worlds across the galaxy.
- **Starships & Vehicles**: Get up close with the most famous vessels.
- **Species**: Learn about the myriad of creatures inhabiting the Star Wars galaxy.

### Intuitive Search & Filtering

Easily find what you're looking for with robust search capabilities and flexible filtering options (e.g., filter films by title, sort by release date).

### Dynamic Routing

Seamlessly navigate between list pages and detailed individual entries (e.g., `/films` to `/films/A_New_Hope`).

### Responsive Design

Enjoy a consistent experience across desktops, tablets, and mobile devices.

### Optimized Performance

Leverages **Next.js's** features for fast loading times and a smooth user experience.

---

## Technologies Used

- **Next.js 14 (App Router)**  
  The powerful React framework for building performant and SEO-friendly web applications.
  - **Server Components**: For efficient data fetching and initial page rendering.
  - **Client Components**: For interactive UI elements and dynamic content.

- **React**: For building the user interface.

- **TypeScript**: For type safety and improved developer experience.

- **GraphQL**: For efficient and flexible data fetching from the Star Wars API.
  - `graphql-request`: A lightweight GraphQL client.

- **Tailwind CSS**: For rapid and consistent UI styling.

- **next/font**: Optimizes and loads custom fonts for improved performance.

- `useParams` & `useSearchParams`: Next.js hooks for handling dynamic routes and URL query parameters.

- `<Suspense>`: For gracefully handling asynchronous operations and providing loading fallbacks.

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** (version 18.x or higher) and a package manager like **npm**, **Yarn**, **pnpm**, or **Bun** installed.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dangnguyenquang/Marketing-website-Star-Wars.git
cd Marketing-website-Star-Wars
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server
To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to view the application. The app will hot-reload as you make changes to the code.

### Building for Production
To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```
This command will generate the optimized build in the .next folder.

### Running in Production Mode (Locally)
After building, you can serve the production build locally:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

This will run the optimized Next.js application.

---

## Project Structure
```bash
.
├── app/                      
│   ├── (public-routes)/      
│   │   ├── films/            
│   │   │   ├── [id]/         
│   │   │   │   └── page.tsx  
│   │   │   └── page.tsx      
│   │   ├── characters/       
│   │   │   └── page.tsx      
│   │   ├── layout.tsx        
│   │   └── page.tsx          
│   ├── favicon.ico           
│   └── layout.tsx            
├── components/               
├── configs/                  
├── graphql/                  
│   ├── client.ts             
│   └── queries/              
├── lib/                      
├── public/                   
│   ├── favicon/              
│   └── images/               
├── styles/                   
│   └── globals.css           
└── types/                    
```


