import { HOW_IT_WORKS_CONTENT } from "../constants";

const HowItWorks = () => {
  return (
    <section id="works">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 border-t border-t-neutral-800">
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-l from-neutral-50 via-neutral-300
          to-neutral-600 bg-clip-text text-transparent"
          >
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-neutral-400 mb-4">{step.description}</p>
              </div>
              <div className="flex justify-center">
                <img
                  className="rounded-lg"
                  src={step.imageSrc}
                  alt={step.imageAlt}
                />
              </div>

              {step.users && (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    {step.users.map((user, idx) => (
                      <img key={idx} src={user} alt={`User-${idx + 1}`} />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Connect
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
