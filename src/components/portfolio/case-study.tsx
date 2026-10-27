import { projectBySlug, projects } from "@/data/content"
import { Chrome } from "./chrome"

export function CaseStudy({ slug }: { slug: string }) {
  const project = projectBySlug(slug)
  if (!project) {
    return (
      <Chrome home={false}>
        <main className="wrap" style={{ paddingBlock: 80 }}>
          <div className="sechead">
            <div className="eyebrow">Missing page</div>
            <h2>That project is not in the notebook.</h2>
            <p className="note">Check the slug in the projects file. It has to match the address exactly.</p>
          </div>
          <a className="btn primary" href="/#projects">
            back to projects
          </a>
        </main>
      </Chrome>
    )
  }

  const more = projects.filter((p) => p.slug !== project.slug)

  return (
    <Chrome home={false}>
      <main className="wrap case-wrap">
        <div className="case-main">
          <a className="backlink" href="/#projects">
            ← back to all projects
          </a>
          <header className="case-block">
            <div className="eyebrow">Case study · {project.cap}</div>
            <h2>{project.title}</h2>
            <div className="meta mono">{project.meta}</div>
            <p>{project.summary}</p>
            <div className="flowline">
              {project.flow.map((f, i) => (
                <span key={f} style={{ display: "contents" }}>
                  <span>{f}</span>
                  {i < project.flow.length - 1 ? <i>→</i> : null}
                </span>
              ))}
            </div>
            <div className="tags">
              {project.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="links-row">
              {project.github ? (
                <a className="btn primary" href={project.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              ) : null}
              {project.demo ? (
                <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
                  live demo ↗
                </a>
              ) : null}
              <a className="btn" href="/#contact">
                talk about it
              </a>
            </div>
          </header>
          <section className="case-block">
            <div className="eyebrow">The story</div>
            <h2>What the work actually is.</h2>
            {project.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </section>
          {project.gallery.length > 0 ? (
            <section className="case-block">
              <div className="eyebrow">Drawings & evidence</div>
              <h2>Replace these with your screenshots.</h2>
              {project.gallery.map((g) => (
                <figure className="shot" key={g.src + g.caption}>
                  <img src={g.src} alt={g.caption} />
                  <figcaption>
                    <b>{g.caption}.</b> {g.note}
                  </figcaption>
                </figure>
              ))}
            </section>
          ) : null}
          {project.sql ? (
            <section className="case-block">
              <div className="eyebrow">SQL</div>
              <h2>{project.sqlLabel || "A query from the work"}</h2>
              <pre className="codeblock">
                <code>{project.sql}</code>
              </pre>
              <p className="notice">This is a pattern to read, not a claim that the query has been run against a production database.</p>
            </section>
          ) : null}
          {more.length > 0 ? (
            <section>
              <div className="sechead">
                <div className="eyebrow">Also on the shelf</div>
                <h2>Other projects.</h2>
              </div>
              <div className="libgrid">
                {more.map((item) => (
                  <a className="libcard" href={`/projects/${item.slug}`} key={item.slug}>
                    <div className="cover">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="body">
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <span className="readmore">open →</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </div>
        <aside className="case-side">
          <div className="eyebrow">Project snapshot</div>
          <h3 style={{ fontSize: 26, fontWeight: 800 }}>{project.cap}</h3>
          <ul>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="notice">
            Cover images live in the img folder. Text for this page lives in the projects file. Change either, then publish again.
          </div>
          {project.github ? (
            <a className="btn primary" href={project.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          ) : null}
          <a className="side-link" href="/#projects">
            ← all projects
          </a>
        </aside>
      </main>
    </Chrome>
  )
}
