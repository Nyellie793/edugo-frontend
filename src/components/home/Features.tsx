import Card from "../ui/Card";

export default function Features() {
    return(
        <section
          className="
            px-6
            md:px-16
            py-20
          "
        >
            <div className="
              grid
              md:grid-cols-3
              gap-3"
            >
                
                <Card 
                 title="AI-Tutor"
                 description="Get instant personalized explanations."
                />

                <Card 
                 title="Smart Analytics"
                 description="Track your growth and study habits."
                />

                <Card 
                 title="Interactive Quizzes"
                 description="Adaptive quizzes tailored to your level."
                />

            </div>
            
        </section>
    )
}