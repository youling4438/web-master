export const seo = {
  title: 'Web Master | 开发者、细节控、Mario Player',
  description:
    '我叫 Thomas，一名开发者，一个练习时长7年半的软件工程师，主要用做前端开发，对Angular比较感兴趣，目前仍然在努力学习前端相关的知识。也是一个2D马里奥的粉丝，喜欢玩横板过关类的马里奥游戏，尤其是新超级马里奥兄弟Wii/U以及超级马里奥制造。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
