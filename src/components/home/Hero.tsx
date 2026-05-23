import Button from "../ui/button";

export default function Hero () {

    return (
        <section
          className="
           px-6
           md:px-16
           py-24
         "
        >

            <div className="max-w-4xl">

                <div className="mb-10">
                  <Button variant="subtle" size="sm">
                      Exploring free and personalized learning
                  </Button>
                </div>

                <p className="
                  text-[#14213D]
                  text-5xl
                  mb-4
                ">
                    Revolutionizing <br/>
                    Digital learning with AI
                </p>

                <p className="
                  body-text
                  max-w-2xl
                  mb-10
                ">
                    Personalized AI learning experiences designed
                    for students, creators, and future innovators.
                </p>

                <div className="flex gap-6">
                    <Button>
                        Get Started
                    </Button>

                    <Button variant="accent">
                        Explore Courses
                    </Button>

                </div>

            </div>

        </section>
    )
}