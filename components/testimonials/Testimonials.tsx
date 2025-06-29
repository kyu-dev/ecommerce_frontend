const Testimonials = () => {
  let testimonials = [{ text: "zefezf", name: "gustave" }];
  return (
    <section className="py-16 mt-20 px-8 rounded-t-4xl bg-emerald-400">
      <h2 className="text-4xl font-bold text-center mb-12">
        Ce que disent nos clients
      </h2>
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg mb-4">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 border-2 border-black"></div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
