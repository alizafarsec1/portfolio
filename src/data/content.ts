import site from "./site.json"
import projectFile from "./projects.json"

export type PipelineStage = (typeof site.pipeline)[number]
export type Skill = (typeof site.skills)[number]
export type Project = (typeof projectFile.projects)[number]

export const profile = site
export const projects: Project[] = projectFile.projects

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
