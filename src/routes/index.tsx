import { createFileRoute } from "@tanstack/react-router"
import { HomePage } from "@/components/portfolio/home"

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ali Zafar · Cloud Data Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ali Zafar, Cloud Data Engineering trainee in Karachi. Python, SQL, ETL and a PeopleOps warehouse case study.",
      },
    ],
  }),
})
