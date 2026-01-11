import '../styles/globals.css';
import { MotionProvider } from '../components/ui/MotionProvider';
import { ScrollProvider } from '../components/ui/ScrollProvider';
import ScrollDebugOverlay from '../components/ui/ScrollDebugOverlay';

export const metadata = {
  title: 'Immersive Storytelling Portfolio',
  description: 'Portfolio — immersive storytelling'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:text-black p-2 rounded">Skip to content</a>
        <MotionProvider>
          <ScrollProvider>
            <div className="min-h-screen">{children}</div>
            <ScrollDebugOverlay />
          </ScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
