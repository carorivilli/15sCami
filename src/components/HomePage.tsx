import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Estado para el carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/cami5.JPG', '/cami3.JPG', '/cami4.JPG'];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const targetDate = new Date("2025-07-12T20:30:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generar el calendario de julio 2025
  const generateCalendar = () => {
    const daysInWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const firstDay = new Date(2025, 6, 1).getDay(); // 0-6 (Domingo-Sábado)
    const daysInMonth = 31;

    const calendar = [];
    // Agregar encabezado de días
    calendar.push(
      <div key="header" className="grid grid-cols-7 gap-2 mb-2">
        {daysInWeek.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-[#805536]"
          >
            {day}
          </div>
        ))}
      </div>
    );

    // Agregar días
    const days = [];
    // Espacios vacíos antes del primer día
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-2"></div>);
    }

    // Días del mes
    for (let i = 1; i <= daysInMonth; i++) {
      const isTargetDate = i === 12;
      days.push(
        <div
          key={i}
          className={`text-center p-2 relative ${
            isTargetDate ? "font-bold" : ""
          }`}
        >
          <span
            className={`relative z-10 ${
              isTargetDate ? "text-[#9C6644]" : "text-[#805536]"
            }`}
          >
            {i}
          </span>
          {isTargetDate && (
            <>
              <div className="absolute inset-0 w-10 h-10 mx-auto">
                <div className="absolute inset-0 rounded-full bg-[#E5CCA8] opacity-20"></div>
                {/* Línea trazadora animada */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_3s_linear_infinite]">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="#9C6644"
                    strokeWidth="2"
                    strokeDasharray="20 100"
                    className="origin-center"
                  />
                </svg>
                {/* Segunda línea trazadora con diferente velocidad y opacidad */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_4s_linear_infinite_reverse]">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="#805536"
                    strokeWidth="1"
                    strokeDasharray="10 50"
                    className="origin-center opacity-60"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      );
    }

    calendar.push(
      <div key="days" className="grid grid-cols-7 gap-2">
        {days}
      </div>
    );

    return calendar;
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: "#E6CCB2" }}
    >
      {/* Card Container */}
      <div className="w-full max-w-[95%] md:max-w-4xl lg:max-w-5xl mx-auto relative mt-20">
        {/* Decoraciones de globos */}
        <div className="absolute -top-20 -left-20 md:-top-24 md:-left-24 w-48 md:w-64 lg:w-96 z-10">
          <img
            src="/globos.png"
            alt="Decoración globos"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Primera Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8 relative overflow-hidden">
          {/* Fondo de la primera card */}
          <div className="absolute inset-0 z-0">
            <img
              src="/fondoPrincipal.jpg"
              alt="Fondo principal"
              className="w-full h-full object-cover"
            />
            {/* Overlay para mejorar la legibilidad */}
            <div className="absolute inset-0 "></div>
          </div>

          {/* Contenido con z-index elevado para estar sobre el fondo */}
          <div className="relative z-10">
            <h1 className="font-dancing text-5xl md:text-6xl lg:text-7xl text-[#9C6644] text-center mb-8 drop-shadow-lg">
              Mis XV Cami
            </h1>

            {/* Contador */}
            <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#9C6644] drop-shadow-lg">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-[#805536] drop-shadow-lg">DÍAS</div>
              </div>
              <div className="text-4xl text-[#9C6644] drop-shadow-lg">:</div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#9C6644] drop-shadow-lg">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-[#805536] drop-shadow-lg">HORAS</div>
              </div>
              <div className="text-4xl text-[#9C6644] drop-shadow-lg">:</div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#9C6644] drop-shadow-lg">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-[#805536] drop-shadow-lg">MINUTOS</div>
              </div>
              <div className="text-4xl text-[#9C6644] drop-shadow-lg">:</div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#9C6644] drop-shadow-lg">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-[#805536] drop-shadow-lg">SEGUNDOS</div>
              </div>
            </div>

            {/* Imagen de Cami con borde decorativo */}
            <div className="max-w-2xl mx-auto p-4 mb-8">
              <div className="rounded-lg p-2 bg-gradient-to-r from-[#9C6644] via-[#E5CCA8] to-[#9C6644] relative overflow-hidden shadow-xl">
                {/* Efecto de brillo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                <img
                  src="/cami1.JPG"
                  alt="Cami Dresscode"
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Reproductor de música */}
            <div className="max-w-md mx-auto mt-8 p-4">
              <div className="bg-[#F7E7CE] rounded-lg p-4 shadow-inner">
                <p className="text-[#9C6644] text-center mb-3 font-dancing text-xl">
                  ♪ Música para ti ♪
                </p>
                <ReactPlayer
                  url="/song.mp3"
                  controls
                  playing
                  loop
                  width="100%"
                  height="50px"
                />
                <p className="text-[#805536] text-center text-sm mt-2 italic">
                  * Toca el botón de play para escuchar la música *
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda Card - Calendario */}
        <div className="bg-[#F7E7CE] rounded-lg shadow-lg p-8 md:p-12 relative">
          {/* Decoración floral superior */}
          <div className="absolute -top-6 -right-10 w-32 md:w-60 transform rotate-90">
            <img
              src="/flores2.png"
              alt="Decoración floral"
              className="w-20 h-32 md:w-full md:h-auto object-contain opacity-90"
            />
          </div>

          <h2 className="font-dancing text-5xl md:text-6xl text-[#9C6644] text-center mb-2">
            ¿CUÁNDO?
          </h2>
          <p className="font-dancing text-3xl md:text-4xl text-[#805536] text-center mb-8">
            Julio 2025
          </p>
          <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-inner relative">
            {generateCalendar()}
          </div>

          {/* Decoración floral inferior */}
          <div className="absolute -bottom-6 -left-6 w-32 md:w-60 transform -rotate-90">
            <img
              src="/flores2.png"
              alt="Decoración floral"
              className="w-20 h-32 md:w-full md:h-auto object-contain opacity-90"
            />
          </div>
        </div>

        {/* Tercera Card - Ubicación */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative mt-8 overflow-hidden">
          {/* Fondo de la tercera card */}
          <div className="absolute inset-0 z-0">
            <img
              src="/fondoPrincipal.jpg"
              alt="Fondo principal"
              className="w-full h-full object-cover"
            />
            {/* Overlay para mejorar la legibilidad */}
            <div className="absolute inset-0"></div>
          </div>

          {/* Contenido con z-index elevado para estar sobre el fondo */}
          <div className="relative z-10">
            {/* Decoración de bola de baile izquierda */}
            <div className="absolute -top-2 -left-10 w-20 md:w-48 z-10">
              <img
                src="/bolaBaile.png"
                alt="Decoración bola de baile"
                className="w-full h-auto object-contain animate-float"
              />
            </div>

            {/* Decoración de bola de baile derecha */}
            <div className="absolute -top-8 -right-8 w-20 md:w-48 z-10">
              <img
                src="/bolaBaile2.png"
                alt="Decoración bola de baile"
                className="w-full h-auto object-contain animate-float"
              />
            </div>

            <h2 className="font-dancing text-5xl md:text-6xl text-[#9C6644] text-center mb-8 mt-4 drop-shadow-lg">
              ¿DÓNDE?
            </h2>
            <p className="font-dancing text-3xl md:text-5xl text-[#805536] text-center mb-8 drop-shadow-lg">
              Salón Viam
            </p>

            {/* Imagen del salón */}
            <div className="max-w-2xl mx-auto p-4 mb-8">
              <div className="rounded-lg p-2 bg-gradient-to-r from-[#9C6644] via-[#E5CCA8] to-[#9C6644] shadow-xl">
                <img
                  src="/salon.jpeg"
                  alt="Salón VIAM"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Botón de ubicación */}
            <div className="text-center">
              <a
                href="https://www.google.com/maps/place/VIAM/@-31.2520975,-64.2676601,15z/data=!3m1!4b1!4m6!3m5!1s0x94328353924094e7:0x233d3026898a0242!8m2!3d-31.2521172!4d-64.2492061!16s%2Fg%2F11c5bh8kqj?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9C6644] text-white font-dancing text-xl md:text-2xl px-8 py-4 rounded-full hover:bg-[#805536] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Ubicación
              </a>
            </div>
          </div>
        </div>

        {/* Cuarta Card - Dresscode */}
        <div className="bg-[#F7E7CE] rounded-lg shadow-lg p-8 md:p-12 relative mt-8 overflow-hidden">
          {/* Fondo de tela */}
          <div className="absolute inset-0 z-0">
            <img
              src="/tela.jpg"
              alt="Fondo de tela"
              className="w-full h-full object-cover"
            />
            {/* Overlay para mejorar la legibilidad */}
            <div className="absolute inset-0 bg-[#F7E7CE] opacity-60"></div>
          </div>

          {/* Contenido con z-index elevado para estar sobre el fondo */}
          <div className="relative z-10">
            <h2 className="font-dancing text-5xl md:text-7xl text-[#9C6644] text-center mb-8 mt-4 drop-shadow-lg">
              DRESSCODE
            </h2>
            {/* Texto de dresscode */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-dancing text-2xl md:text-6xl text-[#805536] mb-4 drop-shadow-lg font-bold">
                Elegante Sport
              </p>
            </div>

            {/* Imagen de Cami con estilo de moda */}
            <div className="max-w-2xl mx-auto p-4 mb-8">
              <div className="rounded-lg p-2 bg-gradient-to-r from-[#9C6644] via-[#E5CCA8] to-[#9C6644] relative overflow-hidden shadow-xl">
                {/* Efecto de brillo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                <img
                  src="/cami2.JPG"
                  alt="Cami Dresscode"
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quinta Card - Regalos */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-20 relative mt-8 overflow-hidden">
          {/* Fondo de regalos */}
          <div className="absolute inset-0 z-0">
            <img
              src="/fondoRegalo.jpg"
              alt="Fondo de regalos"
              className="w-full h-full object-cover"
            />
            {/* Overlay para mejorar la legibilidad */}
            <div className="absolute inset-0 bg-white opacity-80"></div>
          </div>

          {/* Contenido con z-index elevado para estar sobre el fondo */}
          <div className="relative z-10">
            <h2 className="font-dancing text-5xl md:text-7xl text-[#9C6644] text-center mb-8 mt-4 drop-shadow-lg">
              REGALOS
            </h2>

            {/* Icono de cono */}
            <div className="w-64 mx-auto">
              <img
                src="/regalo.png"
                alt="Icono de cono"
                className="w-full h-auto object-contain animate-float"
              />
            </div>

            {/* Mensaje de regalos */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-playfair text-2xl md:text-3xl text-black mb-6 drop-shadow-lg leading-relaxed">
                Tu presencia es mi mejor regalo,
                <br />
                pero si quieres añadir tu toque
                <br />
                especial te dejo mi cuenta.
              </p>
              <p className="font-playfair text-3xl md:text-3xl text-[#9C6644] drop-shadow-lg font-bold">
                ALIAS: cami.rivilli
              </p>
            </div>
          </div>
        </div>

        {/* Sexta Card - Carrusel y Confirmación */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16 relative mt-8 overflow-hidden">
          {/* Fondo de la sexta card */}
          <div className="absolute inset-0 z-0">
            <img
              src="/fondoPrincipal.jpg"
              alt="Fondo principal"
              className="w-full h-full object-cover"
            />
            {/* Overlay para mejorar la legibilidad */}
            <div className="absolute inset-0 "></div>
          </div>

          {/* Contenido con z-index elevado para estar sobre el fondo */}
          <div className="relative z-10">
            <h2 className="font-dancing text-4xl md:text-6xl lg:text-7xl text-[#9C6644] text-center font-bold mb-6 md:mb-8 lg:mb-12 mt-4 drop-shadow-lg">
              CONFIRMA TU ASISTENCIA
            </h2>

            {/* Carrusel de fotos */}
            <div className="w-full max-w-[95%] md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12">
              <div className="relative">
                {/* Imagen principal del carrusel */}
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Cami ${currentImageIndex + 1}`}
                    className="w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[750px] object-cover transition-opacity duration-500"
                  />
                </div>

                {/* Contenedor de navegación para móvil */}
                <div className="flex justify-center items-center space-x-4 mt-4 md:hidden">
                  <button 
                    onClick={previousImage}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9C6644]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Indicadores de página */}
                  <div className="flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-[#9C6644]' : 'bg-[#9C6644]/50'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextImage}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9C6644]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Botones de navegación para desktop */}
                <div className="hidden md:block">
                  <button 
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9C6644]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9C6644]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Botón de confirmación */}
            <div className="text-center">
              <a
                href="https://docs.google.com/forms/d/1LBdfa_lI4EkJGtzk8WfIpX6dNCtjKcEPMpSBuI4UD9E/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9C6644] text-white font-dancing text-xl md:text-2xl lg:text-3xl px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-full hover:bg-[#805536] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Confirmar Asistencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
