import { createFileRoute } from "@tanstack/react-router"
import { CaseStudy } from "@/components/portfolio/case-study"
import { projectBySlug } from "@/data/content"

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectRoute,
  head: ({ params }) => {
    const project = projectBySlug(params.slug)
    return {
      meta: [
        { title: project ? `${project.title} · Ali Zafar` : "Project · Ali Zafar" },
        { name: "description", content: project?.summary ?? "Project case study by Ali Zafar." },
      ],
    }
  },
})

function ProjectRoute() {
  const { slug } = Route.useParams()
  return <CaseStudy slug={slug} />
}
