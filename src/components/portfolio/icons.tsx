export function PipeIcon({ id }: { id: string }) {
  const ink = "ink"
  if (id === "ingest") {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <g className="reveal">
          <path className="fillc" d="M18 30 h30 l8 8 h20 v30 h-58z" />
        </g>
        <path className={ink} d="M18 30 h30 l8 8 h20 v30 h-58z" />
        <path className={`${ink} ink-thin`} d="M30 50 h24 M30 58 h16" />
        <path className={ink} d="M42 18 v16 M34 26 l8 8 8 -8" />
      </svg>
    )
  }
  if (id === "clean") {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <g className="reveal">
          <path className="fillm" d="M22 22 h40 v10 H22z" />
          <path className="fillc" d="M30 32 h24 l8 34 H22z" />
        </g>
        <path className={ink} d="M22 22 h40 v10 H22z M30 32 h24 l8 34 H22z" />
        <path className={`${ink} ink-thin`} d="M34 46 h16 M36 54 h12" />
      </svg>
    )
  }
  if (id === "model") {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <g className="reveal">
          <rect className="fillc" x="30" y="30" width="24" height="24" />
          <circle className="fillm" cx="42" cy="16" r="8" />
        </g>
        <rect className={ink} x="30" y="30" width="24" height="24" />
        <circle className={ink} cx="42" cy="16" r="8" />
        <circle className={ink} cx="16" cy="58" r="8" />
        <circle className={ink} cx="68" cy="58" r="8" />
        <path className={`${ink} ink-thin`} d="M42 24 v6 M34 50 l-12 6 M50 50 l12 6" />
      </svg>
    )
  }
  if (id === "validate") {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <g className="reveal">
          <path className="fillc" d="M42 10 l24 10 v18 c0 16 -10 28 -24 34 c-14 -6 -24 -18 -24 -34 v-18z" />
        </g>
        <path className={ink} d="M42 10 l24 10 v18 c0 16 -10 28 -24 34 c-14 -6 -24 -18 -24 -34 v-18z" />
        <path className={ink} d="M30 40 l8 8 16 -16" />
      </svg>
    )
  }
  if (id === "load") {
    return (
      <svg viewBox="0 0 84 84" aria-hidden="true">
        <g className="reveal">
          <ellipse className="fillm" cx="42" cy="22" rx="20" ry="8" />
          <path className="fillc" d="M22 22 v32 a20 8 0 0 0 40 0 v-32" />
        </g>
        <ellipse className={ink} cx="42" cy="22" rx="20" ry="8" />
        <path className={ink} d="M22 22 v32 a20 8 0 0 0 40 0 v-32" />
        <path className={`${ink} ink-thin`} d="M22 34 a20 8 0 0 0 40 0 M22 46 a20 8 0 0 0 40 0" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 84 84" aria-hidden="true">
      <g className="reveal">
        <rect className="fillc" x="16" y="28" width="14" height="36" />
        <rect className="fillm" x="35" y="18" width="14" height="46" />
        <rect className="fillc" x="54" y="36" width="14" height="28" />
      </g>
      <rect className={ink} x="16" y="28" width="14" height="36" />
      <rect className={ink} x="35" y="18" width="14" height="46" />
      <rect className={ink} x="54" y="36" width="14" height="28" />
      <path className={`${ink} ink-thin`} d="M16 70 h52" />
    </svg>
  )
}

export function ProjectIcon({ icon }: { icon: string }) {
  if (icon === "terminal") {
    return (
      <svg viewBox="0 0 100 112" aria-hidden="true">
        <g className="reveal">
          <rect className="fillc" x="14" y="18" width="72" height="52" rx="6" />
          <rect className="fillm" x="36" y="78" width="28" height="8" />
        </g>
        <rect className="ink" x="14" y="18" width="72" height="52" rx="6" />
        <path className="ink" d="M26 38 l12 10 -12 10 M44 58 h22" />
        <path className="ink" d="M30 70 h40 l8 16 H22z" />
        <rect className="ink" x="36" y="78" width="28" height="8" />
      </svg>
    )
  }
  if (icon === "schema") {
    return (
      <svg viewBox="0 0 100 112" aria-hidden="true">
        <g className="reveal">
          <rect className="fillc" x="30" y="16" width="40" height="26" rx="3" />
          <rect className="fillm" x="10" y="68" width="34" height="24" rx="3" />
        </g>
        <rect className="ink" x="30" y="16" width="40" height="26" rx="3" />
        <rect className="ink" x="10" y="68" width="34" height="24" rx="3" />
        <rect className="ink" x="56" y="68" width="34" height="24" rx="3" />
        <path className="ink ink-thin" d="M50 42 v14 M50 56 H27 v12 M50 56 h23 v12" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 100 112" aria-hidden="true">
      <g className="reveal">
        <path className="fillc" d="M18 48 h64 v40 h-64z" />
        <path className="fillm" d="M30 48 v-16 h18 v16" />
      </g>
      <path className="ink" d="M18 48 h64 v40 h-64z" />
      <path className="ink" d="M18 48 l32 -18 32 18" />
      <path className="ink" d="M40 88 v-22 h20 v22" />
      <path className="ink ink-thin" d="M30 32 h18 M34 26 h10" />
    </svg>
  )
}

export function ArrowLink() {
  return (
    <svg className="link-svg" viewBox="0 0 46 44" aria-hidden="true">
      <path className="ink" d="M4 22 h30" />
      <path className="ink" d="M26 12 l12 10 -12 10" />
      <circle className="packet" cx="8" cy="22" r="5" />
    </svg>
  )
}
