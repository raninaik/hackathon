# hackathon

## How to Add Arcade

This project includes a ready-to-use `ArcadeTour` component for embedding interactive Arcade demos.

### Quick Setup
1. Import the component: `import ArcadeTour from './src/components/ArcadeTour.jsx'`
2. Use it in your JSX: `<ArcadeTour arcadeUrl="YOUR_ARCADE_LINK_HERE" />`
3. Replace `"YOUR_ARCADE_LINK_HERE"` with your published Arcade share link

### Component Features
- **Responsive design**: 16:9 aspect ratio, mobile-friendly
- **Fallback state**: Shows "coming soon" message when no URL provided
- **Tailwind styled**: Drop-in ready with modern styling
- **Accessible**: Proper ARIA labels and semantic HTML

### Example Usage
```jsx
// With Arcade link
<ArcadeTour arcadeUrl="https://arcade.software/share/your-demo-id" />

// Without link (shows placeholder)
<ArcadeTour />
```

Follow the setup guide in `docs/arcade-setup.md` to create your demo and get the share link.
