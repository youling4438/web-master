import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '功不唐捐，玉汝于成。为了成为更好的自己，努力学习技术，朝着目标一步一个脚印，夯实基础。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        路漫漫其修远兮，吾将...
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          我的目标是不断提升自己的前端技术，最终成为一个<b>Web Master</b>或者<b>Angular GDE</b>。功不唐捐，玉汝于成。努力学习技术，朝着目标一步一个脚印，夯实基础。下面就是我在&nbsp;<em>上下而求索</em>&nbsp;的过程中做的一部分项目。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
