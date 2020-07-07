export type pageDatum = {
  path: string,
  name: string,
  objectPosition: number,
  shownTop: boolean
}

export const pageData: pageDatum[] = [
  {
    path: '/',
    name: 'Top',
    objectPosition: 8,
    shownTop: false
  },
  {
    path: '/Profile',
    name: 'Profile',
    objectPosition: 50,
    shownTop: true
  },
  {
    path: '/Works',
    name: 'Works',
    objectPosition: 65,
    shownTop: true
  },
  {
    path: '/Contact',
    name: 'Contact',
    objectPosition: 100,
    shownTop: true
  }
]
