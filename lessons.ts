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
    name: 'Lesson 02 - Loading and Server Files',
    exampleSubdomain: 'lesson-02',
    implementations: []
  },
  {
    name: 'Lesson 03 - Layouts and More',
    exampleSubdomain: 'lesson-03',
    implementations: [],
  }
]