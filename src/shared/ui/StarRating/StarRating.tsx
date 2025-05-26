import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './StarRating.module.scss'
import { Icon } from '../Icon'
import StarIcon from '../../assets/icons/star-20-20.svg'
import { useState } from 'react'

interface StarRatingProps {
  className?: string
  size?: number
  onSelect?: (starsNumber: number) => void
  selectedStars?: number
}

export const StarRating = (props: StarRatingProps) => {
  const {
    className, size = 30,
    onSelect, selectedStars = 0
  } = props
  const stars = [1, 2, 3, 4, 5]
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarCount(starsCount)
      setIsSelected(true)
    }
  }

  return <div className={classNames(cls.StarRating, {}, [className])}>
    {
      stars.map(starNumber => (
        <Icon className={classNames(cls.starIcon, { [cls.isSelected]: isSelected }, [starNumber <= currentStarCount ? cls.hover : cls.normal])} Svg={StarIcon} key={starNumber} height={size} width={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)} />
      ))
    }
  </div>
}
