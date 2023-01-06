export interface Router {
  name: string;
  path: string;
  title: string
}

export const routerLinks = [
  {
    name: 'home',
    path: '/',
    title: 'Inicio'
  },
  {
    name: 'about',
    path: '/about',
    title: 'Sobre'
  },
  {
    name: 'characters',
    path: '/characters',
    title: 'Personajes'
  },
] as Router[]