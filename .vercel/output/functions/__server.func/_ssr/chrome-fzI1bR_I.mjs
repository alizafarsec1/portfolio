import { i as __toESM } from "../_runtime.mjs";
import { t as profile } from "./content-BR4_V3pl.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chrome-fzI1bR_I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	["about", "about"],
	["pipeline", "flow"],
	["work", "work"],
	["projects", "projects"],
	["skills", "skills"],
	["resume", "resume"],
	["contact", "say hi"]
];
function PencilCursor() {
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		const cur = document.querySelector(".cursor");
		if (!cur) return;
		let shown = false;
		const move = (e) => {
			if (!shown) {
				document.documentElement.classList.add("pen");
				shown = true;
			}
			cur.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 32}px)`;
			const hot = e.target?.closest?.("a,button");
			cur.classList.toggle("hot", Boolean(hot));
		};
		const leave = () => {
			document.documentElement.classList.remove("pen");
			shown = false;
		};
		const down = (e) => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			const s = document.createElement("span");
			s.className = "splash";
			s.style.left = `${e.clientX}px`;
			s.style.top = `${e.clientY}px`;
			document.body.appendChild(s);
			window.setTimeout(() => s.remove(), 600);
		};
		document.addEventListener("mousemove", move);
		document.addEventListener("mouseleave", leave);
		document.addEventListener("mousedown", down);
		return () => {
			document.removeEventListener("mousemove", move);
			document.removeEventListener("mouseleave", leave);
			document.removeEventListener("mousedown", down);
			document.documentElement.classList.remove("pen");
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "cursor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 34 34",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: "rotate(45 17 17)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						className: "body",
						x: "13",
						y: "2",
						width: "8",
						height: "22",
						rx: "1.5",
						stroke: "var(--ink)",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M13 24 L17 33 L21 24Z",
						fill: "var(--marker)",
						stroke: "var(--ink)",
						strokeWidth: "2",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M15.6 30 L17 33 L18.4 30Z",
						fill: "var(--ink)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "13",
						y: "2",
						width: "8",
						height: "4",
						fill: "var(--ink)"
					})
				]
			})
		})
	});
}
function SiteNav({ home }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const href = (id) => home ? `#${id}` : `/#${id}`;
	(0, import_react.useEffect)(() => {
		const fill = document.getElementById("flowFill");
		const packet = document.getElementById("flowPacket");
		const onScroll = () => {
			const h = document.documentElement.scrollHeight - window.innerHeight;
			const p = h > 0 ? window.scrollY / h : 0;
			if (fill) fill.style.transform = `scaleX(${p})`;
			if (packet) packet.style.left = `${p * 100}%`;
			if (!home) return;
			const marker = window.scrollY + 140;
			let current = "";
			for (const [id] of LINKS) {
				const el = document.getElementById(id);
				if (el && el.offsetTop <= marker) current = id;
			}
			document.querySelectorAll("[data-nav]").forEach((a) => {
				a.classList.toggle("cur", a.dataset.nav === current);
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [home]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "top",
		"aria-label": "Sections",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "logo",
					href: home ? "#top" : "/",
					children: [profile.logo, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "menu-btn",
					type: "button",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2.2",
						strokeLinecap: "round",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6 l12 12 M18 6 L6 18" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: open ? "navlinks open" : "navlinks",
					children: LINKS.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: href(id),
						"data-nav": id,
						onClick: () => setOpen(false),
						children: label
					}, id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flowbar",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flowfill",
				id: "flowFill"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flowpacket",
				id: "flowPacket"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ali zafar · cloud data engineering trainee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.tagline })]
	}) });
}
function Chrome({ home, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "0",
			height: "0",
			style: { position: "absolute" },
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "cyl",
				clipPathUnits: "userSpaceOnUse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 12 V70 A24 8 0 0 0 54 70 V12 A24 8 0 0 0 6 12Z" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: "azPhoto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "26",
					width: "248",
					height: "248"
				})
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, { home }),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Chrome as t };
