import React from 'react'

const benefits = [
  {
    title: "100% Pure & Authentic",
    description: "Our oils are extracted using advanced distillation techniques to maintain purity and potency, with no synthetic additives.",
    icon: <span className="text-2xl">🌿</span>
  },
  {
    title: "Seed to Seal Promise",
    description: "We control every step of the production process to ensure the highest quality standards, from cultivation to bottling.",
    icon: <span className="text-2xl">🌱</span>
  },
  {
    title: "Sustainable & Ethical",
    description: "Our commitment to the environment ensures responsible sourcing and production methods, supporting ecological balance.",
    icon: <span className="text-2xl">🌍</span>
  }
]

export default function BenefitSection(){
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container flex flex-col mx-auto justify-center items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-emerald-800">Why Choose Young Living Essential Oils?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Young Living's commitment to quality ensures you receive the purest, most effective essential oils
            available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-emerald-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl text-emerald-600 font-semibold mb-3">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
