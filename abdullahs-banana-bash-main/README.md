# 🎂 Happy Birthday Abdullah Fayyaz - Interactive Birthday Website

A fun, interactive birthday experience featuring monkeys, bananas, cake, and a heartfelt message!

## 🚀 Complete Beginner's Guide to Running This Project in VS Code

### Step 1: Install Required Software

Before you start, you need to install these tools on your computer:

#### A. Install Visual Studio Code (VS Code)
1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Download the version for your operating system (Windows, Mac, or Linux)
3. Run the installer and follow the setup wizard
4. Open VS Code after installation

#### B. Install Node.js (includes npm)
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the setup wizard
4. **Important**: Make sure to check the box that says "Add to PATH" during installation

#### C. Verify Installation
1. Open VS Code
2. Open the Terminal in VS Code: Click `Terminal` → `New Terminal` (or press `` Ctrl+` ``)
3. Type these commands one by one and press Enter:
   ```bash
   node --version
   npm --version
   ```
4. If you see version numbers (like `v20.x.x` and `10.x.x`), you're all set! ✅

---

### Step 2: Download the Project

#### Option A: Download ZIP (Easiest for Beginners)
1. Go to this project's GitHub page
2. Click the green **Code** button
3. Click **Download ZIP**
4. Extract the ZIP file to a folder you can easily find (like `Documents` or `Desktop`)

#### Option B: Clone with Git (If you have Git installed)
1. Open VS Code Terminal
2. Navigate to where you want the project:
   ```bash
   cd Desktop
   ```
3. Clone the repository:
   ```bash
   git clone <YOUR_GIT_URL>
   ```

---

### Step 3: Open the Project in VS Code

1. Open VS Code
2. Click `File` → `Open Folder`
3. Find and select the project folder you just downloaded/extracted
4. Click **Select Folder**
5. You should now see all the project files in the left sidebar

---

### Step 4: Install Project Dependencies

1. Open the Terminal in VS Code: `Terminal` → `New Terminal`
2. Type this command and press Enter:
   ```bash
   npm install
   ```
3. Wait for the installation to complete (this might take 2-5 minutes)
4. You'll see a progress bar and lots of text - this is normal! ✅

**What does this do?** This installs all the libraries and tools the project needs to run.

---

### Step 5: Run the Project

1. In the same Terminal, type this command and press Enter:
   ```bash
   npm run dev
   ```
2. Wait a few seconds until you see something like:
   ```
   ➜  Local:   http://localhost:5173/
   ```
3. **Hold `Ctrl` (or `Cmd` on Mac)** and **click** on the link (`http://localhost:5173/`)
4. Your browser will open and show the birthday website! 🎉

---

### Step 6: Making Changes (Optional)

- Any changes you make to the code will automatically update in the browser
- Try editing files in the `src/` folder to customize the experience
- Save your changes with `Ctrl+S` (or `Cmd+S` on Mac)

---

### Step 7: Stopping the Development Server

When you're done:
1. Go back to the Terminal in VS Code
2. Press `Ctrl+C`
3. Type `Y` and press Enter if asked to confirm

---

## 🆘 Troubleshooting Common Issues

### Problem: "npm: command not found"
- **Solution**: Node.js wasn't installed correctly. Go back to Step 1B and reinstall Node.js, making sure to check "Add to PATH"

### Problem: Port 5173 is already in use
- **Solution**: Another program is using that port. Try:
  ```bash
  npm run dev -- --port 3000
  ```

### Problem: Changes aren't showing up
- **Solution**: 
  1. Save the file (`Ctrl+S`)
  2. Refresh the browser (`F5` or `Ctrl+R`)
  3. If still not working, stop the server (`Ctrl+C`) and restart it (`npm run dev`)

---

## 📁 Project Structure

```
birthday-website/
├── src/
│   ├── components/       # Interactive components (Monkey, Cake, Fish, etc.)
│   ├── pages/           # Main page
│   ├── assets/          # Images (monkey, cake, Abdullah's photo)
│   └── index.css        # Styling and animations
├── public/              # Public assets (favicon)
├── index.html           # Main HTML file
└── package.json         # Project dependencies
```

---

## 🎨 Technologies Used

- **React** - Interactive UI components
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Beautiful styling
- **Vite** - Fast development server

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6a3b4803-e682-4831-beac-9c669a96caa7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
