# Cerulean — Style Reference

> Open skies, real photographs, and one clear grotesque voice

**Theme:** mixed — Daylight and Evening

**Use:** presentations, reports, research posters, teaching materials, social graphics, print, websites, and digital interfaces.

This guide describes Cerulean's current visual direction: a single typeface, Host Grotesk, paired with photographs of real skies. Its colors, mark, and layout carry over from the earlier editorial identity; the serif type and cyanotype artwork have been retired. Cross-format sizes and composition recipes are recommended starting points, not measurements of existing print or presentation designs. Token names describe reusable roles in any design tool; they do not require CSS. Website-specific behavior is summarized in [Website Adapter](#website-adapter).

Cerulean should feel like a small group of people doing serious work in a very large world. An expansive photograph of open sky creates distance and possibility; plain, well-spaced type and direct writing bring the reader close. The identity alternates between atmospheric openings and quiet spaces for thought. Its richness comes from the light and space in a photograph and the precision of its crop. The rest is deliberately simple: flat surfaces, one typeface, sharp image edges, and room to read.

The system accommodates safety, interpretability, pretraining, SFT, infrastructure, tools, and education. These subjects share one identity. The current public presentation does not include Blue Magpie.

## Tokens — Colors

Colors have semantic roles. Choose Daylight or Evening for a composition, then use the corresponding text and surface pair. Neither appearance is a separate brand.

| Name                  | Daylight  | Evening   | Token                | Role                                                                   |
| --------------------- | --------- | --------- | -------------------- | ---------------------------------------------------------------------- |
| Paper / Evening field | `#fcfbf6` | `#10254b` | `color.canvas`       | Main reading surface; document page, slide, panel, or interface canvas |
| Ink / Warm reverse    | `#172a50` | `#f4f2e9` | `color.text`         | Titles, body text, essential labels                                    |
| Slate / Pale slate    | `#4b5d79` | `#c1cbe0` | `color.muted`        | Captions, dates, supporting text; still comfortably legible            |
| Deep blue             | `#102c60` | `#0c2048` | `color.deep`         | Cover, strong section boundary, image fallback                         |
| Closing field         | `#102c60` | `#10254b` | `color.closing`      | Footer or closing panel; in Evening it continues the canvas            |
| Closing rule          | none      | `#415577` | `color.closing-rule` | Separates an Evening closing field from the canvas above it            |
| Porcelain             | `#fffdf4` | `#fffdf4` | `color.on-image`     | Short inscription on a photograph; text on a deep blue field           |
| Reading blue          | `#145a9a` | `#a8d4ff` | `color.link`         | Links and small functional emphasis; no default filled CTA color       |
| Focus blue            | `#1768af` | `#a8d4ff` | `color.focus`        | Visible focus in interactive work                                      |
| Quiet rule            | `#cdd3db` | `#415577` | `color.rule`         | Necessary table or structural rules; not decorative scaffolding        |
| Selection wash        | `#cce7fb` | `#235fa2` | `color.selection`    | Selected text or a restrained functional highlight                     |

In Daylight, the closing field is a deliberate deep-blue block below the paper canvas. In Evening, the canvas is already navy, so a second, nearly identical navy reads as a mistake rather than a boundary. Continue the canvas color and separate the closing field with a single quiet rule instead.

The supplied gradient-disc logo and photographs keep their original colors in either appearance. Do not derive a replacement logo from these swatches. The brightest blues belong to the mark and the sky photographs; a large electric-blue button is not a defining brand device.

These are sRGB reference values. For print, convert through the intended output profile and proof the warm paper, deep blues, and photographic skies. Do not invent a universal CMYK equivalent. Ordinary digital text should meet WCAG AA contrast; diagrams and charts must remain understandable without color alone.

## Tokens — Typography

### Host Grotesk — The single voice · `font.display` and `font.utility`

- **Family:** [Host Grotesk](https://fonts.google.com/specimen/Host+Grotesk), a variable grotesque (weights 300–800, with italics). It carries every role: openings, headings, prose, navigation, captions, and labels.
- **Substitute:** Arial when Host Grotesk is unavailable. Recheck wrapping and spacing; substitution is a fallback, not a new identity.
- **Weights:** 400 for nearly everything, including large headings. 500 for the wordmark and compact emphasis such as table headers. Authored bold and italics remain available where meaning needs them. Do not use weight changes to manufacture hierarchy; use size, space, and color.
- **Line height:** 1.1–1.23 for short titles; 1.4–1.5 for prose and descriptions. Long multiline headings need more leading than compact titles.
- **Letter spacing:** Approximately −0.02em for large headings and display lines; normal for body text and small labels. Never track small text out into a decorative label.
- **Character:** Clean, contemporary, and plain-spoken. Hierarchy comes from scale and placement, not from switching families. Avoid monumental cropped wordmarks, all-caps micro-labels, and compressed poster typography as routine treatments.

The two type tokens remain separate roles even though they currently resolve to the same family. `font.display` is the expressive scale (titles, mission, prose); `font.utility` is information (navigation, dates, captions, descriptions). Keeping both roles lets a future pairing change without rewriting every composition.

### Geist — Website reading · `font.reading`

Website exception: blog article prose, lists, blockquotes, captions, and tables use
Geist via the article-scoped `--font-reading` token. Load its regular and italic
variable faces from Google Fonts only on article pages. Article headings, metadata,
navigation, and all other brand typography retain Host Grotesk; code stays monospace.

### Monospace — Technical content · `font.mono`

- **Role:** Code, literal identifiers, commands, and aligned technical output. Use the host's readable system monospace; it is not a second display voice.
- **Weights:** Regular, with semantic emphasis when needed.
- **Line height:** Around 1.6 for code blocks.
- **Mathematics:** Use the authoring tool's proper math typesetting. Do not simulate equations with decorative typography or force them into monospace.

### Type Scale

Sizes are starting ranges for the named medium. A 24px screen label is not automatically a 24pt printed label. Choose sizes for reading distance, then preserve the hierarchy. Slide values assume a conventional 16:9 presentation viewed in a room; print values assume a handheld A4/Letter document. Posters need a separate reading-distance check.

| Role                | Family       | Weight  | Screen reference | Slide reference | Print reference | Line height | Tracking | Token          |
| ------------------- | ------------ | ------- | ---------------- | --------------- | --------------- | ----------- | -------- | -------------- |
| Opening/title       | Host Grotesk | 400     | 44–56px          | 36–48pt         | 28–36pt         | 1.1–1.23    | −0.02em  | `type.display` |
| Section heading     | Host Grotesk | 400     | 32–42px          | 28–36pt         | 18–24pt         | 1.15        | −0.02em  | `type.heading` |
| Work/item title     | Host Grotesk | 400     | 24–34px          | 24–30pt         | 14–18pt         | 1.1–1.2     | −0.02em  | `type.title`   |
| Short introduction  | Host Grotesk | 400     | 24–28px          | 24–28pt         | 13–16pt         | 1.4         | 0        | `type.deck`    |
| Reading prose       | Host Grotesk | 400     | 22–25px          | 22–26pt         | 11–12pt         | 1.5         | 0        | `type.body`    |
| Utility/description | Host Grotesk | 400     | 16–18px          | 20–24pt         | 10–11pt         | 1.45        | 0        | `type.utility` |
| Caption/metadata    | Host Grotesk | 400     | 13–16px          | 16–18pt         | 9–10pt          | 1.5         | 0        | `type.caption` |
| Wordmark            | Host Grotesk | 500     | 26–29px          | match title     | match title     | 1           | −0.03em  | `type.mark`    |
| Code                | Monospace    | Regular | 14–17px          | 18–22pt         | 9–10pt          | 1.6         | 0        | `type.code`    |

Projection, accessibility, or content density may require larger type or more pages. Split content before shrinking it. For journals, conferences, and other prescribed templates, their required fonts and sizes take priority over these brand defaults.

## Tokens — Spacing & Shapes

**Base unit:** `u` — a medium-specific spacing unit. Start at 4px for screen layouts, 4pt for slides, and 2pt for handheld print. These are independent starting grids, not physical equivalents.

**Density:** generous around ideas and imagery; comfortable within text; compact only where real data requires it.

### Spacing Scale

| Name      | Value | Token             | Use                                                  |
| --------- | ----- | ----------------- | ---------------------------------------------------- |
| Close     | 2u    | `space.close`     | Mark-to-name relationship or a tightly related label |
| Small     | 3u    | `space.small`     | Caption-to-image distance                            |
| Related   | 4u    | `space.related`   | Related lines or controls                            |
| Group     | 6u    | `space.group`     | Title, deck, and metadata grouping                   |
| Paragraph | 8u    | `space.paragraph` | Distinct prose paragraphs or adjacent content groups |
| Block     | 12u   | `space.block`     | Text-to-image gap or a substantial internal division |
| Section   | 16u   | `space.section`   | Separate ideas in a continuing composition           |
| Pause     | 24u   | `space.pause`     | Major transition, opening, or closing field          |

Use the scale to establish relationships, then make optical adjustments for the medium. The website's exact responsive measurements live in its stylesheets, not imposed on a poster or report.

### Border Radius

| Element                     | Value               | Treatment                                                                                                 |
| --------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| Photographs and panels      | 0                   | Sharp rectangle or square; no enclosing card shell around photographs; text listing cards use a flat tint |
| Reading surfaces and tables | 0                   | Flat, aligned, no floating panel effect                                                                   |
| Logo                        | Circle              | Preserve the supplied mark and its proportions                                                            |
| Icon-only utility control   | Circle where useful | A functional exception, not a shape to repeat around content                                              |

### Layout

- **Outer margin:** Start near 5–7% of canvas width for slides and graphics; choose practical document margins for print. Full-bleed photography is the intentional exception.
- **Reading measure:** Aim near 55–70 characters per line for prose. Use columns or another page when the format becomes too wide.
- **Section gap:** Usually two to three times the gap within a related group.
- **Image/text gap:** Give the caption a clear relationship to its image; give separate stories more space.
- **Alignment:** Prefer a few shared edges. Center a reading column or a single deliberate opening, not every paragraph.

## Components

Components are reusable compositions, not framework widgets. Each can become a slide, page region, printed panel, or digital module.

### Cerulean Mark and Name

**Role:** Authorship and recognition.

Use the supplied gradient disc, with “Cerulean” in Host Grotesk 500 when a name is needed. Keep the circle round and its original color transitions intact. Start with a mark around the visual height of the adjacent type and approximately a quarter-disc gap. Leave at least half a disc of clear space around a standalone mark. Use the existing application component where available. Do not place the source PNG's rectangular matte on a contrasting surface: use a prepared circular crop or approved transparent asset. Do not redraw, recolor, stretch, outline, ring, or add a glow to the mark; it sits directly on the sky or canvas.

### Sky Inscription

**Role:** An opening, invitation, or major transition.

One expansive photograph of open sky fills the canvas or a deliberate large image region. Place a short Host Grotesk statement in its deepest, quietest blue, usually toward the upper left, in Porcelain. Crop so the text never sits on cloud or pale haze; choose the crop for contrast first and incident (clouds, horizon, landforms) second. A light deep-blue tint across the top third may support legibility, but must not read as a gradient overlay. Keep enough uninterrupted sky for the image to feel larger than the writing. The mark may precede the first line. Use the actual mission when introducing the lab:

> Cerulean is a lab for  
> breaking down barriers and  
> democratizing AI exploration.

Scale to the format and reflow if required; never squeeze the text to preserve line breaks. Use an inscription for a short opening, not a paragraph of research prose.

### Editorial Text Block

**Role:** Explain a question, argument, result, or invitation.

Host Grotesk title and body on a solid Daylight or Evening canvas. Supporting labels such as authorship and dates use the same family at caption size in `color.muted`. Separate paragraphs with space, align their left edges, and keep a readable measure. A document can use a continuing column; a slide should carry one short argument. Preserve the author's actual words and technical distinctions.

### Work Portrait

**Role:** Give a project, course, or initiative a recognizable image.

A square photograph with sharp edges, a Host Grotesk title below it, and a short description in `type.utility` and `color.muted`. Each portrait gets its own crop, made for the square rather than inherited from the source frame: place the subject with intent (for example, birds in the upper third, a cloud cut by the bottom edge). No shadow, floating enclosure, or repeated title inside the image. Use an adjacent-text variant when the format calls for a horizontal listing: the same image, title, description, and metadata become a coherent row. Text outside the image is the constant; its position follows the composition.

### Evidence Plate

**Role:** Present a chart, research figure, table, equation, or experiment result.

Use a solid surface, readable axes and labels, a concise title, and a caption that explains what the evidence supports. Host Grotesk handles chart labels and tables; mathematical notation uses proper typesetting. Give the evidence most of the usable area. Preserve units, uncertainty, legends, provenance, and meaningful series colors. The blue identity may frame the figure, but must not distort it.

### Caption and Credit

**Role:** Provide context, attribution, or navigation through a sequence.

A small, readable Host Grotesk block aligned to the image or text it belongs to. Use `color.muted` on a solid surface. Dates, authors, page numbers, source notes, figure numbers, and photo credits belong here. Credit photographers by name with a link to the source, in the form “Hero Section Photo by Name on Unsplash”, keeping normal word spacing around linked names. The block earns its presence by conveying information; avoid ornamental issue numbers and pseudo-technical labels.

### Quiet Action

**Role:** Offer a real next step in interactive or printed material.

Use a plain, descriptive link or a short underlined phrase in reading text. A digital action must have a real destination, visible focus, and an adequate target. Links that leave the site (social profiles, photo credits) open in a new tab. A print action needs a useful, readable URL; add a QR code only when it helps the reader. Never imply that an informational project portrait is clickable. Primary actions do not need a new accent color or a large pill treatment.

### Closing Field

**Role:** End a presentation, document, or sequence with a clear connection to the lab.

A `color.closing` field with Porcelain text: a short contact invitation, the relevant address or source, then a small legal block with the copyright line (“Copyright © 2026 Cerulean Labs”, with the current year) above any photo credits. Use only the contact details the material needs. On a report this can be a small colophon; on a closing slide it can occupy the canvas. Real destinations are `hi@cerulean.works`, `github.com/cerulean-works/`, and `huggingface.co/cerulean-works`.

## Do's and Don'ts

### Do

- Use one strong photograph and enough space to perceive it.
- Let Host Grotesk carry every role, with hierarchy built from size, space, and color.
- Choose a coherent Daylight or Evening palette for each reading surface.
- Keep prose and evidence on quiet backgrounds.
- Choose photographs that express a specific idea through a real subject: open sky for room to explore, a formation of birds for a system working together, a seed head for what a generation passes on.
- Crop each image for its final shape and size; check the crop where the text sits.
- Adapt type, density, and margins to reading distance and the actual format.
- Use real research, real people, actual project names, and clear credits to create warmth.
- Keep project titles outside photographs, with card and row variants explicitly chosen.

### Don't

- Don't make birds, clouds, or skies a mascot for every topic; each project gets the one image that fits its idea.
- Don't use generic neural networks, luminous orbs, plastic ribbons, stock laptop scenes, staged office photography, or interchangeable AI imagery.
- Don't add filters, duotones, or heavy color grading to make photographs match; choose images that already share the open, natural-light blue.
- Don't add scattered rules, miniature labels, or arbitrary technical diagrams to make a simple layout appear sophisticated.
- Don't set long prose over photographs or apply texture to research evidence.
- Don't replace the actual logo with a CSS gradient, letter O, or newly generated approximation.
- Don't reintroduce a second display family; a contrasting serif or mono headline breaks the single voice.
- Don't shrink slide or poster text to fit a document-length argument.
- Don't fill sparse space with invented work, metrics, affiliations, quotations, or slogans.
- Don't force blue into every chart series, recolor third-party marks without an appropriate asset, or override a required publication template.

## Surfaces

These are composition choices, not a stack of progressively elevated cards.

| Level | Name           | Value                 | Purpose                                                                       |
| ----- | -------------- | --------------------- | ----------------------------------------------------------------------------- |
| 0     | Daylight paper | `#fcfbf6`             | Reports, teaching sheets, essays, and quiet informational slides              |
| 0     | Evening field  | `#10254b`             | Alternate reading canvas, presentations, and digital surfaces                 |
| 1     | Deep field     | `#102c60` / `#0c2048` | Cover, section boundary, or a deliberate strong block                         |
| 1     | Closing field  | `#102c60` / `#10254b` | Footer or closing panel; Evening continues the canvas behind a `#415577` rule |
| Image | Sky photograph | Approved photography  | Atmosphere, project identity, or a conceptual visual; not a body-text surface |

## Elevation

Depth comes from the photograph itself, scale, cropping, and the transition between a broad sky and a close reading surface. Editorial compositions use no decorative drop shadows, frosted panels, beveled cards, or simulated floating layers. The logo's original gradient and the light within a photograph are intentional; do not extend them into gradient text or generic UI decoration. Functional overlays in a product may need their own interaction treatment, but should not become the visual language of every page or slide.

## Imagery

The signature is **real sky photography with an intentional crop**. Favor natural light, clean saturated daylight blues, deep night indigos, and lots of uninterrupted sky. One clear subject per image, with room around it. Photographs keep their natural color; they belong because of their light and space, not because they have been tinted. Check that detail (stars, distant birds, fine seed heads) remains legible at the final reproduction size; a subject that reads in a full-screen image may vanish on a small card.

The approved image family:

The homepage uses photographs in the hero and Our work, while Blogs uses text-only
entries. These photographs also remain approved for social previews
and other Cerulean formats.

| Subject     | Concept                                | Composition                                                                                               | Source                                                                                    | Asset                                                               |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Sky (day)   | Room to explore                        | Wide daylight sky: deep blue upper left for the headline, sweeping cirrus and the sun to the lower right  | Vincenzo Di Giorgi, [Unsplash](https://unsplash.com/photos/Ioy3OB0U5cI)                   | [hero-day.webp](../public/images/blog_thumbnails/hero-day.webp)     |
| Sky (night) | Room to explore, after dark            | Wide aurora: dark starry sky on the left for the headline, blue-green curtains sweeping in from the right | Condor Wei, [Unsplash](https://unsplash.com/photos/oMcTmNHclZI)                           | [hero-night.webp](../public/images/blog_thumbnails/hero-night.webp) |
| Sky (post)  | Room to explore                        | Tall daylight sky with sweeping cirrus over sand dunes; crop to the deep blue above the clouds            | Jenna Duffy, [Unsplash](https://unsplash.com/photos/blue-sky-over-sand-dunes-eG8EXvfTBU8) | [sky-dunes.webp](../public/images/blog_thumbnails/sky-dunes.webp)   |
| Flock       | A system working together              | Square: seagulls crossing the frame on the diagonal against blue sky and white cloud                      | LTE Photography, [Unsplash](https://unsplash.com/photos/WnpTny0zSjk)                      | [flock.webp](../public/images/blog_thumbnails/flock.webp)           |
| Castor      | Probing what lies at the edge          | Square: a white radio telescope dish from below, tilted toward open blue sky                              | Yasuaki Uechi, [Unsplash](https://unsplash.com/photos/w0P6nu_XbTc)                        | [castor.webp](../public/images/blog_thumbnails/castor.webp)         |
| Fellowship  | What one generation passes to the next | Square: a single dandelion seed head against clear blue, stem rising from the lower right                 | Stephane Mingot, [Unsplash](https://unsplash.com/photos/wj6pxssHjvc)                      | [fellowship.webp](../public/images/blog_thumbnails/fellowship.webp) |
| Mark        | Authorship                             | The actual supplied gradient disc                                                                         | Cerulean                                                                                  | [logo.png](../public/images/design/logo.png)                        |

For new imagery, write the idea in one sentence before searching. Decide the subject, the empty area, the viewpoint, and the crop. Prefer free-license sources (the Unsplash License, not Unsplash+ or stock), record the photographer and source URL, and credit the photographer wherever the image appears prominently. A project photo should express its idea through a real subject, not a generic group portrait, a copied scientific diagram, or literal AI imagery.

Scientific figures must be accurate. Real documentary photographs of people and work can appear in their natural colors with straightforward credits. Use decorative imagery selectively so that the actual work remains visible.

Use the same approved source across an initiative's outputs, with deliberate crops for each format. Record the source and crop instead of silently substituting different imagery. Provide accessible descriptions when an image conveys information; decorative imagery should not repeat nearby text in its description.

### Preparing photographs

- Keep the full-resolution original out of the published assets; export only what the medium needs.
- For screens, export WebP at quality around 80. Hero images: about 2000px on the short side. Square work portraits: 1600×1600. Hero images are exported at 3000×2000.
- Bake a portrait's square crop into the exported file when it differs from a center crop, so every medium starts from the same composition.
- Proof photographs for print from the original, not the web export.

## Layout

The central rhythm is **expanse → explanation → evidence or work → invitation**. It can unfold across a website, a slide sequence, or a printed spread. A single asset only needs the parts relevant to its purpose.

### Atmospheric composition

Let one photograph occupy most or all of the format. Place one short inscription in its quiet region. Use asymmetric placement and a few shared edges. A cover or opening slide can be visually expansive without oversized type, corner labels, or additional decorative objects.

### Editorial composition

Use a solid surface, a clear title, a restrained metadata line, and a readable text measure. A photograph or evidence plate can sit beside or between text blocks. The title is outside project photography; only a deliberate short sky inscription overlays an image.

### Adaptation by medium

| Medium                       | Starting composition                                                              | Adaptation rule                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Presentation                 | One atmospheric opening, followed by solid text and evidence slides               | One main claim per slide; diagrams get room; do not repeat a sky background on every slide                |
| Report or working paper      | Restrained title/author block, readable body, clearly captioned figures           | Use Daylight for practical printing; preserve a venue's required template; a photo cover is optional      |
| Research poster              | Visible title, question, method, main result, supporting evidence, contact        | Prioritize the result at viewing distance; allocate space to actual figures rather than decorative art    |
| Teaching material            | A question or learning goal, explanation, worked example, exercise                | Keep instructions and technical notation easy to scan; separate explanation from labels by size and color |
| Social or event graphic      | One message, one photograph or solid field, essential details                     | Recompose for the aspect ratio; test at feed size; date, place, and action remain readable                |
| Website or digital interface | Atmospheric introduction where useful, then clear reading and task surfaces       | Use real responsive layouts and accessible interactions; see [Website Adapter](#website-adapter)          |
| Print collateral             | A strong crop or quiet title side, with information in a controlled reading block | Respect trim, bleed, and safe areas; proof blues and detail at the final size                             |

## Agent Prompt Guide

### Quick Color Reference

- Daylight: `#fcfbf6` canvas, `#172a50` text, `#4b5d79` secondary text.
- Evening: `#10254b` canvas, `#f4f2e9` text, `#c1cbe0` secondary text.
- Deep field: `#102c60` in Daylight compositions or `#0c2048` in Evening compositions.
- Closing field: `#102c60` in Daylight; `#10254b` behind a `#415577` rule in Evening.
- Text on a photograph or closing field: `#fffdf4`.
- Functional links: `#145a9a` on Daylight, `#a8d4ff` on Evening.
- No separate mandatory CTA fill; no added brand color for each research area.

### Example Component Prompts

1. **Opening slide:** Create a 16:9 Cerulean opening slide using the approved sky photograph edge to edge, cropped so the upper left is deep, cloud-free blue. Place the supplied mark before the mission's first line in that quiet region, with approximately 6% side margins. Use Host Grotesk 40pt regular, Porcelain, around 1.23 line height, −0.02em tracking. Keep the three authored mission lines where they fit. Preserve a large unoccupied area of sky. No subtitle, invented slogan, or extra graphic. Check the crop and contrast at presentation size.

2. **Research report opening:** Create an A4 Daylight title page with the supplied report title in Host Grotesk 32pt regular, actual authors and date in Host Grotesk 10pt in the muted color, and the abstract in Host Grotesk 11pt/1.5. Use a restrained logo lockup and a readable column with practical print margins. Let the actual title determine line breaks. Include a photograph only if it serves this report; do not invent results or affiliations. Follow a required venue template if one applies.

3. **Results slide:** Create an Evening 16:9 slide for the supplied experiment. Use a factual Host Grotesk 32pt title, give the provided chart most of the canvas, and set its labels in Host Grotesk at presentation-readable sizes. Include the supplied units, legend, uncertainty, and source. Add one short explanatory sentence below. Preserve meaningful series colors and keep texture out of the plot.

4. **Fellowship announcement:** Create a square Fellowship graphic from the approved dandelion photograph and supplied event information. Use a sharp image region above a solid Daylight text region, a Host Grotesk title, and smaller Host Grotesk text in the muted color for date, place, and action. Keep all text outside the photograph and credit the photographer. Use only provided details; test legibility at the intended feed size rather than relying on a large export.

5. **Project overview spread:** Create a landscape spread with three Work Portraits for Flock (“An all in one system for model development”), Fellowship (“Our approach to training the next generation of researchers”), and Castor (“Evaluating language model safety from pretraining”), in the same order as the website. Use the approved square crops, Host Grotesk titles below, and the supplied descriptions in the muted color. Align image edges and title baselines; use generous outer margins and equal column gaps. If the format is too narrow, stack the portraits or use separate pages. Do not shrink descriptions into microtype or suggest destinations that do not exist.

For every prompt, supply the medium, dimensions or aspect ratio, audience/viewing distance, actual text, approved assets, and chosen appearance. Ask for an exported-size review. Missing facts should remain missing rather than being filled with plausible inventions.

## Typographic Voice

Host Grotesk makes Cerulean feel direct and current: a mission reads as a plain statement written across the sky, and a technical explanation reads as clear, unhurried prose. With a single family, the distinction between sustained reading and navigational or factual information comes from size, spacing, and color, not from a change of typeface.

Create emphasis through hierarchy, placement, and space. Avoid shouting headlines, excessive weight changes, decorative tracking, and slogans that say less than the real mission. Warmth comes from specific language about people, access, experiments, and shared work. Scale comes from the photograph and the room around it. Use precise, direct prose and preserve the author's meaning.

## Similar Brands

These are directional references from the supplied brief and documents, not templates or assertions that their current designs match Cerulean.

- **Thinking Machines:** The brief's reference for straightforward, text-led storytelling.
- **Reflection:** The brief's reference for human warmth in a research identity.
- **Structured reference document:** A useful model for coherent art direction, explicit image choices, and clear token/component descriptions. Cerulean uses its own sky photography and a single-family type hierarchy.
- **Intercom reference document:** A useful model for warmth, editorial rhythm, and separating expressive typography from utility information. Cerulean makes that separation with scale and color inside Host Grotesk.

## Quick Start

### Portable Token Recipe

Use these names as styles, swatches, or variables in the authoring tool. Keep the role names even when the file format represents them differently.

```yaml
identity: Cerulean
appearance: Daylight # or Evening
colors:
    Daylight:
        canvas: "#fcfbf6"
        text: "#172a50"
        muted: "#4b5d79"
        deep: "#102c60"
        closing: "#102c60"
        link: "#145a9a"
    Evening:
        canvas: "#10254b"
        text: "#f4f2e9"
        muted: "#c1cbe0"
        deep: "#0c2048"
        closing: "#10254b"
        closing-rule: "#415577"
        link: "#a8d4ff"
    on-image: "#fffdf4"
fonts:
    display: Host Grotesk
    utility: Host Grotesk
    technical: system monospace
shapes:
    image-radius: 0
    panel-radius: 0
    logo: supplied circular artwork
spacing:
    unit: choose for the medium
    multiples: [2, 3, 4, 6, 8, 12, 16, 24]
imagery:
    style: real sky photography, natural color, one subject, open space
    format: WebP for screens; originals for print
composition:
    opening: full-bleed sky photograph with a short inscription
    reading: solid field with a readable text measure
    evidence: accurate figures with clear labels and captions
    closing: concise contact, copyright, and photo credits
```

### Apply in Any Medium

1. Choose the format, viewing distance, and actual communication task.
2. Set up Daylight or Evening swatches and Host Grotesk styles. Choose type sizes from that medium's reference range.
3. Select an atmospheric, editorial, work, or evidence composition. Establish margins and a few alignment edges before adding detail.
4. Place real content and approved photographs, cropped for the format. Keep technical figures accurate and essential information readable.
5. Review at the intended size: projected, printed, on a phone, or at feed scale. Check contrast, crop, wrapping, attribution, and the clarity of the next step.

### Website Adapter

The website maps `color.canvas/text/muted/deep/closing/closing-rule/on-image/link/focus/rule/selection` to `--c-paper/ink/muted/deep/footer/footer-rule/on-sky/link/focus/rule/selection`. `font.display` and `font.utility` map to `--font-editorial` and `--font-ui`, both set to Host Grotesk and loaded from Google Fonts in `BaseHead.astro`; `font.mono` maps to `--font-mono`. Use the existing shared tokens and components rather than copying this portable recipe into a second palette.

Where things live:

- `src/styles/design-system.css`: Daylight tokens and layout primitives (`.container`, `.reading-column`, `.artwork-square`).
- `src/styles/theme.css`: Evening token overrides, applied by the `.dark-theme` class on `<html>` (dark is the default).
- `src/styles/global.css`: header, footer, and shared element styles; `home.css` and `blog.css` hold page compositions.
- `src/components/WorkCard.astro`: the Work Portrait. `src/components/PostCard.astro`: the blog post card. `src/components/Footer.astro`: the Closing Field.
- `public/images/blog_thumbnails/`: approved photographs (hero, work portraits, post thumbnails) as WebP. `public/images/design/logo.png`: the mark.

Website behavior:

- **Icons:** use [Lucide's Astro components](https://lucide.dev/guide/astro/getting-started) from `@lucide/astro` for all interface icons. Use `ArrowUpRight` for outgoing footer and linked work-card arrows, `ArrowRight` for All posts, and `Sun`/`Moon` for the theme toggle. Render icons as inline SVG with `currentColor` and a 1.5 stroke width; never use Unicode arrow glyphs, which can render as emoji on iOS. Text-adjacent icons use `size="1em"` and the shared `.inline-icon` alignment class; theme icons are 20px. Decorative icons are hidden from assistive technology and cannot take focus; icon-only controls retain a descriptive accessible label.
- **Blog reading scale:** article pages have no All posts back link; the shared Blog navigation remains available. Use a 720px maximum reading column, 18px body text at 1.65 line height, a 36px title (30px on phones), 28px section headings, and 14px metadata. Use Geist for reading text, Host Grotesk for headings and metadata, and the existing theme colors.
- **Post cards:** the homepage Blogs section (the three latest posts, after Our work, with All posts linking to `/blog`) and the `/blog` index both use `PostCard`, styled in `post-cards.css`. Cards sit three to a row, stacking into a single column below 1000px, with no thumbnails. Each card shows the date and reading time, the title, the description, and the authors. Cards in a row share grid rows (CSS subgrid), so these lines align across the row. Card bylines are compact: at most two names, then “and N others” for the remaining named authors, or “and others” when only the `et al` credit remains; article pages keep the full credit. Descriptions use weight 300 and author names weight 500 so the byline reads clearly. Authors show 20px overlapping avatars: the author's `avatar` path or https URL, else their GitHub picture when `url` is a GitHub profile, else the Cerulean mark for Cerulean and the `et al` credit, else initials. Cards are flat panels: `--c-panel` fill (`--c-ink` mixed 4% into `--c-paper`, 7% on hover via `--c-panel-hover`), square corners, no border or shadow. The whole card is the title link; author links stay separately clickable. Post thumbnails are used only for social previews.
- **Blog metadata:** the `author` array accepts plain name strings, `{ author, url? }` objects, and `"et al"` (also accepted as `{ author: "et al" }`). `PostAuthors` links names only when a URL is provided; other names are plain text. The special `et al` entry appends “in collaboration with others at Cerulean”; omitting it shows only the named authors. Reading time is calculated from Markdown at 200 words per minute, rounded up to at least one minute. Posts have no deck/subtitle or manual reading-time field.
- **Analytics:** `BaseHead.astro` queues Google Analytics (`G-WGDCRBK3JG`) initialization on every page through the shared layout. The external script uses `defer` so it downloads in parallel and executes after HTML parsing and stylesheet loading, avoiding Analytics execution during initial page construction. Keep `defer` rather than `async` to preserve this order.
- **Homepage sky:** the hero photograph is pinned to the viewport (`position: fixed`) and the page scrolls over it, so overscrolling past the top reveals more sky rather than a blank edge. Once the hero has scrolled out of view, the photograph is hidden and the root background takes `--c-footer`, so overscroll at the bottom matches the footer. Content below the hero sits in `.home-body` with an opaque canvas background. Daylight shows `hero-day.webp` and Evening fades `hero-night.webp` in over it (a 600ms crossfade, instant under reduced motion); both images are in the markup and the theme class decides which one is visible. The crop is set with `--hero-position` (`center 30%` on wide screens, `40% center` on narrow ones), and the night image can override it with `--hero-night-position` (`55% center` on narrow screens).
- **Header:** the homepage uses `headerMode="after-hero"`; the wordmark appears and the header gains a canvas gradient (solid at the top, transparent at the bottom) only after the hero leaves the viewport. The gradient appears at once; the wordmark fades and drops 6px into place and the header text color eases over 400ms (instant under reduced motion). Navigation is Work and Blog plus the theme toggle; contact lives in the footer.
- **Theme switch:** the toggle adds `.theme-transitioning` to `<html>` for the length of a switch, so token-driven colors ease over 600ms alongside the hero crossfade, and the sun and moon icons crossfade with a quarter turn. The homepage header uses a masked solid fill so its canvas color fades at the same speed as the body while preserving the gradient. Under reduced motion the switch is instant.
- **Footer:** Contact heading and email, GitHub and Hugging Face links, then the legal block: the copyright line followed by the credit for the hero photograph the current theme shows. All external links open in a new tab with `rel="noopener noreferrer"`.
