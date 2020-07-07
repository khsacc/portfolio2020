export type pageDatum = {
  path: string,
  name: string,
  objectPosition: number,
  shownTop: boolean
  shownFooter: boolean
}

export const pageData: pageDatum[] = [
  {
    path: '/',
    name: 'Top Page',
    objectPosition: 8,
    shownTop: false,
    shownFooter: true
  },
  {
    path: '/Works',
    name: 'Works',
    objectPosition: 45,
    shownTop: true,
    shownFooter: true
  },
  {
    path: '/Profile',
    name: 'Profile',
    objectPosition: 65,
    shownTop: true,
    shownFooter: true
  },
  {
    path: '/Contact',
    name: 'Contact',
    objectPosition: 100,
    shownTop: true,
    shownFooter: true
  }
]
