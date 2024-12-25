import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current filename.
const __filename = fileURLToPath(import.meta.url);

// Get the filename's directory.
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// MULTER CONFIGURATION
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

export const upload = multer({ storage });