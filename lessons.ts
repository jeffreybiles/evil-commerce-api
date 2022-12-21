export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.9',
  githubUrl: string,
  youtubeUrl: string,
}
export type Lesson = {
  name: string,
  exampleSubdomain: string,
  implementations: Implementation[],
  comingSoon?: boolean,
}

export const lessons: Lesson[] = [
  {
    name: 'Lesson 01 - Intro to Components and Routing',
    exampleSubdomain: 'lesson-01',
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        githubUrl: 'https://github.com/jeffreybiles/evil-commerce/commits/lesson-01',
        youtubeUrl: '',
      },
    ]
  },
  {
    name: 'Lesson 02 - Adding a Shopping Cart',
    exampleSubdomain: 'lesson-02',
    implementations: []
  }
]