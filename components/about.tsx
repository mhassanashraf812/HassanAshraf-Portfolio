import Image from "next/image"

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-96 relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/hasssan.jpeg"
                  alt="Professional portrait"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                About <span className="text-purple-500">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
               I’m a passionate Software Engineer with expertise in software design, architecture, and Next.js web application development, specializing in building modern, scalable, and high-performance solutions that deliver exceptional user experiences. Driven by curiosity and a commitment to clean, maintainable code, I apply solid architectural principles and stay updated with the latest technologies to craft innovative, reliable, and efficient applications that make an impact
              </p>
            </div>

            {/* Skills or Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-purple-500">2+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="text-2xl font-bold text-blue-500">30+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
