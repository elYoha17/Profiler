/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    'resources/views/**/*.blade.php',
    'resources/js/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [forms],
}

