# Development Guide

## Project Structure

```
├── Public/                 # Static assets
│   ├── Assets/            # Images and media
│   └── favicon.ico        # Site favicon
├── src/                   # Frontend source code
│   ├── components/        # React components
│   ├── pages/             # Page components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   ├── i18n/              # Internationalization
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Entry point
├── .env                   # Frontend environment variables
├── index.html             # Main HTML file
└── vite.config.ts         # Vite configuration
```

## Setup Instructions

### Prerequisites

- Node.js 16+
- npm

### Installation

1. **Install frontend dependencies:**
   ```bash
   npm install
   ```

### Environment Configuration

1. **Frontend Setup:**
   ```bash
   cp .env.template .env
   # Edit .env with your configuration
   ```

## Development Workflow

### Running the Project

1. **Frontend only:**
   ```bash
   npm run dev
   ```
   Access at: http://localhost:5173

## Component Development

### Creating New Components

1. Create component file in `src/components/`
2. Use TypeScript with proper interfaces
3. Follow existing styling patterns
4. Export component properly

### Styling

- Uses Tailwind CSS for styling
- Custom CSS variables in `src/index.css`
- Responsive design with mobile-first approach
- Dark theme support

### Internationalization

- Uses i18next for translations
- Translation files in `src/i18n/`
- Supports English and Arabic
- RTL layout support for Arabic

## Testing

### Manual Testing

1. **Navigation:** Test all navigation links
2. **Forms:** Test all form submissions
3. **Responsiveness:** Test on different screen sizes
4. **Languages:** Test both English and Arabic
5. **Animations:** Verify all animations work correctly

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Test RTL layout in Arabic

## Deployment

Refer to DEPLOYMENT.md for detailed deployment instructions.

## Troubleshooting

### Common Issues

1. **Dependency issues:**

   - Delete `node_modules` and `package-lock.json`
   - Run `npm install`

2. **Port conflicts:**

   - Change ports in `vite.config.ts`

3. **Environment variables not loading:**
   - Check file names and paths
   - Restart development server

### Getting Help

- Check console for error messages
- Review documentation
- Consult team members
