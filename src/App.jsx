export default function GamingRewardsPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const robuxMethods = [
    "Eventos oficiales de Roblox",
    "Microsoft Rewards",
    "Crear juegos en Roblox Studio",
    "Vender ropa y accesorios",
    "Tarjetas regalo",
    "Sorteos de streamers",
  ];

  const ffMethods = [
    "Eventos oficiales de Garena",
    "Códigos de recompensa",
    "Apps de recompensas",
    "Torneos",
    "Bonificaciones de recarga",
    "Giveaways",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      <header className="relative px-6 py-24 border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-cyan-500/5"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mundo Gamer Rewards
          </h1>

          <p className="text-zinc-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10">
            Descubre las mejores formas legales y seguras para conseguir Robux en Roblox y diamantes en Free Fire.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("guias")}
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg transition hover:scale-105"
            >
              Ver Guías Roblox
            </button>

            <button
              onClick={() => scrollToSection("guias")}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-bold text-lg transition hover:scale-105"
            >
              Ver Guías Free Fire
            </button>
          </div>
        </div>
      </header>

      <section id="guias" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl hover:border-green-500 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1627856014754-2907e2355d2f?q=80&w=1200&auto=format&fit=crop"
            alt="Roblox"
            className="w-full h-80 object-cover rounded-3xl mb-8"
          />

          <h2 className="text-4xl font-black mb-6 text-green-400">
            Conseguir Robux en Roblox
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            Roblox es una de las plataformas más populares del mundo gamer y permite conseguir Robux mediante métodos completamente legales.
            Muchos jugadores obtienen recompensas participando en eventos oficiales, creando experiencias en Roblox Studio,
            vendiendo ropa personalizada o utilizando programas como Microsoft Rewards para canjear tarjetas regalo.
            
            También existen códigos promocionales oficiales que Roblox publica durante eventos especiales o colaboraciones.
            Estos códigos pueden desbloquear accesorios, objetos cosméticos y recompensas exclusivas para tu avatar.
            
            Es importante evitar páginas falsas que prometen “Robux infinitos”, ya que muchas intentan robar cuentas o instalar malware.
            Siempre utiliza métodos seguros y oficiales para proteger tu cuenta.
          </p>

          <div className="space-y-4 mb-8">
            {robuxMethods.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl p-5 flex items-center gap-4 hover:bg-zinc-700 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center font-black text-xl">
                  {index + 1}
                </div>

                <p className="text-lg text-zinc-200 font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Consejo Importante
            </h3>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Nunca ingreses tu contraseña en páginas desconocidas. Los generadores de Robux suelen ser peligrosos.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl hover:border-cyan-500 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1200&auto=format&fit=crop"
            alt="Free Fire"
            className="w-full h-80 object-cover rounded-3xl mb-8"
          />

          <h2 className="text-4xl font-black mb-6 text-cyan-400">
            Conseguir Diamantes en Free Fire
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            Free Fire organiza constantemente eventos donde los jugadores pueden obtener diamantes, skins, tickets y recompensas exclusivas.
            Muchos usuarios consiguen diamantes participando en torneos, utilizando aplicaciones de recompensas verificadas
            o aprovechando promociones de recarga con bonificaciones especiales.
            
            Garena también publica códigos de recompensa que permiten desbloquear objetos gratis dentro del juego.
            Estos códigos suelen aparecer en transmisiones oficiales, redes sociales o eventos especiales de esports.
            
            Aunque existen páginas que prometen diamantes ilimitados, la mayoría son estafas.
            Lo más recomendable es seguir métodos legales y mantenerse atento a los eventos oficiales para conseguir recompensas reales.
          </p>

          <div className="space-y-4 mb-8">
            {ffMethods.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl p-5 flex items-center gap-4 hover:bg-zinc-700 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center font-black text-xl text-black">
                  {index + 1}
                </div>

                <p className="text-lg text-zinc-200 font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Recomendación
            </h3>

            <p className="text-zinc-300 text-lg leading-relaxed">
              Sigue las redes oficiales de Garena para enterarte de nuevos códigos y recompensas gratis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-20 px-6 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            ¿Por Qué Evitar Generadores?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
              <h3 className="text-3xl font-bold text-red-400 mb-4">
                Robo de Cuentas
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Algunas páginas falsas imitan el diseño oficial de Roblox o Free Fire para engañar a los jugadores.
                Normalmente piden usuario y contraseña prometiendo Robux o diamantes ilimitados.
                Después de ingresar los datos, muchas personas pierden sus cuentas.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                Virus y Malware
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Algunos supuestos generadores obligan a descargar aplicaciones o archivos sospechosos.
                Estos programas pueden contener virus, malware o software espía que afecta el rendimiento del PC.
                También pueden robar información personal o contraseñas.
              </p>
            </div>

            <div className="bg-zinc-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">
                Suspensiones
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Roblox y Garena tienen sistemas de seguridad avanzados.
                Si detectan hacks, exploits o actividades ilegales, la cuenta puede ser suspendida permanentemente.
                Por eso es mejor utilizar únicamente métodos oficiales y seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="noticias" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center mb-16">
          Últimas Noticias Gamer
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Cómo Conseguir Robux Gratis en Eventos Oficiales",
              image:
                "https://images.unsplash.com/photo-1603481546238-487240415921?q=80&w=1200&auto=format&fit=crop",
              text:
                "Roblox organiza constantemente eventos especiales donde los jugadores pueden desbloquear accesorios exclusivos, objetos cosméticos y recompensas gratis. Muchos usuarios aprovechan colaboraciones con marcas, conciertos virtuales y experiencias especiales para conseguir artículos raros que luego pueden intercambiar o utilizar dentro del juego. Una de las mejores técnicas es seguir las redes sociales oficiales de Roblox y revisar la sección de eventos diariamente. También es recomendable unirse a comunidades gamer donde comparten códigos promocionales apenas salen. Algunos jugadores incluso crean varias estrategias para ahorrar Robux, como vender ropa, crear gamepasses o desarrollar experiencias populares en Roblox Studio.",
            },
            {
              title: "Trucos Seguros Para Ahorrar Diamantes en Free Fire",
              image:
                "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
              text:
                "Muchos jugadores desperdician diamantes rápidamente comprando objetos innecesarios. Una técnica muy utilizada por jugadores avanzados es esperar eventos especiales donde Garena ofrece descuentos, recargas dobles y bonificaciones exclusivas. También existen códigos promocionales que permiten obtener tickets, cajas y skins gratis. Seguir torneos oficiales y transmisiones en vivo puede ayudarte a conseguir recompensas limitadas. Algunos creadores de contenido realizan sorteos verificados donde es posible ganar diamantes sin riesgos. Lo importante es evitar páginas falsas que prometen diamantes infinitos.",
            },
            {
              title: "Los Mejores Métodos Para Ganar Robux Legalmente",
              image:
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
              text:
                "Actualmente existen múltiples maneras legales de conseguir Robux. Uno de los métodos más conocidos es crear ropa personalizada y venderla dentro de Roblox. Muchos jugadores talentosos generan ingresos diseñando camisetas, pantalones y accesorios únicos. Otra estrategia popular es desarrollar juegos dentro de Roblox Studio y monetizarlos mediante pases especiales. Además, programas como Microsoft Rewards permiten conseguir tarjetas regalo canjeables por Robux. Los jugadores más experimentados recomiendan invertir inteligentemente los Robux para seguir creciendo dentro de la plataforma.",
            },
            {
              title: "Códigos Secretos y Eventos Especiales de Free Fire",
              image:
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
              text:
                "Garena suele liberar códigos promocionales durante eventos globales, torneos de esports y celebraciones especiales. Estos códigos pueden desbloquear skins, tickets, cajas, mascotas y recompensas únicas. Una técnica muy recomendada es activar las notificaciones de las cuentas oficiales para enterarte rápidamente de nuevos códigos. También existen aplicaciones de recompensas verificadas donde los usuarios acumulan puntos viendo anuncios o completando tareas sencillas para luego canjear diamantes. Los jugadores inteligentes aprovechan cada oportunidad para ahorrar y maximizar sus recompensas.",
            },
            {
              title: "Cómo Evitar Estafas de Robux y Diamantes",
              image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
              text:
                "Internet está lleno de páginas falsas que prometen Robux y diamantes ilimitados. Muchas de estas webs utilizan diseños llamativos para engañar a los jugadores y pedir información personal. Nunca debes ingresar tu contraseña fuera de las plataformas oficiales. Tampoco es recomendable descargar programas desconocidos que prometen hacks o generadores automáticos. Los jugadores más seguros siempre verifican la autenticidad de las páginas y utilizan únicamente métodos aprobados por Roblox y Garena.",
            },
            {
              title: "Técnicas Gamer Para Conseguir Más Recompensas",
              image:
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
              text:
                "Los jugadores más experimentados aprovechan eventos diarios, recompensas de inicio de sesión y promociones temporales para acumular recursos. En Roblox muchos usuarios participan en experiencias patrocinadas donde obtienen accesorios exclusivos. En Free Fire, completar misiones diarias y participar en modos especiales puede generar tickets y recompensas adicionales. Otra técnica recomendada es unirse a comunidades de Discord o grupos gamer donde comparten información sobre nuevos eventos y códigos promocionales apenas son publicados.",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition hover:-translate-y-2"
            >
              <img
                src={post.image}
                alt="Gaming"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-black mb-5 leading-tight">
                  {post.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg mb-8 whitespace-pre-line">
                  {post.text}
                </p>

                <button
                  onClick={() => alert("Próximamente habrá más noticias gamer disponibles 🚀")}
                  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-bold transition"
                >
                  Leer Más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 rounded-[40px] p-16 text-center text-black shadow-2xl">
          <h2 className="text-6xl font-black mb-8">
            Únete a la Comunidad Gamer
          </h2>

          <p className="text-2xl font-semibold max-w-4xl mx-auto mb-10 leading-relaxed">
            Mantente actualizado con noticias, eventos, recompensas y contenido exclusivo sobre Roblox y Free Fire.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => scrollToSection("noticias")}
              className="bg-black text-white px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition"
            >
              Explorar Contenido
            </button>

            <button
              onClick={() => alert("Los eventos especiales estarán disponibles pronto 🎮")}
              className="bg-white text-black px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition"
            >
              Ver Eventos
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-12">
    
    <h2 className="text-5xl font-black mb-8 text-center text-green-400">
      Sobre Nosotros
    </h2>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Mundo Gamer Rewards es una página creada para compartir noticias,
      guías, eventos y consejos relacionados con videojuegos populares como
      Roblox y Free Fire. Nuestro objetivo es ayudar a los jugadores a
      descubrir métodos seguros y legales para conseguir recompensas,
      participar en eventos oficiales y mantenerse actualizados con las
      últimas novedades del mundo gamer.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Nos enfocamos en publicar contenido informativo, tutoriales,
      recomendaciones y artículos educativos sobre códigos promocionales,
      seguridad de cuentas, eventos especiales y técnicas utilizadas por la
      comunidad gamer. También buscamos advertir sobre páginas falsas,
      estafas y métodos peligrosos que puedan afectar a los jugadores.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed">
      Esta página no está afiliada oficialmente con Roblox Corporation,
      Garena Free Fire ni con ninguna empresa relacionada. Todas las marcas
      y nombres pertenecen a sus respectivos propietarios.
    </p>

  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
    
    <h2 className="text-5xl font-black mb-8 text-center text-cyan-400">
      Política de Privacidad
    </h2>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      En Mundo Gamer Rewards valoramos la privacidad de nuestros visitantes.
      Esta página puede utilizar cookies y tecnologías similares para mejorar
      la experiencia del usuario, analizar el tráfico y mostrar contenido
      personalizado.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Google AdSense y otros servicios de terceros pueden utilizar cookies
      para mostrar anuncios basados en las visitas previas de los usuarios a
      este y otros sitios web. Google utiliza cookies publicitarias para
      ofrecer anuncios más relevantes según los intereses de cada visitante.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Los usuarios pueden desactivar la publicidad personalizada visitando
      la configuración de anuncios de Google. También pueden administrar o
      eliminar cookies desde la configuración de su navegador.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
      Esta página puede contener enlaces externos hacia otras plataformas o
      sitios web. No somos responsables del contenido ni de las políticas de
      privacidad de páginas externas.
    </p>

    <p className="text-zinc-300 text-lg leading-relaxed">
      Al utilizar este sitio web, aceptas esta política de privacidad y el
      uso de cookies para mejorar la experiencia del usuario.
    </p>

  </div>
  <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mt-12">
    
    <h2 className="text-5xl font-black mb-8 text-center text-pink-400">
      Contacto
    </h2>

    <p className="text-zinc-300 text-lg leading-relaxed mb-6 text-center">
      Si deseas comunicarte con nosotros para consultas, colaboraciones,
      reportes o cualquier información relacionada con el contenido de la página,
      puedes escribirnos directamente al siguiente correo electrónico:
    </p>

    <div className="text-center">
      <a
        href="mailto:jaja87235@gmail.com"
        className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition"
      >
        jaja87235@gmail.com
      </a>
    </div>

  </div>
</section>

<footer className="border-t border-zinc-800 py-12 px-6 text-center text-zinc-500 text-lg">
        <p className="mb-4">
          Esta página no está afiliada con Roblox Corporation ni Garena Free Fire.
        </p>

        <p>
          © 2026 Mundo Gamer Rewards - Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
