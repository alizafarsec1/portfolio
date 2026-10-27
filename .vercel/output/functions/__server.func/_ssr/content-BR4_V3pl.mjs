//#region node_modules/.nitro/vite/services/ssr/assets/content-BR4_V3pl.js
var site_default = {
	name: "Ali Zafar",
	logo: "ali.zafar",
	role: "Cloud Data Engineering Trainee",
	place: "Karachi, Pakistan",
	batch: "Saylani Mass IT Training · Batch 6",
	tagline: "I turn raw files into data you can trust.",
	headlineBefore: "I build the pipelines that make data ",
	headlineMark: "trustworthy",
	headlineAfter: ".",
	lede: "Cloud Data Engineering trainee at Saylani Mass IT Training in Karachi. I practice Python ETL, SQL warehousing and data-quality checks — including a PeopleOps study that references 182k+ records.",
	chips: [
		"Python",
		"Pandas",
		"SQL Server",
		"ETL",
		"Star schema",
		"Data quality"
	],
	email: "alizafar.sec1@gmail.com",
	phone: "+92 314 2376952",
	whatsapp: "https://wa.me/923142376952",
	github: "https://github.com/alizafarsec1",
	linkedin: "https://www.linkedin.com/in/ali-zafar-sec1/",
	resume: "/resume/Ali_Zafar_Resume.pdf",
	resumeName: "Ali_Zafar_Resume.pdf",
	portrait: "/img/ali-zafar-profile.jpg",
	portraitNote: "ali · karachi",
	screen: [
		"> hey, who is ali zafar?",
		"fetching profile ....... done",
		"Cloud Data Engineering Trainee",
		"Karachi · SMIT Batch 6",
		"Python · SQL · ETL · data quality"
	],
	screenQuote: "Good data makes the right answer easier to find.",
	aboutEyebrow: "A little about me",
	aboutTitle: "I build data with purpose.",
	aboutLead: "I want to grow into a dependable data engineer: someone who can design a clean pipeline, keep the meaning of the data intact, and help people decide with confidence.",
	about: [
		"I am studying Cloud Data Engineering at Saylani Mass IT Training (SMIT) in Karachi. The work is practical. Take a messy source, break it into steps a person can follow, and keep tightening those steps until the workflow is understandable and safe to run again.",
		"The tools I spend the most time with are Python, Pandas, NumPy, Microsoft SQL Server and T-SQL, plus the ideas underneath them: ETL, data cleaning and analytical modeling. Python is how I inspect and reshape files. SQL is how I prove a rule, join the right tables and answer a real question.",
		"My main case study, PeopleOps, is where those habits meet a business-shaped problem. Employee attributes change. Dates arrive in more than one format. Attendance and payroll-style events need a second look before anyone trusts a total. The study references more than 182,000 records and uses that volume to practice history-aware warehouse design and audit-friendly reporting.",
		"A pipeline is not finished because it ran once. It should be safe to rerun, clear about what changed, and honest about the rows it refused. That is why I care about idempotent loads, row hashes, SCD Type 2 history, data-quality assertions and a rejection log — not only about moving a file from one folder to another.",
		"SMIT is teaching me to stack those skills in order: get the model right, make the pipeline observable, then get ready for scheduling, monitoring and cloud operations. I write things down, I keep names consistent, and I would rather show a smaller true claim than a larger fuzzy one."
	],
	quote: "Good data engineering makes the right answer easier to find — and the wrong data harder to trust.",
	journeyTitle: "How I am growing",
	journeyIntro: "A practical path from solid fundamentals to reliable data systems.",
	journey: [
		{
			"title": "Understand the data",
			"meta": "Python · Pandas · NumPy",
			"text": "Inspect raw files, profile columns, handle missing values and learn what a field actually means before changing it."
		},
		{
			"title": "Design clear SQL",
			"meta": "SQL · T-SQL · keys",
			"text": "Write readable queries, use primary and foreign keys, and shape tables so the next question is easier than the last."
		},
		{
			"title": "Build repeatable ETL",
			"meta": "Staging · checks · reruns",
			"text": "Separate intake from transformation, record what a run did, and avoid reprocessing rows that did not change."
		},
		{
			"title": "Keep history",
			"meta": "Star schema · SCD Type 2",
			"text": "Model facts and dimensions around business questions, and keep earlier versions of an employee explainable."
		},
		{
			"title": "Prepare for the cloud",
			"meta": "SMIT · operations",
			"text": "Learn how a dependable pipeline is tested, scheduled, monitored and handed to someone else without a private notebook."
		}
	],
	principles: [
		{
			"mark": "01",
			"title": "Correct before fast",
			"text": "Understand the rule and prove the row is valid before tuning for speed."
		},
		{
			"mark": "02",
			"title": "Safe to run again",
			"text": "Design loads that survive a retry and do not double-apply a change."
		},
		{
			"mark": "03",
			"title": "Show the exception",
			"text": "Rejected rows need a reason. Invisible failures are not quality."
		},
		{
			"mark": "04",
			"title": "Model the question",
			"text": "Tables should serve the decision someone actually has to make."
		}
	],
	stats: [
		{
			"value": "182k+",
			"label": "Records referenced in project work"
		},
		{
			"value": "6",
			"label": "Stages in the practice pipeline"
		},
		{
			"value": "SCD2",
			"label": "History-aware modeling pattern"
		},
		{
			"value": "DQ",
			"label": "Checks and rejection audits first"
		}
	],
	pipelineTitle: "Follow the data.",
	pipelineNote: "this is the shape of the work I practice. tap a stage, or run the whole thing.",
	pipeline: [
		{
			"id": "ingest",
			"title": "Ingest",
			"sub": "land the file",
			"text": "Identify the source file, note its shape, and capture which batch it belongs to before anything is “fixed”. If the intake is fuzzy, every later number is fuzzy too."
		},
		{
			"id": "clean",
			"title": "Clean",
			"sub": "make it comparable",
			"text": "Standardize dates and text, deal with missing values, and flag duplicates. Python and Pandas are the workbench here: look, transform, and keep a record of what changed."
		},
		{
			"id": "model",
			"title": "Model",
			"sub": "facts & dimensions",
			"text": "Move from a flat file toward a star schema. Facts hold events such as attendance. Dimensions hold the context — employee, department, date — that makes an event mean something."
		},
		{
			"id": "validate",
			"title": "Validate",
			"sub": "assertions",
			"text": "Run explicit checks: missing keys, impossible dates, duplicate business keys. Failures go to a rejection log with a reason and a run id, so bad data stays visible."
		},
		{
			"id": "load",
			"title": "Load",
			"sub": "safe to rerun",
			"text": "Load with stable keys and a row hash so an unchanged record is not rewritten. Employee changes that matter to history follow an SCD Type 2 pattern instead of a silent overwrite."
		},
		{
			"id": "explain",
			"title": "Explain",
			"sub": "SQL people can read",
			"text": "Answer a business question in SQL that another person can audit. The goal is a number you can trace back to a source row, not a dashboard that only looks finished."
		}
	],
	workTitle: "Where I am learning.",
	workNote: "training and practice, written the way I would explain it in an interview.",
	work: [
		{
			"org": "Saylani Mass IT Training",
			"role": "Cloud Data Engineering Trainee",
			"when": "Ongoing · Karachi · Batch 6",
			"current": true,
			"badge": "in progress",
			"points": [
				"Hands-on Python and SQL, aimed at pipelines rather than one-off scripts.",
				"Studying cloud data ideas alongside modeling: how a workflow would be scheduled, observed and trusted.",
				"Building portfolio case studies that show the data path, not only the final query."
			]
		},
		{
			"org": "PeopleOps case study",
			"role": "Warehouse & quality practice",
			"when": "Portfolio project",
			"current": false,
			"badge": "",
			"points": [
				"Six-stage flow from raw HR-style files toward a dimensional model.",
				"SCD Type 2 style history, row hashes and rejection audits as first-class design, not afterthoughts.",
				"Reference volume of 182k+ records. Diagrams are labeled as reference visuals until live screenshots replace them."
			]
		},
		{
			"org": "Intermediate in Computer Science",
			"role": "ICS · Karachi",
			"when": "Computer Science, Mathematics, Physics",
			"current": false,
			"badge": "",
			"points": [
				"Foundations in algorithmic thinking and how a program is structured.",
				"The habit of checking a result instead of trusting the first output.",
				"The base I am extending now into data engineering."
			]
		}
	],
	skillsTitle: "What is in the tanks.",
	skillsNote: "fill level is how deep I go today — not a certificate, a practice level.",
	skills: [
		{
			"name": "Python",
			"level": "Practicing",
			"blurb": "core, OOP, file I/O",
			"fill": .62
		},
		{
			"name": "Pandas",
			"level": "Practicing",
			"blurb": "clean and reshape tables",
			"fill": .56
		},
		{
			"name": "NumPy",
			"level": "Learning",
			"blurb": "arrays and numeric checks",
			"fill": .38
		},
		{
			"name": "SQL",
			"level": "Comfortable",
			"blurb": "joins, subqueries, aggregates",
			"fill": .74
		},
		{
			"name": "T-SQL",
			"level": "Practicing",
			"blurb": "SQL Server patterns",
			"fill": .55
		},
		{
			"name": "SQL Server",
			"level": "Practicing",
			"blurb": "schemas and loads",
			"fill": .52
		},
		{
			"name": "PostgreSQL",
			"level": "Learning",
			"blurb": "relational practice",
			"fill": .36
		},
		{
			"name": "ETL",
			"level": "Practicing",
			"blurb": "staging, loads, reruns",
			"fill": .6
		},
		{
			"name": "Star schema",
			"level": "Practicing",
			"blurb": "facts and dimensions",
			"fill": .5
		},
		{
			"name": "SCD Type 2",
			"level": "Practicing",
			"blurb": "effective dates, current row",
			"fill": .48
		},
		{
			"name": "Data quality",
			"level": "Practicing",
			"blurb": "assertions and rejects",
			"fill": .58
		},
		{
			"name": "Git & GitHub",
			"level": "Practicing",
			"blurb": "versioned project work",
			"fill": .46
		}
	],
	stampsTitle: "Stamped by practice.",
	stampsNote: "tap a stamp. these are study areas, not vendor certificates.",
	stamps: [
		{
			"code": "PY",
			"name": "Python for data files"
		},
		{
			"code": "SQL",
			"name": "Multi-table querying"
		},
		{
			"code": "ETL",
			"name": "Repeatable pipelines"
		},
		{
			"code": "SCD",
			"name": "History-aware models"
		},
		{
			"code": "DQ",
			"name": "Visible data quality"
		}
	],
	education: [{
		"title": "Cloud Data Engineering",
		"place": "Saylani Mass IT Training (SMIT), Karachi",
		"meta": "Ongoing · Batch 6"
	}, {
		"title": "Intermediate in Computer Science",
		"place": "Karachi, Pakistan",
		"meta": "ICS · CS, Maths, Physics"
	}],
	words: [
		"SELECT",
		"JOIN",
		"SCD2",
		"ETL",
		"ROW_HASH",
		"STAGING",
		"PANDAS",
		"GROUP BY",
		"REJECT",
		"WAREHOUSE"
	]
};
var projects_default = {
	_readme: "ADD A PROJECT: copy one object inside projects. Put the cover image in public/img (for example public/img/my-cover.png) and set image to /img/my-cover.png. slug is the page address: /projects/your-slug. Use lowercase letters and hyphens, and keep slug unique. github and demo can be empty strings. gallery items are optional extra images. After you save, publish or push again so the live site rebuilds.",
	projects: [
		{
			"slug": "peopleops-warehouse",
			"cap": "peopleops",
			"title": "PeopleOps Data Warehouse",
			"meta": "Practice case study · Python · T-SQL · 182k+ records",
			"summary": "A six-stage HR and attendance pipeline: clean the files, keep employee history, and make rejected rows visible instead of silent.",
			"paragraphs": [
				"PeopleOps is my main data-engineering case study. It treats HR and attendance data the way an operations team actually receives it: more than one file, inconsistent dates, attributes that change, and questions that need an answer you can defend.",
				"I split the work into six stages so the path stays readable. Python and Pandas handle intake, light standardization and run context. SQL Server is where the model, the history and the checks live. The goal is a workflow another person could follow without asking me to narrate the notebook.",
				"The warehouse shape is a star schema. Attendance and payroll-style events are facts. Employee, department and date are dimensions. Employee history follows an SCD Type 2 idea — effective-from, effective-to and a current-row flag — so a report can ask both “what is true now?” and “what was true then?”",
				"Quality checks are part of the design. Typical rules are missing employee identifiers, impossible dates, duplicate business keys and events that fall outside an active window. A failed row is written to a rejection log with the reason and the run that saw it.",
				"Loads are meant to be safe to run again. A stable business key plus a row fingerprint (_row_hash) lets an unchanged record pass through without being applied twice. That habit matters more to me, at this stage, than claiming a cloud schedule I have not operated yet.",
				"The study references more than 182,000 records as the working volume for these patterns. The diagrams on this page are reference drawings. When a real SQL Server or terminal screenshot is ready, replace the file in public/img and keep the same image path."
			],
			"flow": [
				"Raw files",
				"Python clean",
				"Staging",
				"DQ checks",
				"SCD Type 2",
				"SQL answers"
			],
			"tags": [
				"Python",
				"Pandas",
				"NumPy",
				"T-SQL",
				"SQL Server",
				"Star schema",
				"SCD Type 2",
				"Data quality"
			],
			"image": "/img/architecture-pipeline.svg",
			"gallery": [
				{
					"src": "/img/architecture-pipeline.svg",
					"caption": "Six-stage reference architecture",
					"note": "Reference drawing. Replace with a screenshot from your own pipeline when you have one."
				},
				{
					"src": "/img/data-model-erd.svg",
					"caption": "Illustrative star schema",
					"note": "Facts for attendance and payroll-style events, with employee, date and department context."
				},
				{
					"src": "/img/terminal-workflow.svg",
					"caption": "Illustrative ETL run summary",
					"note": "A design mock of a terminal summary. Swap in a real VS Code or terminal capture later."
				}
			],
			"github": "https://github.com/alizafarsec1",
			"demo": "",
			"icon": "warehouse",
			"highlights": [
				"Pipeline: Python intake plus T-SQL warehouse logic",
				"Model: dimensional / star schema",
				"History: SCD Type 2 style effective dates",
				"Reliability: idempotent loads and a rejection audit",
				"Volume referenced: 182k+ records"
			],
			"sqlLabel": "T-SQL · example audit, not a production script",
			"sql": "-- Example only. Rename tables and columns to match the real schema.\nSELECT\n    e.employee_id,\n    e.employee_name,\n    e.separation_date,\n    p.pay_period_end,\n    p.net_pay,\n    p.payment_reference\nFROM dbo.dim_employee AS e\nINNER JOIN dbo.fact_payroll AS p\n    ON p.employee_key = e.employee_key\nWHERE e.separation_date IS NOT NULL\n  AND p.pay_period_end > e.separation_date\n  AND p.net_pay > 0\nORDER BY\n    e.employee_id,\n    p.pay_period_end DESC;"
		},
		{
			"slug": "python-data-utilities",
			"cap": "python tools",
			"title": "Python Data Utilities",
			"meta": "Practice project · Python · file I/O · data cleaning",
			"summary": "Small command-line tools that read messy text, filter records, and write a cleaner file — with errors handled on purpose.",
			"paragraphs": [
				"Before a warehouse is useful, someone has to look at the file. These utilities are small Python command-line tools I wrote to filter and reshape mock structured data without opening a spreadsheet and hoping.",
				"Each script reads from disk, checks that the file is actually there, and refuses to crash on a blank line or a short row. Bad records are reported. Good records are written out in a consistent shape.",
				"The point of the project is habit: functions with clear inputs, basic data structures, simple object-oriented organization where it helps, and file I/O that tells you what it did. It is the same instinct I use at the front of an ETL flow.",
				"It is a practice project, not a product. When a utility grows into something worth showing line by line, the GitHub field below is the place to point at the repository."
			],
			"flow": [
				"Raw text",
				"Parse",
				"Validate rows",
				"Filter",
				"Write output"
			],
			"tags": [
				"Python",
				"Data structures",
				"File I/O",
				"Error handling",
				"Data cleaning"
			],
			"image": "/img/terminal-workflow.svg",
			"gallery": [{
				"src": "/img/terminal-workflow.svg",
				"caption": "What a small run should look like",
				"note": "Illustrative terminal drawing. Replace with a real run when you publish the repository."
			}],
			"github": "https://github.com/alizafarsec1",
			"demo": "",
			"icon": "terminal",
			"highlights": [
				"Command-line Python, not a notebook-only demo",
				"Row-level error handling instead of a silent skip",
				"File in, cleaner file out",
				"A warm-up for the ingest stage of larger pipelines"
			],
			"sqlLabel": "",
			"sql": ""
		},
		{
			"slug": "relational-sql-lab",
			"cap": "sql lab",
			"title": "Relational Design & SQL Lab",
			"meta": "Practice project · schema design · joins · aggregates",
			"summary": "Hand-built schemas with real keys, then the joins, subqueries and aggregates that make the schema earn its keep.",
			"paragraphs": [
				"This lab is where I design tables before I query them. Each schema starts with the entities, the primary keys and the foreign keys, and with a rule about what is allowed to be missing.",
				"Once the tables exist, I write multi-table joins, subqueries and grouped aggregates against them. The exercise is to make the SQL match the question, and to notice when a question is hard because the model is wrong.",
				"I use it as the companion to PeopleOps. The warehouse case study shows a dimensional pattern. This lab shows the relational ground under it: constraints, relationships and queries you can read out loud.",
				"Nothing here is a client system. It is deliberate practice, documented so I can extend a schema without starting from a blank script every time."
			],
			"flow": [
				"Entities",
				"Keys",
				"Constraints",
				"Joins",
				"Aggregates"
			],
			"tags": [
				"SQL",
				"Schema design",
				"Joins",
				"Subqueries",
				"Aggregates",
				"Keys"
			],
			"image": "/img/data-model-erd.svg",
			"gallery": [{
				"src": "/img/data-model-erd.svg",
				"caption": "A relational picture of the practice model",
				"note": "Reference diagram. Point image at your own ERD export when you have one."
			}],
			"github": "https://github.com/alizafarsec1",
			"demo": "",
			"icon": "schema",
			"highlights": [
				"Schemas designed with primary and foreign keys",
				"Joins across more than two tables",
				"Subqueries and analytical aggregates",
				"Practice for the modeling stage of a pipeline"
			],
			"sqlLabel": "SQL · the kind of question the lab is for",
			"sql": "-- Which departments have more than one active employee\n-- with a missing hire date? Example names only.\nSELECT\n    d.department_name,\n    COUNT(*) AS employees_to_review\nFROM dbo.employee AS e\nINNER JOIN dbo.department AS d\n    ON d.department_id = e.department_id\nWHERE e.status = 'active'\n  AND e.hire_date IS NULL\nGROUP BY d.department_name\nHAVING COUNT(*) > 1\nORDER BY employees_to_review DESC;"
		}
	]
};
var profile = site_default;
var projects = projects_default.projects;
function projectBySlug(slug) {
	return projects.find((p) => p.slug === slug);
}
//#endregion
export { projectBySlug as n, projects as r, profile as t };
