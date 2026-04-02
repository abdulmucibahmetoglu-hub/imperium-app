export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          15 dakikada YapıBulut'u tanıyın.
        </h2>
        <p className="text-blue-100 mb-8">
          Ürün tanıtımı için yerinizi ayırın, en kısa sürede geri dönüş yapalım.
        </p>
        <div className="flex justify-center">
          <div className="flex bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
            <input
              type="tel"
              placeholder="Telefon: (5xxxxxxxxx)"
              className="flex-1 px-4 py-3 outline-none text-gray-700"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
              Katılın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
