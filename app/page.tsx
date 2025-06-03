"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Star,
  ChevronRight,
  MapPin,
  CuboidIcon as Cube,
  Shield,
  Settings,
  Timer,
  Award,
  Headphones,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const whatsappNumber = "5511974691564"
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para móveis planejados."

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || whatsappMessage
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitchen-marble-island.jpeg"
            alt="Cozinha planejada com ilha de mármore e acabamentos sofisticados"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <h2 className="text-amber-400 text-sm sm:text-base lg:text-lg xl:text-xl font-semibold tracking-wider mb-4 sm:mb-6 font-serif uppercase">
              VIVAH MÓVEIS PLANEJADOS
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 sm:mb-8 leading-tight font-display">
              Transforme seu lar com <span className="block sm:inline">móveis planejados que</span>{" "}
              <span className="block sm:inline">unem</span>{" "}
              <span className="italic text-amber-400 font-medium">design</span>,{" "}
              <span className="italic text-amber-400 font-medium">funcionalidade</span>{" "}
              <span className="block sm:inline">e</span>{" "}
              <span className="italic text-amber-400 font-medium">exclusividade</span>.
            </h1>
            <p className="text-lg sm:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Projetos personalizados que valorizam cada centímetro do seu espaço, combinando estética sofisticada,
              conforto excepcional e soluções inteligentes para transformar sua casa no lar dos seus sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Button
                onClick={() => openWhatsApp("Olá! Gostaria de solicitar um orçamento gratuito para móveis planejados.")}
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                SOLICITE UM ORÇAMENTO GRATUITO
              </Button>
              <Button
                onClick={() => openWhatsApp("Olá! Gostaria de conhecer os projetos da Vivah Móveis Planejados.")}
                variant="outline"
                className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/20 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300"
              >
                CONHEÇA NOSSOS PROJETOS
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-amber-500 overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=100&width=100&query=professional headshot person ${i}`}
                      alt={`Cliente satisfeito ${i}`}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-300 font-medium">Mais de 500 clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-black"></div>
          <Image
            src="/images/living-entertainment.jpeg"
            alt="Móvel planejado para sala de estar com iluminação embutida"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-amber-500/80 tracking-widest mb-6 lg:mb-8">
                VIVAH
              </h2>
              <div className="mt-4 bg-amber-800/30 p-6 inline-block rounded-lg">
                <Image
                  src="/images/VIVAH.jpg?height=200&width=200"
                  alt="Vivah logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="mt-8">
                <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                  Desde 2010, a Vivah Móveis Planejados tem se destacado no mercado de móveis sob medida, entregando
                  projetos exclusivos que transformam espaços em ambientes únicos.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-500">12+</span>
                    <span className="text-sm sm:text-base text-gray-300 text-center lg:text-left">
                      Anos de experiência
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-500">500+</span>
                    <span className="text-sm sm:text-base text-gray-300 text-center lg:text-left">
                      Projetos entregues
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-500">98%</span>
                    <span className="text-sm sm:text-base text-gray-300 text-center lg:text-left">
                      Clientes satisfeitos
                    </span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-500">25+</span>
                    <span className="text-sm sm:text-base text-gray-300 text-center lg:text-left">
                      Profissionais especializados
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center lg:text-left leading-tight">
                Cada centímetro do seu lar <span className="block">pode ser aproveitado com</span>{" "}
                <span className="text-amber-500 font-bold">soluções inteligentes e exclusivas</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                Desde os projetos mais simples aos mais complexos, nós desenvolvemos móveis planejados com design
                diferenciado e acabamento impecável, utilizando materiais de alta qualidade e tecnologia de ponta.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                Na Vivah, nos orgulhamos enormemente pelos resultados que conquistamos. Cada projeto é único e feito sob
                medida para atender às necessidades específicas de cada cliente, transformando ambientes em espaços
                funcionais, elegantes e aconchegantes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-300">
                    Atendimento personalizado do início ao fim do projeto
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-300">
                    Materiais de alta qualidade com garantia estendida
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-300">Projetos 3D detalhados para visualização prévia</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-300">Equipe de instalação própria e especializada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-amber-600/3 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-amber-500/3 to-transparent rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Nossos Ambientes</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-500 italic mb-6 font-serif">
              Elegância e funcionalidade em cada detalhe
            </p>
            <p className="text-lg sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore alguns dos nossos projetos e descubra como podemos transformar cada ambiente da sua casa em um
              espaço único, funcional e com a sua personalidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden rounded-lg h-80 sm:h-96">
              <Image
                src="/images/kitchen-blue-wood.jpeg"
                alt="Cozinha planejada com armários azuis e madeira"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-amber-400 mb-2 font-semibold">Cozinhas</h3>
                <p className="text-white mb-4 text-base sm:text-base">
                  Funcionalidade e elegância para o coração da sua casa
                </p>
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de ver projetos de cozinhas planejadas.")}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full text-sm sm:text-base"
                >
                  Ver projetos <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg h-80 sm:h-96">
              <Image
                src="/images/living-entertainment.jpeg"
                alt="Sala de estar com painel para TV e iluminação"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-amber-400 mb-2 font-semibold">Salas</h3>
                <p className="text-white mb-4 text-base sm:text-base">Ambientes sofisticados para receber e relaxar</p>
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de ver projetos de salas planejadas.")}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full text-sm sm:text-base"
                >
                  Ver projetos <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg h-80 sm:h-96 sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/kitchen-bed.JPG"
                alt="Armário planejado com nichos iluminados"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-amber-400 mb-2 font-semibold">Dormitórios</h3>
                <p className="text-white mb-4 text-base sm:text-base">Conforto e organização para seu descanso</p>
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de ver projetos de dormitórios planejados.")}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full text-sm sm:text-base"
                >
                  Ver projetos <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="group relative overflow-hidden rounded-lg h-80 sm:h-96">
              <Image
                src="/images/office-marble.jpeg"
                alt="Escritório com móveis planejados e acabamento em mármore"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-amber-400 mb-2 font-semibold">Home Office</h3>
                <p className="text-white mb-4 text-base sm:text-base">
                  Espaços produtivos e inspiradores para trabalhar
                </p>
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de ver projetos de home office planejado.")}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full text-sm sm:text-base"
                >
                  Ver projetos <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg h-80 sm:h-96">
              <Image
                src="/images/kitchen-island-display.jpeg"
                alt="Banheiro planejado com acabamento em espelho"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-amber-400 mb-2 font-semibold">Banheiros</h3>
                <p className="text-white mb-4 text-base sm:text-base">Elegância e praticidade para seu bem-estar</p>
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de ver projetos de banheiros planejados.")}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full text-sm sm:text-base"
                >
                  Ver projetos <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg h-80 sm:h-96 sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/custom-shelving.jpeg"
                alt="Cozinha com ilha e nichos iluminados"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl text-amber-400 mb-2 font-semibold">Closets</h3>
                <p className="text-white mb-4 text-base sm:text-base">Organização e sofisticação para suas roupas</p>
                <Button
                  onClick={() => openWhatsApp("Olá! Gostaria de ver projetos de closets planejados.")}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full text-sm sm:text-base"
                >
                  Ver projetos <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button
              onClick={() => openWhatsApp("Olá! Gostaria de ver todos os projetos da Vivah Móveis Planejados.")}
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              VER TODOS OS NOSSOS PROJETOS
            </Button>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-amber-950/40 via-black to-amber-900/20 relative overflow-hidden">
        {/* Watermark background */}
        <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center overflow-hidden">
          <span className="text-amber-600/30 text-[15rem] sm:text-[20rem] lg:text-[25rem] font-serif italic transform -rotate-6 select-none">
            essência
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6">
              Transformamos ambientes em
            </h2>
            <p className="text-amber-500 italic text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-12 sm:mb-16 font-serif">
              extensões da sua essência.
            </p>

            <p className="text-lg sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Somos uma marcenaria especializada em móveis planejados de alto padrão, com foco total na personalização,
              no acabamento impecável e em soluções que unem forma e função.
            </p>

            <p className="text-lg sm:text-lg lg:text-xl text-gray-300 mb-12 sm:mb-16 leading-relaxed">
              Na Vivah Móveis Planejados, você não escolhe peças prontas — você participa de um processo criativo, em
              que seu estilo, sua rotina e suas necessidades são o ponto de partida para um projeto único.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="bg-gradient-to-b from-amber-900/40 via-amber-950/30 to-black/60 p-6 sm:p-8 rounded-xl border border-amber-800/30 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/20">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-600/40">
                  <Cube className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl text-amber-400 mb-4 font-semibold">Projeto 3D Detalhado</h3>
                <p className="text-base sm:text-base text-gray-300 leading-relaxed">
                  Visualize seu projeto antes da execução com nossos projetos 3D detalhados, que permitem uma visão
                  realista de como ficará seu ambiente após a instalação.
                </p>
              </div>

              <div className="bg-gradient-to-b from-amber-900/40 via-amber-950/30 to-black/60 p-6 sm:p-8 rounded-xl border border-amber-800/30 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/20">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-600/40">
                  <Shield className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl text-amber-400 mb-4 font-semibold">Móveis Sob Medida</h3>
                <p className="text-base sm:text-base text-gray-300 leading-relaxed">
                  Cada móvel é projetado e fabricado sob medida para seu espaço, aproveitando cada centímetro disponível
                  e atendendo às suas necessidades específicas.
                </p>
              </div>

              <div className="bg-gradient-to-b from-amber-900/40 via-amber-950/30 to-black/60 p-6 sm:p-8 rounded-xl border border-amber-800/30 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/20">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-amber-800/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-600/40">
                  <Settings className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl text-amber-400 mb-4 font-semibold">Instalação Profissional</h3>
                <p className="text-base sm:text-base text-gray-300 leading-relaxed">
                  Nossa equipe de instalação própria e especializada garante a montagem perfeita dos seus móveis, com
                  acabamento impecável e dentro do prazo estabelecido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="projetos"
        className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-black via-amber-950/30 to-amber-900/40 relative overflow-hidden"
      >
        {/* Watermark background */}
        <div className="absolute inset-0 z-0 opacity-15 flex items-center justify-center overflow-hidden">
          <span className="text-amber-600/30 text-[15rem] sm:text-[20rem] lg:text-[25rem] font-serif italic transform rotate-6 select-none">
            Vivah
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Por que nossos clientes
            </h2>
            <p className="text-amber-500 italic text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-8 font-serif">
              escolhem a Vivah Móveis Planejados
            </p>
            <p className="text-lg sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra os diferenciais que fazem da Vivah a escolha certa para transformar os ambientes da sua casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-gradient-to-b from-amber-900/50 via-amber-950/40 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/40 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/30">
              <div className="bg-gradient-to-br from-amber-700/50 to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-amber-600/40">
                <Cube className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl text-amber-400 mb-4 text-center font-semibold">
                Projetos 100% personalizados
              </h3>
              <p className="text-base sm:text-base text-gray-300 leading-relaxed text-center">
                Cada projeto é único e desenvolvido de acordo com as necessidades específicas de cada cliente,
                respeitando seu estilo, preferências e orçamento.
              </p>
            </div>

            <div className="bg-gradient-to-b from-amber-900/50 via-amber-950/40 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/40 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/30">
              <div className="bg-gradient-to-br from-amber-700/50 to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-amber-600/40">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl text-amber-400 mb-4 text-center font-semibold">
                Materiais de alta qualidade
              </h3>
              <p className="text-base sm:text-base text-gray-300 leading-relaxed text-center">
                Utilizamos apenas materiais de primeira linha para garantir durabilidade, resistência e acabamento
                impecável em todos os nossos móveis.
              </p>
            </div>

            <div className="bg-gradient-to-b from-amber-900/50 via-amber-950/40 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/40 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/30 md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-700/50 to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-amber-600/40">
                <Headphones className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl text-amber-400 mb-4 text-center font-semibold">
                Atendimento exclusivo
              </h3>
              <p className="text-base sm:text-base text-gray-300 leading-relaxed text-center">
                Do projeto à instalação, você terá um acompanhamento personalizado em todas as etapas, com profissionais
                qualificados e dedicados.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-b from-amber-900/50 via-amber-950/40 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/40 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/30">
              <div className="bg-gradient-to-br from-amber-700/50 to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-amber-600/40">
                <Timer className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl text-amber-400 mb-4 text-center font-semibold">
                Prazo de entrega garantido
              </h3>
              <p className="text-base sm:text-base text-gray-300 leading-relaxed text-center">
                Cumprimos rigorosamente os prazos estabelecidos para a entrega e instalação dos móveis, respeitando seu
                tempo e planejamento.
              </p>
            </div>

            <div className="bg-gradient-to-b from-amber-900/50 via-amber-950/40 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/40 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/30">
              <div className="bg-gradient-to-br from-amber-700/50 to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-amber-600/40">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl text-amber-400 mb-4 text-center font-semibold">5 anos de garantia</h3>
              <p className="text-base sm:text-base text-gray-300 leading-relaxed text-center">
                Oferecemos garantia estendida de 5 anos em todos os nossos móveis, proporcionando segurança e
                tranquilidade para nossos clientes.
              </p>
            </div>

            <div className="bg-gradient-to-b from-amber-900/50 via-amber-950/40 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/40 backdrop-blur-sm transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-amber-900/30 md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-700/50 to-amber-900/30 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center rounded-full border border-amber-600/40">
                <Headphones className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl text-amber-400 mb-4 text-center font-semibold">Suporte pós-venda</h3>
              <p className="text-base sm:text-base text-gray-300 leading-relaxed text-center">
                Nosso compromisso não termina com a entrega. Oferecemos suporte pós-venda para garantir sua total
                satisfação com nossos produtos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-amber-900/30 via-black to-amber-950/40 relative overflow-hidden">
        {/* Watermark background */}
        <div className="absolute inset-0 z-0 opacity-15 flex items-center justify-center overflow-hidden">
          <span className="text-amber-600/30 text-[15rem] sm:text-[20rem] lg:text-[25rem] font-serif italic transform -rotate-3 select-none">
            depoimentos
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-center font-display">
            O que nossos clientes dizem
          </h2>
          <p className="text-amber-500 italic text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-12 sm:mb-16 text-center font-serif">
            histórias de transformação
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-amber-900/40 via-amber-950/30 to-black/70 p-6 sm:p-8 lg:p-10 rounded-xl border border-amber-800/30 backdrop-blur-sm relative transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-amber-900/20"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full border-2 border-amber-500 overflow-hidden p-1 bg-gradient-to-br from-amber-900/50 to-black">
                    <div className="rounded-full overflow-hidden w-full h-full">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&query=professional headshot person ${i}`}
                        alt={`Cliente ${i}`}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-6 mt-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-center italic mb-8 font-serif text-sm sm:text-base">
                  "A Vivah superou todas as minhas expectativas. O projeto ficou exatamente como eu imaginava, com
                  acabamento impecável e entrega no prazo. Recomendo a todos que buscam qualidade e excelência."
                </p>
                <div className="text-center">
                  <h4 className="text-amber-400 font-semibold text-lg font-display">Ana Claudia</h4>
                  <p className="text-sm text-gray-400">Cliente desde 2021</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Button
              onClick={() => openWhatsApp("Olá! Gostaria de ver mais depoimentos de clientes da Vivah.")}
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500/10 rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg font-serif"
            >
              VER MAIS DEPOIMENTOS
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Counter */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-900/10 via-transparent to-amber-950/10"></div>
          <div className="absolute top-20 left-1/4 w-48 h-48 bg-amber-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-500 mb-2 sm:mb-4">500+</div>
              <p className="text-base sm:text-lg lg:text-xl text-white">Projetos entregues</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-500 mb-2 sm:mb-4">12+</div>
              <p className="text-base sm:text-lg lg:text-xl text-white">Anos de experiência</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-500 mb-2 sm:mb-4">98%</div>
              <p className="text-base sm:text-lg lg:text-xl text-white">Clientes satisfeitos</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-500 mb-2 sm:mb-4">25+</div>
              <p className="text-base sm:text-lg lg:text-xl text-white">Profissionais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-500/5 to-transparent rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Watermark background */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
          <span className="text-amber-600/30 text-[15rem] sm:text-[20rem] lg:text-[25rem] font-serif italic transform rotate-6 select-none animate-pulse">
            exclusivo
          </span>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-amber-950/30 via-amber-900/20 to-amber-950/30 rounded-2xl overflow-hidden border-2 border-amber-600/30 shadow-2xl shadow-amber-900/20 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-600/10 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center bg-gradient-to-r from-amber-500/30 to-amber-600/30 px-6 py-3 rounded-full text-amber-300 text-sm font-bold mb-8 border border-amber-400/50 shadow-lg shadow-amber-500/20 animate-pulse">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    OFERTA EXCLUSIVA - TEMPO LIMITADO
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 font-display leading-tight text-white">
                    <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                      Projeto 3D GRATUITO
                    </span>
                    <span className="block text-white">para quem valoriza</span>
                    <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      design e qualidade
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed">
                    Solicite um orçamento hoje e ganhe um projeto 3D gratuito do seu ambiente. Além disso, oferecemos
                    condições especiais de pagamento e entrega expressa.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-amber-900/20 p-4 rounded-lg border border-amber-600/20">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium">Projeto 3D gratuito</p>
                    </div>

                    <div className="flex items-center gap-3 bg-amber-900/20 p-4 rounded-lg border border-amber-600/20">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium">12x sem juros</p>
                    </div>

                    <div className="flex items-center gap-3 bg-amber-900/20 p-4 rounded-lg border border-amber-600/20">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium">Entrega em 30 dias</p>
                    </div>

                    <div className="flex items-center gap-3 bg-amber-900/20 p-4 rounded-lg border border-amber-600/20">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium">5 anos de garantia</p>
                    </div>
                  </div>

                  <div className="text-center w-full">
                    <Button
                      onClick={() =>
                        openWhatsApp("Olá! Quero aproveitar a oferta exclusiva e solicitar meu projeto 3D gratuito!")
                      }
                      className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-lg font-bold border-0 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 animate-pulse"
                    >
                      🎯 SOLICITAR ORÇAMENTO AGORA
                    </Button>

                    <p className="text-sm sm:text-sm text-amber-200 mt-4 font-medium text-center">
                      ⏰ Oferta válida por tempo limitado • Últimas vagas disponíveis
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] relative">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-900/20"></div>
                <Image
                  src="/images/kitchen-marble-pendant.jpeg"
                  alt="Cozinha planejada com ilha de mármore"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-black relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl animate-pulse delay-200"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-800"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                Agende uma visita e <span className="block">conheça a</span>{" "}
                <span className="text-amber-500 italic font-serif">Vivah Móveis Planejados</span> de perto
              </h2>
              <p className="text-lg sm:text-lg text-gray-300 mb-8 leading-relaxed">
                Venha conhecer nosso showroom e descobrir como podemos transformar seus ambientes com móveis planejados
                de alta qualidade. Nossos consultores estão prontos para atendê-lo e apresentar todas as possibilidades
                para o seu projeto.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-900/30 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl text-amber-400 mb-2 font-semibold">Endereço</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Av. Paulista, 1000 - Bela Vista
                      <br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-900/30 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl text-amber-400 mb-2 font-semibold">WhatsApp</h3>
                    <p className="text-gray-300 text-sm sm:text-base">(11) 97469-1564</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-900/30 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl text-amber-400 mb-2 font-semibold">E-mail</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      contato@vivahmoveis.com.br
                      <br />
                      atendimento@vivahmoveis.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-900/30 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl text-amber-400 mb-2 font-semibold">Horário de Atendimento</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() =>
                  openWhatsApp("Olá! Gostaria de agendar uma visita ao showroom da Vivah Móveis Planejados.")
                }
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                AGENDE UMA VISITA AGORA
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-black/80 border border-amber-900/30 rounded-xl overflow-hidden h-full p-1">
                <Image
                  src="/images/office-marble.jpeg"
                  alt="Escritório com móveis planejados"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Projects Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
          <div className="relative overflow-hidden">
            <Image
              src="/images/kitchen-blue-wood.jpeg"
              alt="Cozinha planejada moderna com ilha e detalhes em preto"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/images/kitchen-marble-island.jpeg"
              alt="Cozinha planejada com ilha de mármore e armários azuis"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section with Professional */}
      <section className="bg-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 flex items-center justify-center py-16 px-8">
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Chegou a hora de <br />
                transformar <span className="text-amber-600 italic font-serif">espaço</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Não adie mais o projeto da casa que você sempre <br />
                imaginou. Com a Vivah Móveis Planejados, você tem design, <br />
                qualidade e funcionalidade em cada detalhe.
              </p>
              <p className="text-base text-gray-600 mb-8">
                Clique no botão abaixo e comece agora <br />
                mesmo a dar vida ao seu projeto exclusivo:
              </p>
              <Button
                onClick={() => openWhatsApp("Olá! Quero agendar meu projeto de móveis planejados com a Vivah!")}
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-4 text-lg font-medium"
              >
                QUERO AGENDAR MEU PROJETO
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[600px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2028%2C%202025%2C%2012_31_25%20AM-Q1pO2lbfyAk4W6m71pd6A08t23ur6P.png"
              alt="Profissional Vivah Móveis com capacete e projetos"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Perguntas Frequentes <span className="text-amber-600 italic font-serif">(FAQ)</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => openWhatsApp()}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

// FAQ Accordion Component
function FaqAccordion() {
  const faqs = [
    {
      question: "Os móveis realmente são sob medida?",
      answer:
        "Sim, todos os nossos móveis são projetados e fabricados sob medida para cada cliente, aproveitando perfeitamente o espaço disponível.",
      color: "amber",
    },
    {
      question: "Qual o prazo médio para entrega e instalação dos móveis?",
      answer:
        "O prazo médio é de 30 a 45 dias úteis, dependendo da complexidade do projeto. Sempre cumprimos os prazos estabelecidos.",
      color: "amber",
    },
    {
      question: "É possível fazer um projeto mesmo com orçamento reduzido?",
      answer:
        "Sim, trabalhamos com diferentes faixas de orçamento e oferecemos soluções personalizadas para atender às suas necessidades.",
      color: "amber",
    },
    {
      question: "O atendimento é presencial ou posso fazer tudo online?",
      answer:
        "Oferecemos ambas as opções. Você pode nos visitar no showroom ou fazer todo o processo online com nossos consultores.",
      color: "amber",
    },
    {
      question: "Os móveis possuem garantia?",
      answer:
        "Sim, oferecemos 5 anos de garantia em todos os nossos móveis, cobrindo defeitos de fabricação e instalação.",
      color: "amber",
    },
    {
      question: "Vocês também fazem a instalação dos móveis?",
      answer: "Sim, temos equipe própria de instalação especializada que garante a montagem perfeita dos seus móveis.",
      color: "amber",
    },
    {
      question: "Preciso ter uma planta do ambiente para fazer o orçamento?",
      answer: "Não é obrigatório. Nossos consultores podem fazer a medição no local e criar o projeto 3D para você.",
      color: "amber",
    },
    {
      question: "Ainda tenho dúvidas. Como posso falar com vocês?",
      answer:
        "Entre em contato conosco pelo WhatsApp (11) 97469-1564 ou visite nosso showroom. Estamos sempre prontos para atendê-lo.",
      color: "amber",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  )
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${isOpen ? "shadow-amber-200/50" : ""}`}
    >
      <button
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
        <div
          className={`flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pt-2 border-t border-amber-200">
            <p className="text-gray-700 leading-relaxed mt-4">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}
