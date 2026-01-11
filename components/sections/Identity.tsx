export default function Identity() {
  return (
    <section id="identity" className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6">
        <div className="glass p-6 space-y-4">
          <h2 className="text-2xl font-semibold">How I Think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass p-4">Performance First</div>
            <div className="glass p-4">Systems Thinking</div>
            <div className="glass p-4">Business Impact</div>
          </div>
        </div>
      </div>
    </section>
  );
}
