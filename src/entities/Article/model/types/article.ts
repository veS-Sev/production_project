import { type User } from 'entities/User'
export enum AtricleBlockType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  CODE = 'CODE',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}
export interface ArticleBlockBase {
  id: string
  type: AtricleBlockType
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: AtricleBlockType.TEXT
  title?: string
  paragraphs: Array<string>
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: AtricleBlockType.IMAGE
  src: string
  title: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: AtricleBlockType.CODE
  code: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum AtricleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONEMICS = 'ECONEMICS',
}

export interface Article {
  id: string
  title: string
  subtitle: string
  user: User
  img: string
  views: number
  createdAt: string
  type: Array<AtricleType>
  blocks: Array<ArticleBlock>
}
