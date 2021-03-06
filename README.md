<h1 align="center">formulaic-collection</h1>

<p align="center">
    <strong>A math formula cheat sheet for one of my math exams made with Next.js, Katex and MDX.</strong>
</p>

<p align="center"> 
    <a href="https://github.com/leodr/formulaic-collection/blob/main/LICENSE">
        <img alt="MIT License" src="https://img.shields.io/github/license/leodr/formulaic-collection?color=%23A855F7&labelColor=%2327272A&style=for-the-badge">
    </a>
    <a href="https://twitter.com/leodriesch">
        <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/leodriesch?color=%2338BDF8&labelColor=%2327272A&style=for-the-badge">
    </a>
</p>

<p align="center">
    <a href="#-development"><b>Development</b></a>
    <span>  •  </span>
    <a href="#-contribute"><b>Contribute</b></a>  
</p>

---

This is the printing template of a math formula cheat sheet I used for one of my
math exams. Oh yeah, we were allowed to bring 5 pages of formulas, of course.

The individual topics with the formulas are written out as `.md` files in the
`topics/` folder. They are then imported as React components, which is made
possible by the `@next/mdx` plugin.

`remark-math` adds support for the Tex math syntax used in the markdown files.

![Screenshot of the application](./assets/screenshot.png)

## ❯ Development

1. **Requirements**

   You need [Node.js](https://nodejs.org/en/) and
   [Yarn](https://classic.yarnpkg.com/en/docs/install) installed on your system.

2. **Install packages**

   Run `yarn` to install all neccesary packages.

3. **Run the application**

   Start the Next.js dev server by running `yarn dev`.

<br>

## ❯ Contribute

If you think you have any ideas that could benefit the project, feel free to
create a pull request!

<br>

---

<p align="center">
    <sub>
        Project by Leo Driesch, released under <a href="https://github.com/leodr/flutter_tasks/blob/main/LICENSE">MIT license</a>.
    </sub>
</p>
<p align="center">
    <a href="https://twitter.com/leodriesch">
        <img alt="Leo Driesch on Twitter" src="./assets/twitter.svg">
    </a>
    &nbsp;&nbsp;
    <a href="https://github.com/leodr">
        <img alt="Leo Driesch on GitHub" src="./assets/github.svg">
    </a>
</p>
