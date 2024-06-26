```@raw html
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: LuxDL Docs
  text: Elegant & Performant Scientific Machine Learning in JuliaLang
  tagline: A Pure Julia Deep Learning Framework designed for Scientific Machine Learning
  actions:
    - theme: brand
      text: Tutorials
      link: /tutorials
    - theme: alt
      text: Ecosystem
      link: /ecosystem
    - theme: alt
      text: API Reference 📚
      link: /api/Lux/layers
    - theme: alt
      text: View on GitHub
      link: https://github.com/LuxDL/Lux.jl
  image:
    src: /lux-logo.svg
    alt: Lux.jl

features:
  - icon: 🚀
    title: Fast & Extendible
    details: Lux.jl is written in Julia itself, making it extremely extendible. CUDA and AMDGPU are supported first-class, with experimental support for Metal Hardware.
    link: /introduction

  - icon: 🧑‍🔬
    title: SciML ❤️ Lux
    details: Lux is the default choice for many SciML packages, including DiffEqFlux.jl, NeuralPDE.jl, and more.
    link: https://sciml.ai/

  - icon: 🧩
    title: Uniquely Composable
    details: Lux.jl natively supports Arbitrary Parameter Types, making it uniquely composable with other Julia packages (and even Non-Julia packages).
    link: /api/Lux/contrib#Training

  - icon: 🧪
    title: Well Tested
    details: Lux.jl tests every supported Automatic Differentiation Framework with every supported hardware backend against Finite Differences to prevent sneaky 🐛 in your code.
    link: /api/Testing_Functionality/LuxTestUtils
---
```
