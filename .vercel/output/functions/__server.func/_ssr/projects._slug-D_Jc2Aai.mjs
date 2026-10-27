import { n as projectBySlug, r as projects } from "./content-BR4_V3pl.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-DI1tUpVe.mjs";
import { t as Chrome } from "./chrome-fzI1bR_I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-D_Jc2Aai.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy({ slug }) {
	const project = projectBySlug(slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chrome, {
		home: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "wrap",
			style: { paddingBlock: 80 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sechead",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Missing page"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "That project is not in the notebook." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "note",
						children: "Check the slug in the projects file. It has to match the address exactly."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "btn primary",
				href: "/#projects",
				children: "back to projects"
			})]
		})
	});
	const more = projects.filter((p) => p.slug !== project.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chrome, {
		home: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "wrap case-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "case-main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "backlink",
						href: "/#projects",
						children: "← back to all projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "case-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eyebrow",
								children: ["Case study · ", project.cap]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "meta mono",
								children: project.meta
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.summary }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flowline",
								children: project.flow.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { display: "contents" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f }), i < project.flow.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" }) : null]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "tags",
								children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tag",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "links-row",
								children: [
									project.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "btn primary",
										href: project.github,
										target: "_blank",
										rel: "noreferrer",
										children: "GitHub ↗"
									}) : null,
									project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "btn",
										href: project.demo,
										target: "_blank",
										rel: "noreferrer",
										children: "live demo ↗"
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "btn",
										href: "/#contact",
										children: "talk about it"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "case-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "The story"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What the work actually is." }),
							project.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 32)))
						]
					}),
					project.gallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "case-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "Drawings & evidence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Replace these with your screenshots." }),
							project.gallery.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "shot",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: g.src,
									alt: g.caption
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [g.caption, "."] }),
									" ",
									g.note
								] })]
							}, g.src + g.caption))
						]
					}) : null,
					project.sql ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "case-block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "SQL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.sqlLabel || "A query from the work" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "codeblock",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: project.sql })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "notice",
								children: "This is a pattern to read, not a claim that the query has been run against a production database."
							})
						]
					}) : null,
					more.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sechead",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Also on the shelf"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Other projects." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "libgrid",
						children: more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "libcard",
							href: `/projects/${item.slug}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cover",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: ""
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "body",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.summary }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "readmore",
										children: "open →"
									})
								]
							})]
						}, item.slug))
					})] }) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "case-side",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "Project snapshot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						style: {
							fontSize: 26,
							fontWeight: 800
						},
						children: project.cap
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: project.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: h }, h)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "notice",
						children: "Cover images live in the img folder. Text for this page lives in the projects file. Change either, then publish again."
					}),
					project.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "btn primary",
						href: project.github,
						target: "_blank",
						rel: "noreferrer",
						children: "GitHub ↗"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "side-link",
						href: "/#projects",
						children: "← all projects"
					})
				]
			})]
		})
	});
}
function ProjectRoute() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudy, { slug });
}
//#endregion
export { ProjectRoute as component };
