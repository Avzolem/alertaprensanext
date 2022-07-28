/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { label: "Creado", value: "2022" },
  { label: "Maestros", value: "5" },
  { label: "Personas beneficiadas", value: "521" },
  { label: "Costo al público", value: "$2500" },
];

export default function Example() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="absolute inset-0 bg-teal-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600 via-teal-600 opacity-90" />
              <div className="relative px-8">
                <div>
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                    alt="Workcation"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-teal-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      yo quiero ver algo especial yo quiero ver una bella danza
                      y caminar con los ¿cómo se llaman? ah, pies.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-teal-200">
                      Ariel Andersen, CEO de Observatorio Digital de Riesgos
                      Periodísticos
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              Curso de seguridad
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Este es un curso, en el que podremos aprender a caminar en el
                exterior, utilizando piernas. Para ello debemos dejar las aletas
                bajo el mar. El curso, nos permite también aprender a bailar,
                lamentablemente tiene efectos secundarios, siendo uno de los más
                importantes la pérdida de voz.
              </p>
              <p className="text-base leading-7">
                Muchas veces debemos luchar por nuestros sueños sin importar lo
                que piensen los demás, aunque estos sean nuestro propio padre,
                incluso aunque sea el rey del mar. Muchas veces estas conductas
                de paternidad tóxica, hacen que dejemos de creer en nuestros
                sueños y luchar por ellos.
              </p>
              <p className="text-base leading-7">
                Aunque es verdad que debemos luchar por nuestros sueños y
                nuestras metas, tenemos que tener muy en cuenta que hay personas
                que se pueden hacer pasar por nuestras amigas, buscando
                aprovecharse de nosotros, robandonos cosas valiosas, por ejemplo
                la voz.
              </p>
            </div>
          </div>

          {/* Stats section */}
          {/* <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-gray-500">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-indigo-600">
                {" "}
                Learn more about how we're changing the world{" "}
                <span aria-hidden="true">&rarr;</span>{" "}
              </a>
            </div>
          </div> */}
          <button
            type="button"
            className="mt-10 inline-flex items-center px-6 py-3 space-y-6 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Inscríbete
          </button>
        </div>
      </div>
    </div>
  );
}
