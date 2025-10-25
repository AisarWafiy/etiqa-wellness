"use client"

import { Star } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function Testimonials() {
  const { t } = useI18n()

  const testimonials = [
    {
      name: t("testimonials.items.emily.name"),
      role: t("testimonials.items.emily.role"),
      content: t("testimonials.items.emily.content"),
      rating: 5,
      image: "/professional-woman-smiling.png",
    },
    {
      name: t("testimonials.items.michael.name"),
      role: t("testimonials.items.michael.role"),
      content: t("testimonials.items.michael.content"),
      rating: 5,
      image: "/professional-man-smiling.png",
    },
    {
      name: t("testimonials.items.sarah.name"),
      role: t("testimonials.items.sarah.role"),
      content: t("testimonials.items.sarah.content"),
      rating: 5,
      image: "/professional-woman-happy.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("testimonials.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
