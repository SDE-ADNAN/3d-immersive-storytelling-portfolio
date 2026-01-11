export default function Contact() {
  return (
    <section id="contact" className="h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        <div className="glass p-6 text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-neutral-300">Interested in working together? Let's talk.</p>
          <div className="mt-4">
            <a className="inline-block glass px-4 py-2" href="mailto:adnan@example.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
