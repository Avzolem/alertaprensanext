const posts = [
  {
    title:
      "El periodista Ernesto Méndez fue asesinado en Guanajuato, van 13 homicidios en el año",
    href: "https://www.proceso.com.mx/nacional/2022/8/3/el-periodista-ernesto-mendez-fue-asesinado-en-guanajuato-van-13-homicidios-en-el-ano-290804.html",
    category: { name: "Artículo", href: "#" },
    description:
      "Un grupo armado irrumpió en el lugar y arremetió contra cuatro personas entre las que se encontraba el director del periódico. La organización Artículo 19, aseguró que el bar es propiedad de la familia de Méndez.",
    date: "Ago 3, 2022",
    datetime: "2022-08-03",
    imageUrl:
      "https://www.proceso.com.mx/u/fotografias/fotosnoticias/2022/8/3/159059.jpg",
    readingTime: "6 min",
    author: {
      name: "Rodrigo Hernández López",
      href: "#",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw4ODxIQDxAOEhAQEBAPEA8PDxIQFxEXFhYRFRYYHSggGBwlGxYVITEiJSkrLi4uFx80ODMsOSguLisBCgoKDg0OGxAQGC0iHyUuLS0vLS0tLi0rNTUtLS43NzYvLS0tKy0tKy0tLystLTAtNSstLS0vLS0tLTctKy03Lf/AABEIANwA5QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABIEAABAwMABAkHCQYEBwAAAAABAAIDBBESBSExUQYHQVJhcYGRoRMUIjKSk9IzQlNicrHB0dMVFjSCouElc8LwI0NEY6Oys//EABkBAQADAQEAAAAAAAAAAAAAAAACAwUEAf/EACcRAQEAAgICAAUEAwAAAAAAAAABAhEDBBIxEyEyQZEiUWFxI7Hw/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiLQOFfDV5fJR6OLcmEtnqyA5kR5WRjY9/gPujnnMZuvccbldRs+nuE1HRAecSAPd6kLAXzP+ywa+02HStSrOG9fL/C08VLGdklY4ulI3iNh9E9ZK1eniZGXPF3yvN5J5SXzPPKS4q6ZL7da4s+zlfTpx4ZPaXUVlbL8vpGqN/m0zY6Zo6LtFyoj6KF3yj6uXplqpnfivM0zVF5Mr91kxkUfsqj+if1+Xmv96ux0rG/JTVsG4xVUot2EqnNM1555PfGMnS6Z0lD8jWicDZFXRB3/kZZy2DRvGDGC2PSELqNx1CYHytK4/bGtnaO1aZmqhLqLTYtOotOtpHUrcOxnEMuLGuyRSNe1r2EOa4Atc0hzSDsII2hVrjmhtKT6PdnS3kpyby0Tj6Ova+E/Md0bD3LquhdLwVkDKindkx+/U5rhtY4cjhuXbx8sz9ObPC4pyIitQEREBERAREQEREBERAREQEREBEVivq2QRSzyGzIWOkedzWgk/cg03jH4SPiDdH0zsZ6hpdLI064YNhI3OdrA3azq1LRIGNjY2Ngxa3YPxVjzt88k1XL8rVPMjuXFuxkY6A2wVeazOXk88nbx4eMX80zUZ0oAJJsBtJ2KVofRNTW2dHeCn5Z3D03j/tN/E/2VWk1iWtjY5rXOAc42A5f7K9mtypuCVEyCSDyQcJRaSR/pTOO3LPkN9eqwutHraSWjm81mOV7mCXklj+Ico/tdr9ntlntezTNWM0zR4v5pmrGaZoJAer+hNNO0fU+ctuaeUhtXENd28k7Rzm37RfrUDNeFwOo6wdRUscrjdx5ZLNV3aGVr2tewhzXgOa4G4LSLgg7rKtaFxU6WLoptHvN3UhD4SdppnnUOnF1x1Fq31amGXlNuHKauhERSeCIiAiIgIiICIiAiIgIiIC0njZriyhZTg2NZMyI7/Jt9N5/pA/mW7LlfG7UXq6GLkjimlt0vc1oP9BVfNdYVPjm8o1PNePmABJNgNZKsZrLcFdD+eTGSQXpqdwuDsll249LRtPYst2ybuom8GeDZqcamqBEOp0MB1eU3SSdG4cvVt39jQAANQGoAagBuVLVWFDe18xmMVhQNPaFirIDDJqPrRyD1o5BscPxHKFkAqwrIhk47MyWGV9NUDGaP2ZG8kjN4KZrqmmtBU9YwMnZct9SRpxkYd7XcnVsWiaU4FVsBJgLauPkFxHOB0g+i7sNzuUriqYbNM1FqJTEcZmSQO5szHRnx2qjzuPnt7wo6NpuaZq3R01TOHPp4JJmN2vFmtPQ2/rHoCssmvfaC0kOa4Wc0jaCOQpoZrgvpDzfSVFNezZH+bSdLJdTb9T8T2LuC+ca2Qhhc02cyz2nc5pBB8F9E0swfHHINj2teOoi67erflY5+afPa6iIupQIiICIiAiIgIiICIiAiIgLjnGs/wDxRo3UkXjLIuxrjfG6y2konc+kjHdLJ+ao7H0LOL6mpnJxbHHrfK5sbB9ZxsF1nRFAymgigZsjba/Odtc49ZuVoHAOk8rWGQ620zC4f5j/AEW+GXculBZXJfs0uLH5bXAqwrYVwJinVwK4FaCrBVsVVdCEqkFCVPaGlMjQ4WcARuIBCg/sumByEEAO/wAlHfvspxKoKhanIoO7ctF4wtEAAV8Ys5payoA+cwmzXnpBsOo9C3kqNW0zZY5In62ytcx3URZQ3qp3Hc041UO9B/2T9y+geDRJoaInaaanJ6/JNXzrUtcxssbvXiLo3faacSvpTR0Hk4YY/o442ey0D8F39We3BzfZIREXW5xERAREQEREBERAREQEREBc5449DufDBWsBPmxcyW30TyLO7HAe2V0ZUTwte10bwHMeC1zXC7XNIsQRyiyjnj5TT3G6u3JOLWC1PPLyyTWv9VrRbxc5biFC0boqOjEtNFfBkshbkbkNccgL8tgbX6FMCw+T662sJ+mLgVxpVppVYKSvLF0FVAq2CqgVZKrsXLpdUXS6lt5pUSqCUJVJK8teyPCVQV6SqHFVWrJHKuFtB/iboh/1T4HNHTIQ0/1Ar6AWh0/B9lRpSmqnn0aSIux5XSB58nfoBc53WAt8Wp1Po2zezNZ6ERF1OcREQEREBERAREQEREBERAREQaxpNlqmb6wY8ezY+IVhZDhDFaSGTkcHRnr9Zv8AqWPWJ2MfHlrZ4cvLjxv8f6egqsFW1UCqpU7FwFVAq2CvbqcqNi5dLqi6XXu0dKiV4SqbrwleWvZAlUkoSqSVC1ORkeDrbyTu3CNg8SfvCzqxnB2K0GR2yuc/s2DwAWTWz1sfHikZXZy3y3/vQiIr1AiIgIiICIiAiIgIiICIiAiIghaXpjLC9o9Yemz7TdY79natcjfkARyrcFrOk6byUpt6kpLm7g/5zfxWf3eLcmcd/T5PeF/uI6IizXe9BXt1Sl17t5pXdLqi69uvdvNKrqkleXRebe6FS5heWxt9aQho6BynsF1Uslwfpbk1DtmtkXV85/bs7Fbw8fxM5EOTk+HjcmaijDWtaNQaA0DoAsFUiLcYoiIgIiICIiAiIgIiICIiAiIgIiICsVtK2Vhjdy6wRta7kcFfReWSzVey2Xcai9jmOMcmp7e5w5HDoRZrhDGzyDnuHpR2LHDUQ4kC3V0LXIakHU7Ud/IVjdjh+HlqNjh5PiYeSSiIudaIiICLwkDWdSiT1N7hmr635L0kZCjpDO/AXEbflHD/ANB0nwW0MaAA0CwAAAGwAcijaJDfIQ4ANBY02G8jX4qWtnr8M48f5rJ7HLc8tfaCIi6HOIiICIiAiIgIiICIiAiIgIiICLF6S4RUNNqqKqnhPNfKwPPU29z3LXarjP0cCRTtqax2y1PTvtf7T8RbqQbsi5xPw90lJfzegjgbySVk9++NgBHesTVaY0rL8tpKOnB2x0ULL+067h3oN54U1d3MgHzfTf1/NH3nuWCUWgqGvaLPdIRZpfIXOkcQLXcTrJUpY3PlcuS2tjixmOEkVMkc3Yew6wroqzytB6jZWEsqdLfJJ88+qe8Kh1U7kAHXrVrFMU0eQ4k+sSfu7l4iI8t22zg1LlTNHMc5vjf7iFlVynSFdVMkApK7zQj1o3RRyxvJ+ccgbG2rUr9Nwu01H6zKCtaOWNz4JD23LfBbXBd8eO/2ZPYn+XL+3T0XP4eMtzLed6Oq4t5gMdSwdvonwWUouMjREhsagQu5W1EckNu1wx8VapbYiiUOk6ecZQTQzg8sMrJB3tJUtAREQEREBERAREQeOcACSQANZJ1ADetE0xxmQNc6KgidXvbqMjXCOlB/zSDl2Cx3rWeHnCp1fNJRwOLaGFxZM5hsaqQbWgj/AJYOrpPRZa+JbNDGgMaNjW6gg2Ss4X6Ylv8A8akogfoYvLSAdchI8Fhqtz5v4qtram+1nlXRxH+RtgoWaZoL8EFLF8lTxg85/pnxUo6RktYENG5gDQsdmmaCW+dzvWJPWSVRmo+aZoMjQ1zonZDWD6w3j81tdJVMlaHMN/vB3HcVoeau09W+N2TCWnwPQRyrm5+vOT5z26eDsXD9N9OgNarzY1rFFwoAsJW9rdY7to8VmIOENMfngdZx++y4Lw54+47ZyY5erGRwXhYop07S/SM9tn5qHU8KKdvqnI/VBP5DxScdvqX8PfKT3Z+WSe1YvSekmQi2152N/E7gsLXcJJH3DBgN+ou/IeKw7pSSSSSTtJ1kro4upbd5/hRydqYzWHzv7pEkxcS5xuSbkrwPUbNM1oM+3acytkbse7vuPFVvri4WkbHIPrsaVjs0zQXJKKiecjAGO50TiwjqtZTKWpni/h9IVsO5skhnjH8r7hY/NM0G16P4c6Vp7eWEGkYh6xYBT1Nt/o+ieq3augcGuE1LpCMvp3nJlhLDIMJojue38RcG21cVbLbWNSNqZYpWVdM7yVVFscPVkbyxyD5zT/voD6DRYbgnwgj0hSsqYxi65ZNGTd0Uw9aM94I3ggrMoCIiAtR4ztOupKBzYjjPVu83iI2tyBL5OizQde8tW3LjHGzpDyuk44L+jRQDVullOTv6BH3oNXga1jWsbqDRYKvNR80zQSM0zUfNM0EjNM1HzTNBIzTNR80zQSM0zUfNM0EjNM1HzTNBIzTNR80zQSM0zUfNM0EjNM1HzTNBIzTNR80zQSM0zUfNM0EjNM1HzTNBtHF1pk0mkmRk2g0haJ45G1A1xP7dbenIbl2xfM1U52Jcw4vYQ9jhta9pya4doX0XoPSDaqlpqpuyeKOW24uaCR2HV2IJyIiAvnThPV+V0lpKXfUyMv0RWiHgxfRa+XZZ85Jn/SSyv9qQn8UF7NM1HzTNBIzTNR80zQSM0zUfNM0EjNM1HzTNBIzTNR80zQSM0zUfNM0EjNM1HzTNBIzTNR80zQSM0zUfNM0EjNM1HzTNBIzTNR80zQSM0zUfNM0EjNdk4nazymimx3uaWaeE9WXlAO6QLiea6lxG1HoaRh5skMvtsLT/APMIOpIiIPLr5RjNhY7Re/evqYvK4nX8VukfLSmJ1M6MvcWF0j2OxJuLtxNtttqDSM0zW3Hiv0pvpPfSfAqTxZaT30vvpP00Gp5pmtrPFppLnUvvZP01SeLfSPOpfey/poNWzTNbQeLnSPOpfey/pqk8XmkOdS+8l/TQazmma2Q8X1fzqb3kv6a8PACu51N7yX4EGuZpmti/cOu51P7yX4F4eAtbzqf25fgQa9mma2D9xq3nU/tyfAvP3HrOdT+3J8CDAZpms8eBFbzqf25PgT9yK3fT+3J8CDA5pms+OA1bzqf3knwL0cBK7nU/vJfgQa/mma2IcAq7nU3vJfgVQ4v67n03ty/Ag1vNM1s44vK7n03ty/Aqhxc13Ppvbl+BBq2aZrbBxbV/0lN7cvwKocWdf9JS+3L8CDUc0zW4jivr/paX2pvgVY4rK/6al9qb4EGl5rpHEbLaqr286GF3svcP9axw4qK/6al75vgW1cXnAmq0dVSzzSQvZJC6K0Rkyy8oxwPpNGqzXd6DpV0VgORBcMapMSvIgjGBUmmUtEEE0gVBogsilkGLNCFSdHhZWyWQYc6NCoOjAs3ZMUGCOihuVJ0SNyz+IXlggwB0QNy8/Y43LYLJZBr37HG5e/scblsFksgwA0QNyqGiRuWdsvcQgwY0WFUNGBZrEJZBiBo4KoUAWVslkGNFCFWKMKfZeoIQpVWKdSkQRxCqxErqIKAxeK4iD//Z",
    },
  },
  {
    title:
      "La SIP concede premios a la Excelencia Periodística 2022 a medios y periodistas de 12 países",
    href: "https://www.sipiapa.org/notas/1215301-la-sip-concede-premios-la-excelencia-periodistica-2022-medios-y-periodistas-12-paises",
    category: { name: "Artículo", href: "#" },
    description:
      "El Gran Premio SIP a la Libertad de Prensa 2022 fue otorgado a los periodistas mexicanos caídos en el ejercicio de su profesión durante el último año.",
    date: "Ago 2, 2022",
    datetime: "2022-08-02",
    imageUrl:
      "https://media.sipiapa.org/adjuntos/185/imagenes/001/843/0001843064.jpg",
    readingTime: "4 min",
    author: {
      name: "SIP",
      href: "#",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
  {
    title:
      "Alerta Prensa: Propuesta de autoprotección de las y los periodistas en México",
    href: "https://www.sipiapa.org/notas/1215222-alerta-prensa-propuesta-autoproteccion-las-y-los-periodistas-mexico",
    category: { name: "Artículo", href: "#" },
    description:
      "La nueva plataforma será presentada el próximo 13 de junio en la ciudad de México.",
    date: "Jun 7, 2022",
    datetime: "2022-06-07",
    imageUrl:
      "https://media.sipiapa.org/adjuntos/185/imagenes/001/844/0001844939.jpg",
    readingTime: "4 min",
    author: {
      name: "SIP",
      href: "#",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
];

export default function Post() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 2xl:flex  2xl:h-[1200px] 2xl:w-full">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Noticias
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Pon un copy lindo aquí Paty... :)
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} lectura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
