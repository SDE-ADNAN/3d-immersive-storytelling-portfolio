import './globals.css';
import { MotionProvider } from '../components/ui/MotionProvider';

export const metadata = {
  title: 'Immersive Storytelling Portfolio',
  description: 'Portfolio — immersive storytelling'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <div className="min-h-screen">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
