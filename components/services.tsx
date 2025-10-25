"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function Services() {
  const { t } = useI18n()

  const services = [
    {
      title: t("services.items.mindfulness.title"),
      description: t("services.items.mindfulness.description"),
      image: "/meditation-mindfulness-peaceful-zen.jpg",
      duration: t("services.items.mindfulness.duration"),
    },
    {
      title: t("services.items.nutrition.title"),
      description: t("services.items.nutrition.description"),
      image: "/healthy-food-nutrition-wellness-colorful.jpg",
      duration: t("services.items.nutrition.duration"),
    },
    {
      title: t("services.items.movement.title"),
      description: t("services.items.movement.description"),
      image: "/yoga-movement-exercise-wellness-stretching.jpg",
      duration: t("services.items.movement.duration"),
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("services.description")}</p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="inline-block">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full">
                    {service.duration}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                <Button variant="outline" className="group bg-transparent">
                  {t("services.learnMore")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
