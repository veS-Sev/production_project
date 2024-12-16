import { type User } from 'entities/User'
export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  CODE = 'CODE',
}

export enum ArticleSortField {
  VIEWS = 'views',
  CREATED = 'created',
  TITLE = 'title',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}
export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: Array<string>
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string
  title: string
  subtitle: string
  user: User
  img: string
  views: number
  createdAt: string
  type: Array<ArticleType>
  blocks: Array<ArticleBlock>
}
