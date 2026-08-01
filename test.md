# 🚀 Next.js Class 1 - Introduction to Next.js

> Welcome to the Next.js Course 🎉
>
> Is class mein hum Next.js ka basic introduction, installation aur folder structure samjhenge.

---

# 📚 What is Next.js?

Next.js React ka framework hai jo full-stack web applications banane ke liye use hota hai.

Next.js ki madad se hum:

- Fast Websites bana sakte hain
- SEO Friendly Websites bana sakte hain
- Full Stack Applications bana sakte hain
- API bhi bana sakte hain
- Authentication kar sakte hain
- Database connect kar sakte hain

---

# 🤔 Why Next.js?

React sirf UI banata hai.

Lekin Next.js provide karta hai:

✅ Routing

✅ Server Side Rendering (SSR)

✅ Static Site Generation (SSG)

✅ API Routes

✅ Image Optimization

✅ SEO

✅ File Based Routing

---

# 🛠 Requirements

Install these:

- Node.js
- VS Code

Check version

```bash
node -v

npm -v
```

---

# 📦 Create Next.js Project

Command:

```bash
npx create-next-app@latest
```

Example:

```bash
npx create-next-app@latest my-app
```

Questions aayenge.

Recommended:

```
Project Name?
my-app

TypeScript?
No

ESLint?
Yes

Tailwind CSS?
Yes

src Folder?
No

App Router?
Yes

Turbopack?
Yes

Import Alias?
No
```

---

# ▶️ Run Project

Go inside folder

```bash
cd my-app
```

Start server

```bash
npm run dev
```

Browser open karo

```
http://localhost:3000
```

Agar page open ho gaya

🎉 Congratulations

---

# 📁 Folder Structure

Example

```
my-app/

app/
public/
node_modules/
package.json
next.config.js
```

---

# 📂 app Folder

Ye sabse important folder hai.

Example

```
app/

layout.js

page.js

globals.css

favicon.ico
```

---

# 📄 page.js

Ye homepage hota hai.

```jsx
export default function Home() {
  return (
    <h1>Hello Next.js</h1>
  );
}
```

Output

```
Hello Next.js
```

---

# 📄 layout.js

Ye har page ke liye common layout hota hai.

Example

```jsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
```

---

# 🎨 globals.css

Yahan global CSS likhte hain.

Example

```css
body{
    margin:0;
    padding:0;
    font-family:sans-serif;
}
```

---

# 📂 public Folder

Images

Videos

Icons

PDF

Sab yahan rakhte hain.

Example

```
public/

logo.png

banner.jpg
```

Use

```jsx
<img src="/logo.png" alt="Logo" />
```

---

# 📦 package.json

Project ki sari dependencies yahan hoti hain.

Example

```json
"scripts": {
"dev":"next dev",
"build":"next build",
"start":"next start"
}
```

---

# 🚀 Important Commands

Run Project

```bash
npm run dev
```

Build Project

```bash
npm run build
```

Start Production

```bash
npm run start
```

Install Package

```bash
npm install package-name
```

Example

```bash
npm install axios
```

---

# ✨ JSX

Next.js JSX use karta hai.

Example

```jsx
export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

---

# 🧩 Components

Example

Create

```
components/

Navbar.jsx
```

```jsx
export default function Navbar() {
  return (
    <nav>
      Navbar
    </nav>
  );
}
```

Use

```jsx
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
    </>
  );
}
```

---

# 🎨 Tailwind CSS

Class use karte hain.

Example

```jsx
export default function Home() {
  return (
    <div className="bg-blue-500 text-white p-5 rounded-lg">
      Hello Tailwind
    </div>
  );
}
```

---

# 📌 Homework

## Task 1

Create project

```bash
npx create-next-app@latest first-project
```

---

## Task 2

Run project

```bash
npm run dev
```

---

## Task 3

Change page.js

```jsx
export default function Home() {
  return (
    <>
      <h1>My First Next.js Website</h1>
      <p>I am learning Next.js.</p>
    </>
  );
}
```

---

## Task 4

Create Component

```
components/Navbar.jsx
```

Aur Home page mein import karo.

---

# 📖 Summary

Aaj humne seekha:

✅ What is Next.js

✅ Why Next.js

✅ Installation

✅ Folder Structure

✅ page.js

✅ layout.js

✅ globals.css

✅ public Folder

✅ Components

✅ Tailwind CSS

✅ npm Commands

---

# 🎯 Next Class (Class 2)

Next class mein hum seekhenge:

- Routing
- Nested Routes
- Dynamic Routes
- Link Component
- Navigation
- Folder Based Routing (Practical)