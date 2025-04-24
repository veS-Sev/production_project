import type { DropdownDirection } from '../../../types/index'
import cls from './popups.module.scss'

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom-left': cls.optionsBottomLeft,
  'bottom-right': cls.optionsBottomRight,
  'top-left': cls.optionsTopLeft,
  'top-right': cls.optionsTopRight,
  top: cls.optionsTop,
  bottom: cls.optionsBottom
}
