import { defineStore } from 'pinia'

export const useTechStore = defineStore('techs', {
  state: () => ({
    items: [
      {
        title: 'Vue.js 3 (composition API)',
        text: 'A JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS and JavaScript.',
        icon: 'vue.svg',
        link: 'https://vuejs.org/'
      },
      {
        title: 'MongoDB',
        text: 'An open source NoSQL database management program used as an alternative to the traditional relational databases.',
        icon: 'mongodb.svg',
        link: 'https://www.mongodb.com/'
      },
      {
        title: 'GraphQL',
        text: 'A query language for APIs and a runtime for fulfilling those queries with your existing data.',
        icon: 'graphql.svg',
        link: 'https://graphql.org/'
      },
      {
        title: 'Apollo (Vue Apollo v4)',
        text: 'A supergraph platform that unifies GraphQL across apps, unlocking faster software development.',
        icon: 'apollo.svg',
        link: 'https://v4.apollo.vuejs.org/'
      },
      {
        title: 'TypeScript',
        text: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
        icon: 'typescript.svg',
        link: 'https://www.typescriptlang.org/'
      },
      {
        title: 'Vite',
        text: 'A build tool that aims to provide a faster and leaner development experience for modern web projects.',
        icon: 'vite.svg',
        link: 'https://vitejs.dev/'
      },
      {
        title: 'Cypress',
        text: 'An end-to-end testing framework for web test automation that enables front-end developers and test automation engineers to write automated web tests in JavaScript.',
        icon: 'cypress.svg',
        link: 'https://www.cypress.io/'
      },
      {
        title: 'Pinia',
        text: 'A store library for Vue, it allows you to share a state across components/pages and provides a simpler API than VUEX.',
        icon: 'pinia.svg',
        link: 'https://pinia.vuejs.org/'
      },
      {
        title: 'Tailwind CSS',
        text: 'A higly customizable utility-first CSS framework for rapidly building custom user interfaces.',
        icon: 'tailwindcss.svg',
        link: 'https://tailwindcss.com/'
      },
      {
        title: 'SASS',
        text: 'It offers a way to write styles for websites with more enhanced CSS syntax.',
        icon: 'scss.svg',
        link: 'https://sass-lang.com/'
      },
      {
        title: 'Rollup',
        text: 'A module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.',
        icon: 'rollup.svg',
        link: 'https://rollupjs.org/'
      },
      {
        title: 'Node.js',
        text: 'An open-source, cross-platform, back-end JavaScript runtime environment that executes JavaScript code outside a web browser.',
        icon: 'nodejs.svg',
        link: 'https://nodejs.org/'
      },
      {
        title: 'ESLint',
        text: 'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and helps you maintain your code quality with ease.',
        icon: 'eslint.svg',
        link: 'https://eslint.org/'
      },
      {
        title: 'Prettier',
        text: 'An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account.',
        icon: 'prettier.svg',
        link: 'https://prettier.io/'
      }
    ]
  })
})
