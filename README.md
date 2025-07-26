# hackathon

## How to add Arcade

1. Follow the setup guide in `docs/arcade-setup.md` to create your Impact Snapshot recording
2. Once you have your published Arcade link, update the `ArcadeTour` component:
   ```jsx
   import ArcadeTour from './src/components/ArcadeTour';
   
   // Replace with your real Arcade URL
   <ArcadeTour arcadeUrl="https://demo.arcade.software/your-demo-id" />
   ```
3. The component is responsive and ready to drop under any "See Walk-through" link
