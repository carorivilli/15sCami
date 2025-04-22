import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-wood-pattern bg-cover bg-center">
      {/* Card Container - Ajustado para móviles */}
      <div className="w-full max-w-[95%] md:max-w-3xl lg:max-w-5xl mx-auto relative">
        {/* Decoraciones florales para móvil */}
        <div className="md:hidden absolute -top-8 -right-6 w-36 z-10">
          <img
            src="/flores2.png"
            alt="Decoración floral"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="md:hidden absolute -bottom-6 -left-4 w-36 z-10">
          <img
            src="/flores.webp"
            alt="Decoración floral"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="card-inner flex flex-col md:flex-row bg-white rounded-lg shadow-invitation relative">
          {/* Versión móvil del encabezado */}
          <div className="md:hidden w-full bg-white pt-8 px-4 rounded-t-lg">
            <h1 className="font-dancing text-4xl md:text-5xl text-[#9C6644] text-center mb-4 drop-shadow-sm">
              Camila
            </h1>
          </div>

          {/* Contenido principal */}
          <div className="w-full md:w-full bg-white p-6 md:p-12 lg:p-16 rounded-lg relative">
            {/* Decoración floral superior - solo desktop */}
            <div className="hidden md:block absolute top-0 right-0 md:right-8 lg:-right-8 w-48 md:w-64 lg:w-72 lg:-top-16">
              <img
                src="/flores2.png"
                alt="Decoración floral"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="text-center space-y-4 md:space-y-8 lg:space-y-12 relative z-10 mt-2 md:mt-8 lg:mt-12 px-4">
              {/* Nombre - visible solo en desktop */}
              <h1 className="hidden md:block font-dancing text-6xl md:text-7xl lg:text-8xl text-[#9C6644] mb-4 md:mb-8 lg:mb-12 drop-shadow-sm">
                Camila
              </h1>

              <p className="font-playfair text-xl md:text-3xl lg:text-4xl text-black tracking-wide font-medium">
                TE INVITO A CELEBRAR MIS QUINCE AÑOS
              </p>
              
              {/* Fecha y hora */}
              <div className="my-4 md:my-8 lg:my-12 space-y-2 md:space-y-4">
                <div className="flex items-center justify-center space-x-4 md:space-x-8">
                  <div className="w-12 md:w-16 lg:w-24 h-px bg-[#9C6644]"></div>
                  <span className="text-2xl md:text-4xl lg:text-5xl text-[#9C6644] font-bold">12</span>
                  <div className="w-12 md:w-16 lg:w-24 h-px bg-[#9C6644]"></div>
                </div>
                <p className="text-sm md:text-2xl lg:text-3xl text-[#9C6644] tracking-widest font-semibold">JULIO 2025</p>
                <p className="text-sm md:text-2xl lg:text-3xl text-black mt-2 md:mt-4 lg:mt-6">20:30 HS</p>
              </div>

              {/* Ubicación */}
              <div className="space-y-1 md:space-y-2 lg:space-y-4">
                <p className="font-semibold tracking-wide text-sm md:text-2xl lg:text-3xl text-[#9C6644]">VIAM SALÓN DE EVENTOS</p>
                <p className="text-sm md:text-2xl lg:text-3xl text-black">Córdoba, Argentina</p>
              </div>

              {/* Botón de confirmación */}
              <button
                onClick={() => navigate('/HomePage')}
                className="invitation-button mt-6 md:mt-8 lg:mt-12 px-6 md:px-12 lg:px-16 py-2 md:py-4 bg-[#9C6644] text-white 
                         rounded-full hover:bg-[#805536] transition-colors duration-300
                         font-playfair tracking-wide uppercase text-sm md:text-2xl lg:text-3xl w-full md:w-auto
                         shadow-md hover:shadow-lg"
              >
                Confirmar Asistencia
              </button>
            </div>

            {/* Decoración floral inferior - solo desktop */}
            <div className="hidden md:block absolute -bottom-16 -left-16 w-48 md:w-64 lg:w-96">
              <img
                src="/flores.webp"
                alt="Decoración floral"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage; 