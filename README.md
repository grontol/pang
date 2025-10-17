# 🌿 Pang

### A minimalistic reactive web UI framework — made to give control back to developers

> [!WARNING]
> Pang is still under active development. Expect bugs, missing features, and rough edges.

---

## 💡 Philosophy

**Pang** is an experimental reactive UI framework built with a simple goal:  
to give developers **full control and transparency** over their frontend code.

Modern frontend stacks often grow into overly complex systems where developers no longer understand what truly happens behind the scenes. Frameworks evolve rapidly, changing or deprecating APIs, introducing layers of abstraction that make your code fragile and short-lived.  

If your goal is to build something *fast*, such complexity might be acceptable.  
But if you aim for *longevity* and *deep understanding* of your codebase — Pang offers a different path.

Pang is designed to be **small, hackable, and transparent**.  
The entire framework is only a few thousand lines of code, so you can read, modify, and fully own it.  
If you don’t have the time or curiosity to get your hands dirty, Pang might not be for you.

---

## 🧩 Syntax

Pang’s syntax is highly inspired by [SolidJS](https://www.solidjs.com/), combining declarative components with a signal-based reactivity model.

---

## ⚙️ Reactivity Model

Reactivity in Pang is implemented using **signals** — minimal reactive primitives that automatically propagate changes to dependent computations.  
No virtual DOM, no complex diffing — just straightforward, dependency-tracked updates.

---

## 🧱 Stack & Tooling

- **TypeScript** — Core implementation language  
- **Vite** — Development bundler  
- **Babel** — JSX transformation  

---

## ✨ Features

- ✅ **JSX Support**  
- ✅ **Reactive State** — both primitive and nested  
- ✅ **Lifecycle Hooks** — `onMount` and `onDestroy`  
- ✅ **Transitions** — inspired by [Svelte](https://svelte.dev/)  
- ✅ **Hash-Based Client Routing**  
- ✅ **Component-Scoped CSS**
- ✅ **Async Component**

---

## 🚧 Project Status

Pang is still in its early stages and should be considered **experimental**.  
The current focus areas include:

- Improving the reactive core  
- Simplifying JSX compilation  
- Expanding transition and animation capabilities  
- Experimenting with server-side rendering

---

## 📜 License

MIT License © 2025 GrT
