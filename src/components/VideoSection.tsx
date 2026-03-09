const VideoSection = () => {
  return (
    <section className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="mx-auto mb-10 max-w-3xl text-2xl font-extrabold leading-tight text-foreground md:text-3xl lg:text-4xl"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Conheça a nova geração de chatbot para WhatsApp que ajuda no atendimento a delivery
        </h2>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/UbuqFrCE068"
              title="NaturalBot - Copiloto de Vendas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
