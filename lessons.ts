export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.9',
  githubUrl: string,
  youtubeId: string,
}
export type Lesson = {
  name: string,
  exampleSubdomain: string,
  implementations: Implementation[],
  comingSoon?: boolean,
  description?: string,
}

export const lessons: Lesson[] = [
  {
    name: 'Lesson 01 - Intro to Components and Routing',
    exampleSubdomain: 'lesson-01',
    description: `Learn the basics of components and routing.
  
    We'll start with displaying a list of products in the index route, and then we'll add a route that displays a single product.

    We'll also learn how to abstract code into a reusable component with props.
`,
    implementations: [
      {
        framework: 'SvelteKit 1.0',
        githubUrl: 'https://github.com/jeffreybiles/evil-commerce/commits/lesson-01',
        youtubeId: '_FJy4yUSmfc', // note: this is not actually the video for this lesson, this is a random video
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Nuxt 3',
        githubUrl: '',
        youtubeId: '0W16DJeAsFM',
      },
      { // note: this is not actually created yet, but I'm leaving it here as a placeholder
        framework: 'Next 13',
        githubUrl: '',
        youtubeId: 'ypY-HuJP95k',
      }
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