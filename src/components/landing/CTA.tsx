export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          15 dakikada YapıBulut&apos;u tanıyın.
        </h2>
        <p className="text-blue-200 mb-10 text-lg">
          Ürün tanıtımı için yerinizi ayırın, en kısa sürede geri dönüş yapalım.
        </p>
        <div className="flex justify-center">
          <div className="flex bg-white/10 backdrop-blur-lg rounded-full overflow-hidden border border-white/20 max-w-md w-full">
            <input
              type="tel"
              placeholder="Telefon: (5xxxxxxxxx)"
              className="flex-1 px-6 py-4 bg-transparent outline-none text-white placeholder-blue-200/60"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors rounded-full m-1">
              Katılın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
