---
title: "A place to begin"
description: "Introducing Cerulean: a student-led lab working to make AI research more accessible through efficient training."
pubDate: "2026-09-13"
author: "Cerulean"
readingTime: "2 min read"
deck: "Breaking down barriers to AI research, one experiment at a time."
thumbnail:
    src: "/images/blog_thumbnails/a-place-to-begin.jpg"
    alt: ""
    title: |-
        A place
        to begin.
---

We believe in science for everyone. A student should be able to explore an idea before university. A community tool-builder should be able to turn a useful observation into a research question. People from different backgrounds should have room to experiment, contribute, and challenge what we think we know.

Cerulean is a student-led research lab working to make that possible. Our aim is to reduce the dependence of AI research on high-end hardware through algorithmic and engineering advances. We want to find models that learn more from less computation, and build tools that let more people take part in discovering them.

Computing costs can determine which questions someone gets to pursue. When an experiment is out of reach, the idea behind it may never be tested. We want to make more of those experiments possible and help keep the AI research landscape free and diverse.

## Where we’re starting

We’re starting our research by training models with low inter-accelerator communication requirements. We want to explore how much devices need to exchange during training, how often they need to synchronize, and how those requirements can be reduced while preserving the model’s ability to learn.

The goal is to make useful training less dependent on expensive, tightly connected clusters. We’ll investigate the tradeoffs between communication, computation, and learning quality, and test which approaches hold up under practical hardware constraints.

Alongside this, we’re using and developing frameworks that do not rely on CUDA. We want researchers to have more freedom in the hardware they use and the software they build on. Making it easier to experiment across different accelerators is part of making research accessible with the resources people already have.

These are our starting research directions. The work ahead is to measure what helps, understand where it falls short, and make the results useful to others.

## Building in public

We treat efficiency as a first-class research concern, and openness as a way to move the science forward. An improvement becomes more valuable when someone else can inspect it, reproduce it, and build on it.

We’ll use this space to share our experiments, engineering decisions, and what we learn along the way. That includes the constraints behind a result and the approaches that don’t work. We want our work to give other researchers a useful place to begin.

If you’re exploring these questions, building tools, or have an idea to share, write to us at [hi \[at\] cerulean.works](mailto:hi@cerulean.works).

We envision a world where anyone can experiment to their heart’s content. In that world, sky’s the limit.

— The Cerulean Team
