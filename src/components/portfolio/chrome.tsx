import { useEffect, useState } from "react"
import { profile } from "@/data/content"

const LINKS = [
  ["about", "about"],
  ["pipeline", "flow"],
  ["work", "work"],
  ["projects", "projects"],
  ["skills", "skills"],
  ["resume", "resume"],
  ["contact", "say hi"],
] as const

export function PencilCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    if (!fine) return
    const cur = document.querySelector<HTMLElement>(".cursor")
    if (!cur) return
    let shown = false
    const move = (e: MouseEvent) => {
      if (!shown) {
        document.documentElement.classList.add("pen")
        shown = true
      }
      cur.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 32}px)`
      const hot = (e.target as HTMLElement | null)?.closest?.("a,button")
      cur.classList.toggle("hot", Boolean(hot))
    }
    const leave = () => {
      document.documentElement.classList.remove("pen")
      shown = false
    }
    const down = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const s = document.createElement("span")
      s.className = "splash"
      s.style.left = `${e.clientX}px`
      s.style.top = `${e.clientY}px`
      document.body.appendChild(s)
      window.setTimeout(() => s.remove(), 600)
    }
    document.addEventListener("mousemove", move)
    document.addEventListener("mouseleave", leave)
    document.addEventListener("mousedown", down)
    return () => {
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mouseleave", leave)
      document.removeEventListener("mousedown", down)
      document.documentElement.classList.remove("pen")
    }
  }, [])

  return (
    <div className="cursor" aria-hidden="true">
      <svg viewBox="0 0 34 34">
        <g transform="rotate(45 17 17)">
          <rect className="body" x="13" y="2" width="8" height="22" rx="1.5" stroke="var(--ink)" strokeWidth="2" />
          <path d="M13 24 L17 33 L21 24Z" fill="var(--marker)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M15.6 30 L17 33 L18.4 30Z" fill="var(--ink)" />
          <rect x="13" y="2" width="8" height="4" fill="var(--ink)" />
        </g>
      </svg>
    </div>
  )
}

export function SiteNav({ home }: { home: boolean }) {
  const [open, setOpen] = useState(false)
  const href = (id: string) => (home ? `#${id}` : `/#${id}`)

  useEffect(() => {
    const fill = document.getElementById("flowFill")
    const packet = document.getElementById("flowPacket")
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? window.scrollY / h : 0
      if (fill) fill.style.transform = `scaleX(${p})`
      if (packet) packet.style.left = `${p * 100}%`
      if (!home) return
      const marker = window.scrollY + 140
      let current = ""
      for (const [id] of LINKS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = id
      }
      document.querySelectorAll<HTMLAnchorElement>("[data-nav]").forEach((a) => {
        a.classList.toggle("cur", a.dataset.nav === current)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [home])

  return (
    <nav className="top" aria-label="Sections">
      <div className="wrap">
        <a className="logo" href={home ? "#top" : "/"}>
          {profile.logo}
          <span>.</span>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6 l12 12 M18 6 L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div className={open ? "navlinks open" : "navlinks"}>
          {LINKS.map(([id, label]) => (
            <a key={id} href={href(id)} data-nav={id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="flowbar" aria-hidden="true">
        <div className="flowfill" id="flowFill" />
        <div className="flowpacket" id="flowPacket" />
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <span>ali zafar · cloud data engineering trainee</span>
        <span>{profile.tagline}</span>
      </div>
    </footer>
  )
}

export function Chrome({ home, children }: { home: boolean; children: React.ReactNode }) {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <clipPath id="cyl" clipPathUnits="userSpaceOnUse">
            <path d="M6 12 V70 A24 8 0 0 0 54 70 V12 A24 8 0 0 0 6 12Z" />
          </clipPath>
          <clipPath id="azPhoto">
            <rect x="26" y="26" width="248" height="248" />
          </clipPath>
        </defs>
      </svg>
      <PencilCursor />
      <SiteNav home={home} />
      {children}
      <SiteFooter />
    </>
  )
}
