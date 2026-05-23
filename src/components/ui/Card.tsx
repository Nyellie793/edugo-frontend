

type CardProps = {
    title: string
    description: string
}

export default function Card({
    title,
    description
}: CardProps) {

    return(
        <div className="
          bg-white
          rounded-3xl
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
         "
        >
            <div className="
              w-14
              h-14
              rounded-2xl
              bg-blue-100
              mb-6"></div>

              <h3 className="h3-text mb-3">
                {title}
              </h3>

              <p className="body-text">
                {description}
              </p>
        </div>
    )
}