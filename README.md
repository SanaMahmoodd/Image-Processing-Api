# Image Processing API

A simple **Node.js + Express + TypeScript** API that processes and resizes images dynamically using [Sharp](https://sharp.pixelplumbing.com/).


## 🚀 Features
- Resize images by specifying **width** and **height**.
- Returns the processed image directly.
- Handles invalid queries with proper error messages.
- Caches processed images for faster performance (if implemented in `utils`).

---

## ⚙️ Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/image-processing-api.git
   ```

2. Navigate to the project directory:
   ```
   cd image-processing-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Build the project:
   ```
   npm run build
   ```

5. Start the server:
   ```
   npm start
   ```

---

## Requirements

- Node.js (>= 14.x)
- npm
- TypeScript
- Express
- Sharp (for image processing)

---

## Endpoints

- `/api/images`  
  Query parameters:
    - `filename` (string, required): The name of the image file.
    - `width` (number, required): Desired width in pixels.
    - `height` (number, required): Desired height in pixels.

---

## Error Handling

- **400 Bad Request**: Missing parameters or invalid values.
- **404 Not Found**: Image file not found.
- **500 Internal Server Error**: Unexpected server errors.

---

## author: 
"SANA SALEH"
