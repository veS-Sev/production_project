export interface SidebarItemType {
  text: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: true
}
