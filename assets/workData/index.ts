export type workDatum = {
  to: string,
  abstractTitle: string,
  abstractImage: NodeRequire,
  title: string,
  subtitle: string | null,
  info: string | null,
  category: string[]
}

export const workData = [
  {
    to: '/Works/KomabaFes2019',
    abstractTitle: '第70回駒場祭「七変華」',
    abstractImage: require('@/assets/img/works/KF70/abstract.jpg'),
    title: '第70回駒場祭',
    subtitle: '「七変華」',
    info: '2019年・共同制作',
    category: ['Design Direction', 'DTP', 'Illustration', 'Web', 'Logo', 'Copy Writing']
  }
]
