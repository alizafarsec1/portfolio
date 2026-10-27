import { useEffect, useMemo, useState } from "react"
import { profile, projects, type Project } from "@/data/content"
import { Chrome } from "./chrome"
import { ArrowLink, PipeIcon, ProjectIcon } from "./icons"

export function HomePage() {
  return (
    <Chrome home>
      <main id="top">
        <Intro />
        <div className="wrap">
          <Hero />
          <Stats />
        </div>
        <About />
        <Pipeline />
        <Work />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </Chrome>
  )
}

type ScreenLine = { t: string; c?: "p" | "q"; slow?: boolean; caret?: boolean }

function ComputerScreen({ onTyping }: { onTyping: (typing: boolean) => void }) {
  const lines = useMemo<ScreenLine[]>(
    () => [
      { t: profile.screen[0], c: "p" },
      { t: profile.screen[1] ?? "", slow: true },
      ...profile.screen.slice(2).map((t) => ({ t })),
      { t: `“${profile.screenQuote}”`, c: "q" },
      { t: "> open profile", c: "p", caret: true },
    ],
    [],
  )
  const [rows, setRows] = useState<{ text: string; c?: "p" | "q"; caret: boolean }[]>([])

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setRows(lines.map((line) => ({ text: line.t, c: line.c, caret: Boolean(line.caret) })))
      onTyping(false)
      return
    }

    let cancelled = false
    const timers = new Set<number>()
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => {
          timers.delete(id)
          resolve()
        }, ms)
        timers.add(id)
      })

    const run = async () => {
      await wait(700)
      for (let li = 0; li < lines.length; li++) {
        if (cancelled) return
        const line = lines[li]
        onTyping(true)
        for (let i = 1; i <= line.t.length; i++) {
          if (cancelled) return
          setRows((prev) => {
            const next = prev.slice(0, li)
            next[li] = { text: line.t.slice(0, i), c: line.c, caret: i < line.t.length || Boolean(line.caret) }
            return next
          })
          if (i < line.t.length) {
            const ch = line.t[i - 1]
            const delay = line.slow && ch === "." ? 160 : ch === " " ? 70 : 42 + Math.random() * 40
            await wait(delay)
          }
        }
        onTyping(false)
        await wait(li === 0 ? 500 : 380)
      }
    }
    void run()

    return () => {
      cancelled = true
      timers.forEach((id) => window.clearTimeout(id))
      onTyping(false)
    }
  }, [lines, onTyping])

  return (
    <div className="screen" aria-live="polite">
      {rows.map((row, i) => (
        <div key={i} className={row.c}>
          {row.text}
          {row.caret ? <span className="caret" /> : null}
        </div>
      ))}
    </div>
  )
}

function Intro() {
  const [hands, setHands] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return
      const tag = (document.activeElement as HTMLElement | null)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON" || tag === "A") return
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="intro" id="intro" aria-label="Intro">
      <div className="wrap">
        <div className="intro-title">somewhere, a team is looking for someone who will not hide a bad row…</div>
        <div className={hands ? "scene typing" : "scene"} id="scene">
          <svg viewBox="0 0 800 560" role="img" aria-label="Line drawing of a person at a desk, typing, with a mug of coffee">
            <g fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.5">
              <rect x="48" y="48" width="150" height="176" rx="4" />
              <path d="M123 48 V224 M48 136 H198" />
            </g>
            <path d="M0 356 H800" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
            <g stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M690 300 h44 v48 q0 8 -8 8 h-28 q-8 0 -8 -8z" fill="var(--card)" />
              <path d="M734 312 q16 0 16 14 q0 14 -16 14" fill="none" />
              <g className="steam" fill="none" strokeWidth="2.4">
                <path d="M704 286 q-8 -12 0 -24 q8 -12 0 -24" />
                <path d="M720 286 q-8 -12 0 -24 q8 -12 0 -24" />
              </g>
              <rect x="330" y="90" width="340" height="232" rx="12" fill="var(--card)" />
              <rect x="346" y="104" width="308" height="196" rx="4" fill="var(--screen)" strokeWidth="2" />
              <path d="M330 322 L670 322 L712 356 L288 356 Z" fill="var(--card)" />
              <path d="M338 333 H662 M322 344 H678" fill="none" strokeWidth="1.6" />
              <path d="M40 560 C48 486 110 446 196 436 C268 428 340 444 372 488 C388 512 394 536 398 560 Z" fill="var(--card)" />
              <path d="M214 452 q10 50 -2 108 M120 486 q22 24 30 60 M318 470 q-6 30 6 70" fill="none" strokeWidth="1.8" />
              <path d="M330 452 C372 430 410 392 446 352 L466 362 C432 412 398 456 358 484 Z" fill="var(--card)" />
              <path d="M262 418 C300 396 350 370 392 350 L404 364 C364 384 316 408 276 432 Z" fill="var(--card)" />
              <g className="tap2">
                <rect x="382" y="336" width="32" height="18" rx="8" fill="var(--card)" />
                <path d="M392 338 v8 M400 337 v8" strokeWidth="1.5" fill="none" />
              </g>
              <g className="tap1">
                <rect x="440" y="334" width="34" height="18" rx="8" fill="var(--card)" />
                <path d="M452 336 v8 M461 335 v8" strokeWidth="1.5" fill="none" />
              </g>
              <path d="M192 400 L196 440 Q216 448 238 440 L242 400" fill="var(--card)" />
              <g className="head">
                <ellipse cx="217" cy="352" rx="58" ry="64" fill="var(--card)" />
                <path d="M160 356 q-12 4 -4 24 M274 356 q12 4 4 24" fill="none" />
                <path d="M160 360 C150 300 186 282 217 282 C252 282 286 300 276 362 C268 392 250 404 217 406 C186 404 166 392 160 360Z" fill="var(--ink)" />
                <circle cx="217" cy="284" r="21" fill="var(--ink)" />
                <path d="M188 312 q22 -14 46 -6 M198 334 q14 -6 32 -2" stroke="var(--card)" strokeWidth="2" fill="none" />
              </g>
              <path d="M58 560 L68 518 Q216 490 368 518 L378 560 Z" fill="var(--chair)" />
            </g>
          </svg>
          <ComputerScreen onTyping={setHands} />
        </div>
        <div className="intro-actions">
          <a className="btn primary" href="#hero">
            open profile ↓
          </a>
          <span className="intro-hint">or press enter ↵</span>
        </div>
      </div>
    </section>
  )
}

function Hero() {
  const [on, setOn] = useState(false)
  return (
    <header className="hero" id="hero">
      <div className="hero-copy">
        <div className="tagline">{profile.tagline}</div>
        <div className="eyebrow">
          {profile.role} · {profile.place}
        </div>
        <h1>
          {profile.headlineBefore}
          <span className="hl">{profile.headlineMark}</span>
          {profile.headlineAfter}
        </h1>
        <p className="lede">
          <span className="yrs">SMIT</span> {profile.lede}
        </p>
        <div className="facts">
          {profile.chips.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
        <div className="cta">
          <a className="btn primary" href="#projects">
            pick a project →
          </a>
          <a className="btn" href="#pipeline">
            run the flow
          </a>
          <a className="btn" href={profile.resume} download={profile.resumeName}>
            resume ↓
          </a>
        </div>
      </div>
      <div className="polaroid-wrap">
        <div style={{ position: "relative" }}>
          <button
            className={on ? "polaroid drawin on" : "polaroid drawin"}
            type="button"
            aria-pressed={on}
            aria-label="Portrait of Ali Zafar. Click to colour it in."
            onClick={() => setOn((v) => !v)}
          >
            <svg viewBox="0 0 300 360" role="img" aria-label="Polaroid portrait of Ali Zafar">
              <rect x="6" y="6" width="288" height="348" rx="6" fill="var(--card)" />
              <g className="reveal">
                <rect x="26" y="26" width="248" height="248" className="fillc" />
              </g>
              <image
                className="photo"
                href={profile.portrait}
                x="26"
                y="26"
                width="248"
                height="248"
                clipPath="url(#azPhoto)"
                preserveAspectRatio="xMidYMid slice"
              />
              <rect className="ink" x="6" y="6" width="288" height="348" rx="6" pathLength="1" />
              <rect className="ink d2" x="26" y="26" width="248" height="248" pathLength="1" />
              <text x="150" y="322" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="34" fontWeight="700" fill="var(--ink)">
                {profile.portraitNote}
              </text>
              <rect x="112" y="-8" width="80" height="26" rx="3" transform="rotate(-4 150 5)" className="fillm" opacity="0.85" />
            </svg>
          </button>
          <span className="tapme">tap me ↗</span>
        </div>
      </div>
    </header>
  )
}

function Stats() {
  return (
    <div className="stats" aria-label="Highlights">
      {profile.stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong>
            <em>{s.value}</em>
          </strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  )
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sechead">
          <div className="eyebrow">{profile.aboutEyebrow}</div>
          <h2>{profile.aboutTitle}</h2>
          <p className="note">{profile.aboutLead}</p>
        </div>
        <div className="about-grid">
          <article className="story">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="pull">“{profile.quote}”</p>
          </article>
          <article className="journey">
            <h3>{profile.journeyTitle}</h3>
            <p className="intro">{profile.journeyIntro}</p>
            {profile.journey.map((step, i) => (
              <div className="t-item" key={step.title}>
                <span className="t-num">0{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <small>{step.meta}</small>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </article>
        </div>
        <div className="principles">
          {profile.principles.map((p) => (
            <article className="principle" key={p.title}>
              <span className="mark">{p.mark}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pipeline() {
  const stages = profile.pipeline
  const [active, setActive] = useState(0)
  const [lit, setLit] = useState<number[]>([0])
  const [status, setStatus] = useState("status: idle · 0/6 stages")
  const [flowing, setFlowing] = useState<number[]>([])

  const show = (i: number) => {
    setActive(i)
    setLit((prev) => Array.from(new Set([...prev, i])))
  }

  const reset = () => {
    setActive(0)
    setLit([])
    setFlowing([])
    setStatus("status: idle · 0/6 stages")
  }

  const run = () => {
    reset()
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const step = reduce ? 180 : 700
    stages.forEach((_, i) => {
      window.setTimeout(() => {
        setLit((prev) => Array.from(new Set([...prev, i])))
        setActive(i)
        setStatus(`status: running · ${i + 1}/6 stages`)
        if (i < stages.length - 1) {
          setFlowing((prev) => Array.from(new Set([...prev, i])))
        }
        if (i === stages.length - 1) setStatus("status: complete · 6/6 stages")
      }, i * step)
    })
  }

  const stage = stages[active]
  return (
    <section id="pipeline">
      <div className="wrap">
        <div className="sechead">
          <div className="eyebrow">How I work</div>
          <h2>{profile.pipelineTitle}</h2>
          <p className="note">{profile.pipelineNote}</p>
        </div>
        <div className="pipe-board">
          <div className="pipe" role="group" aria-label="Pipeline stages">
            {stages.map((s, i) => (
              <span key={s.id} style={{ display: "contents" }}>
                <button
                  type="button"
                  className={lit.includes(i) ? `node on${active === i ? " active" : ""}` : `node${active === i ? " active" : ""}`}
                  onClick={() => show(i)}
                >
                  <PipeIcon id={s.id} />
                  <span className="lbl">{s.title}</span>
                  <span className="sub">{s.sub}</span>
                </button>
                {i < stages.length - 1 ? (
                  <span className={flowing.includes(i) ? "link flow done" : "link"} aria-hidden="true">
                    <ArrowLink />
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <div className="pipe-detail" aria-live="polite">
            <div className="k">
              <span className="eyebrow">
                Stage {active + 1} of {stages.length}
              </span>
              <h3>{stage.title}</h3>
            </div>
            <p>{stage.text}</p>
          </div>
          <div className="pipe-actions">
            <button className="btn primary" type="button" onClick={run}>
              ▶ run pipeline
            </button>
            <button className="btn" type="button" onClick={reset}>
              reset
            </button>
            <span className="pipe-status mono">{status}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sechead">
          <div className="eyebrow">Experience</div>
          <h2>{profile.workTitle}</h2>
          <p className="note">{profile.workNote}</p>
        </div>
        <div className="jobs">
          {profile.work.map((job) => (
            <article className={job.current ? "job new" : "job"} key={job.org}>
              <span className="tape" aria-hidden="true" />
              <span className="when">{job.when}</span>
              <h3>{job.org}</h3>
              <div className="role">{job.role}</div>
              {job.badge ? <span className="newbadge">{job.badge}</span> : null}
              <ul>
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [cur, setCur] = useState(0)
  const p = projects[cur]
  const prev = projects[(cur + projects.length - 1) % projects.length]
  const next = projects[(cur + 1) % projects.length]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.getElementById("projects")
      if (!el) return
      const rect = el.getBoundingClientRect()
      const visible = rect.top < window.innerHeight * 0.7 && rect.bottom > 80
      if (!visible) return
      if (e.key === "ArrowRight") setCur((c) => (c + 1) % projects.length)
      if (e.key === "ArrowLeft") setCur((c) => (c + projects.length - 1) % projects.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="projects">
      <div className="wrap">
        <div className="sechead">
          <div className="eyebrow">Key projects</div>
          <h2>Pick one up.</h2>
          <p className="note">each sketch is a project. tap it, then open the full case study.</p>
        </div>
        <div className="stage">
          <div className="shelf">
            <div className="objects" role="list">
              <div className="disc" aria-hidden="true" />
              {projects.map((item, i) => (
                <button
                  key={item.slug}
                  className={i === cur ? "obj on" : "obj"}
                  type="button"
                  aria-pressed={i === cur}
                  aria-label={`Show project: ${item.title}`}
                  onClick={() => setCur(i)}
                >
                  <span className="dropper">
                    <ProjectIcon icon={item.icon} />
                    <span className="cap">{item.cap}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="hint">← → arrow keys work too</div>
          </div>
          <ProjectCard project={p} index={cur} total={projects.length} prev={prev.cap} next={next.cap} onPrev={() => setCur((c) => (c + projects.length - 1) % projects.length)} onNext={() => setCur((c) => (c + 1) % projects.length)} />
        </div>
        <div className="libhead sechead">
          <div className="eyebrow">Project library</div>
          <h2>The full shelf.</h2>
          <p className="note">every case study lives on its own page. new ones are added in the projects file.</p>
        </div>
        <div className="libgrid">
          {projects.map((item) => (
            <a className="libcard" href={`/projects/${item.slug}`} key={item.slug}>
              <div className="cover">
                <img src={item.image} alt="" />
              </div>
              <div className="body">
                <span className="eyebrow">{item.cap}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="tags">
                  {item.tags.slice(0, 4).map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className="readmore">read the case study →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  total,
  prev,
  next,
  onPrev,
  onNext,
}: {
  project: Project
  index: number
  total: number
  prev: string
  next: string
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <article className="pcard swap" key={project.slug} aria-live="polite">
      <span className="hand" style={{ fontSize: 24, fontWeight: 700, color: "var(--cobalt)" }}>
        0{index + 1} / 0{total}
      </span>
      <h3>{project.title}</h3>
      <div className="meta">{project.meta}</div>
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
      <div className="pnav">
        <button className="btn" type="button" onClick={onPrev}>
          ← {prev}
        </button>
        <a className="btn primary" href={`/projects/${project.slug}`}>
          open case →
        </a>
        <button className="btn" type="button" onClick={onNext}>
          {next} →
        </button>
      </div>
    </article>
  )
}

function Skills() {
  const [filled, setFilled] = useState(false)
  const [stamps, setStamps] = useState<string[]>([])

  useEffect(() => {
    const grid = document.getElementById("skills-grid")
    if (!grid) return
    if (!("IntersectionObserver" in window)) {
      setFilled(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setFilled(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(grid)
    const t = window.setTimeout(() => setFilled(true), 2500)
    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [])

  return (
    <section id="skills">
      <div className="wrap">
        <div className="sechead">
          <div className="eyebrow">Technical skills</div>
          <h2>{profile.skillsTitle}</h2>
          <p className="note">{profile.skillsNote}</p>
        </div>
        <div className={filled ? "skills filled" : "skills"} id="skills-grid">
          {profile.skills.map((s) => {
            const h = 66 * s.fill
            return (
              <div className="skill" key={s.name}>
                <svg viewBox="0 0 60 84" aria-hidden="true">
                  <g clipPath="url(#cyl)">
                    <rect className="lvl fillc" x="0" y={80 - h} width="60" height={h} />
                  </g>
                  <ellipse className="ink" cx="30" cy="12" rx="24" ry="8" />
                  <path className="ink" d="M6 12 V70 A24 8 0 0 0 54 70 V12" />
                </svg>
                <span className="name">{s.name}</span>
                <span className="grade">{s.level.toLowerCase()}</span>
                <span className="what">{s.blurb}</span>
              </div>
            )
          })}
        </div>
        <div className="legend">
          <span>taller tank · more practice</span>
          <span>comfortable</span>
          <span>practicing</span>
          <span>learning</span>
        </div>
      </div>
      <div className="wrap twocol" style={{ marginTop: 48 }}>
        <div>
          <div className="sechead" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Study stamps</div>
            <h2>{profile.stampsTitle}</h2>
            <p className="note">{profile.stampsNote}</p>
          </div>
          <div className="certs">
            {profile.stamps.map((c) => {
              const on = stamps.includes(c.code)
              return (
                <button
                  key={c.code}
                  className={on ? "cert on" : "cert"}
                  type="button"
                  aria-pressed={on}
                  onClick={() =>
                    setStamps((prev) => (prev.includes(c.code) ? prev.filter((x) => x !== c.code) : [...prev, c.code]))
                  }
                >
                  <svg viewBox="0 0 78 78" aria-hidden="true">
                    <g className="reveal">
                      <circle className="fillc" cx="39" cy="39" r="33" />
                    </g>
                    <circle className="ink" cx="39" cy="39" r="33" />
                    <circle className="ink ink-thin" cx="39" cy="39" r="26" strokeDasharray="3 4" />
                    <path className="ink" d="M27 40 l8 8 16 -18" />
                  </svg>
                  <span className="code">{c.code}</span>
                  <span className="cname">{c.name}</span>
                </button>
              )
            })}
          </div>
        </div>
        <div>
          <div className="sechead" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Education</div>
            <h2>Before the pipelines.</h2>
          </div>
          <div className="award">
            <svg viewBox="0 0 46 46" aria-hidden="true">
              <circle className="ink" cx="23" cy="18" r="12" />
              <path className="ink" d="M16 28 L12 42 L23 36 L34 42 L30 28" />
              <path className="ink ink-thin" d="M23 11 l2.2 4.5 5 .7 -3.6 3.5 .9 5 -4.5 -2.4 -4.5 2.4 .9 -5 -3.6 -3.5 5 -.7Z" />
            </svg>
            <div>
              <b>Open to internships</b>
              <div className="mono">Karachi · remote-friendly learning roles</div>
            </div>
          </div>
          <div className="edu">
            {profile.education.map((ed) => (
              <div className="edu-row" key={ed.title}>
                <div>
                  <b>{ed.title}</b>
                  <div>{ed.place}</div>
                </div>
                <div className="mono">{ed.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Resume() {
  const [running, setRunning] = useState(false)
  const [status, setStatus] = useState("resume.pdf · ready")

  const download = (e: React.MouseEvent) => {
    e.preventDefault()
    setRunning(true)
    setStatus("fetching resume.pdf …")
    window.setTimeout(() => {
      const a = document.createElement("a")
      a.href = profile.resume
      a.download = profile.resumeName
      document.body.appendChild(a)
      a.click()
      a.remove()
      setStatus("Ali_Zafar_Resume.pdf · sent to downloads")
      window.setTimeout(() => setRunning(false), 1600)
    }, 700)
  }

  return (
    <section id="resume">
      <div className="wrap">
        <div className="resume-box">
          <div className="resume-copy">
            <div className="eyebrow">Resume · PDF</div>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 46px)", fontWeight: 800 }}>Want it on paper?</h2>
            <p>The same one-page resume. The download is the PDF file, not a screenshot.</p>
            <a className="btn primary" href={profile.resume} download={profile.resumeName} onClick={download}>
              download my resume ↓
            </a>
            <div className={status.includes("sent") ? "dlstatus ok" : "dlstatus"} aria-live="polite">
              {status}
            </div>
          </div>
          <div className={running ? "resume-stage running" : "resume-stage"}>
            <svg viewBox="0 0 640 170" role="img" aria-label="A sketched mouse carries the resume into a downloads folder">
              <g stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 134 H630" fill="none" strokeWidth="2" strokeDasharray="2 9" opacity="0.6" />
                <line id="trackFill" x1="104" y1="134" x2="556" y2="134" stroke="var(--cobalt)" strokeWidth="5" style={{ transform: running ? "scaleX(1)" : "scaleX(0)" }} />
                <g transform="translate(78 128)">
                  <g id="mouseRun" style={{ transform: running ? "translateX(430px)" : undefined, transition: "transform 1.1s ease-in-out" }}>
                    <g className="mpeek">
                      <ellipse cx="0" cy="-12" rx="23" ry="13" fill="var(--card)" />
                      <circle cx="20" cy="-17" r="11" fill="var(--card)" />
                      <circle cx="15" cy="-29" r="7" fill="var(--card)" />
                      <circle cx="15" cy="-29" r="3" fill="var(--marker)" stroke="none" />
                      <circle cx="24" cy="-19" r="1.8" fill="var(--ink)" stroke="none" />
                      <circle className="nose" cx="31" cy="-15" r="2.4" fill="var(--cobalt)" stroke="none" />
                      <path className="leg leg1" d="M-10 -2 v8" fill="none" />
                      <path className="leg leg2" d="M10 -2 v8" fill="none" />
                    </g>
                  </g>
                </g>
                <g>
                  <rect x="36" y="56" width="60" height="74" rx="3" fill="var(--card)" />
                  <path d="M84 56 v12 h12" fill="none" strokeWidth="2" />
                  <text x="48" y="84" fontFamily="Caveat, cursive" fontSize="18" fontWeight="700" fill="var(--cobalt)" stroke="none">
                    AZ
                  </text>
                  <path d="M46 96 h40 M46 106 h32 M46 116 h40" fill="none" strokeWidth="1.6" />
                </g>
                <g>
                  <path d="M562 92 h22 l6 8 h32 v34 h-60z" fill="var(--card)" />
                  <path d="M556 108 h72 l-6 26 h-60z" fill={running ? "var(--cobalt)" : "var(--card)"} />
                  <path d="M556 108 h72 l-6 26 h-60z" fill="none" />
                </g>
              </g>
              <text x="592" y="160" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="20" fontWeight="700" fill="var(--muted)">
                downloads
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState("")
  const [purpose, setPurpose] = useState("Internship or trainee role")
  const [note, setNote] = useState("")
  const [sent, setSent] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied("copied ✓")
    } catch {
      setCopied("select the address and copy it")
    }
  }

  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (String(data.get("_honey") || "")) return
    const name = String(data.get("name") || "").trim()
    const company = String(data.get("company") || "").trim()
    const email = String(data.get("email") || "").trim()
    const message = String(data.get("message") || "").trim()
    if (!name || !email || !message) {
      setNote("Name, email and a message are required.")
      return
    }
    const text = `Hi Ali, this is ${name}${company ? ` from ${company}` : ""}.\nAbout: ${purpose}\n${message}\n— ${email}`
    const url = `https://wa.me/923142376952?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
    setSent(true)
    setNote("WhatsApp should open with your note. If it does not, email me.")
  }

  return (
    <section id="contact">
      <div className="wordfield" aria-hidden="true">
        {profile.words.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className="wrap contact">
        <div className="eyebrow">Say hello</div>
        <h2>
          Let’s build a <span className="hl">pipeline.</span>
        </h2>
        <div className="em" id="email">
          {profile.email}
        </div>
        <div className="socials">
          <button className="btn primary" type="button" onClick={copy}>
            copy email
          </button>
          <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="copied" aria-live="polite">
          {copied}
        </div>
        <p className="mono">
          {profile.phone} · {profile.place} · {profile.batch}
        </p>
        {sent ? (
          <div className="hire sent">
            <h3>Note packed.</h3>
            <p>{note}</p>
            <a className="btn" href={`mailto:${profile.email}`}>
              email instead
            </a>
          </div>
        ) : (
          <form className="hire" onSubmit={send} noValidate>
            <h3>Hiring, or have a data problem? Tell me about it.</h3>
            <p className="sub">This opens WhatsApp with your message. Nothing is stored on the site.</p>
            <fieldset className="purpose">
              <legend>What is this about?</legend>
              {["Internship or trainee role", "A project to review", "Collaboration", "Feedback"].map((p) => (
                <label key={p}>
                  <input type="radio" name="purpose" value={p} checked={purpose === p} onChange={() => setPurpose(p)} />
                  <span>{p}</span>
                </label>
              ))}
            </fieldset>
            <div className="row2">
              <div className="field">
                <label htmlFor="f-name">Your name</label>
                <input id="f-name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" name="company" autoComplete="organization" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea id="f-msg" name="message" required placeholder="The role, the stack, or what you thought of a project." />
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="f-honey">Leave this empty</label>
              <input id="f-honey" name="_honey" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="hire-foot">
              <div className={note ? "formmsg err" : "formmsg"} aria-live="polite">
                {note}
              </div>
              <button className="btn primary" type="submit">
                send on WhatsApp →
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
