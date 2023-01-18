<div align="center">
  <a href="https://formulaic-collection.vercel.app">
    <img src="./readme-assets/logo.png" height="200" />
  </a>
</div>

<h1 align="center">Formulary</h1>

<p align="center">
    <strong>Math formula cheat sheet for an exam built on web technology.</strong>
</p>

<br><br>

This is the printer template of a math formula cheat sheet I (legally) used for
one of my linear algebra exams.

The individual topics of formulas are written out as `.md` files in the
`topics/` folder. They are imported as React components, which is made possible
by the `@next/mdx` plugin.

`remark-math` adds support for the LaTeX math syntax used in the markdown files.

<br>

## Screenshots

![Screenshot of the application](./readme-assets/screenshot.png)

## Development

1. **Requirements**

   You need [Node.js](https://nodejs.org/en/) and
   [Yarn](https://classic.yarnpkg.com/en/docs/install) installed on your system.

2. **Install packages**

   Run `yarn` to install all neccesary packages.

3. **Run the application**

   Start the Next.js dev server by running `yarn dev`.
