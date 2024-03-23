'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { MarioIcon, SparkleIcon } from '~/assets'
// import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>开发者
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      细节控
    </span>
  )
}

function OCD() {
  return (
    <span className="group inline-flex items-center">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>追星族</span>
    </span>
  )
}

function Player() {
  return (
    <span className="group inline-flex items-center">
      <MarioIcon className="mr-1 inline-flex fill-zinc-600/80  dark:fill-zinc-200/20 group-hover:fill-zinc-700/95 dark:group-hover:fill-zinc-100/20" />
      <span>Mario Player</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />， <Designer />
        <span className="block h-2" />
        <OCD />， <Player />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 <b>Thomas</b>，目前住在陕西西安。
          一个练习时长7年半的<strong>软件工程师</strong>，主要用做前端开发，对<strong>Angular</strong>比较感兴趣，目前仍然在努力学习前端相关的知识。
          <br />
          也是一个2D马里奥的粉丝，喜欢玩横板过关类的马里奥游戏，尤其是新超级马里奥兄弟Wii/U以及超级马里奥制造。
          {/* <PeekabooLink href="https://zolD play.com">佐玩</PeekabooLink> */}
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://twitter.com/ThomasZhan18567"
          aria-label="我的推特"
          platform="twitter"
        />
        {/* <SocialLink
          href="https://www.facebook.com/profile.php?id=61552175120784"
          aria-label="我的Facebook"
          platform="facebook"
        /> */}
        <SocialLink
          href="https://space.bilibili.com/393668857"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://github.com/youling4438"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:thomasrun4438@gmail.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
