import './globals.css';
import { MotionProvider } from '../components/ui/MotionProvider';
import { ScrollProvider } from '../components/ui/ScrollProvider';

export const metadata = {
  title: 'Immersive Storytelling Portfolio',
  description: 'Portfolio — immersive storytelling'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <ScrollProvider>
            <div className="min-h-screen">{children}</div>
          </ScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
