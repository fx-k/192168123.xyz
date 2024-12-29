import React, { JSX, useContext, useMemo } from 'react'
import { ListContext } from './ListProvider'
import { ArrowRight, Checked, Unchecked } from '@/components/icons'
import clsx from 'clsx'

const ListItem: React.FC<JSX.IntrinsicElements['li']> = props => {
  const { children, className, ...rest } = props
  const { type } = useContext(ListContext)

  const childArr = useMemo(() => React.Children.map(children, child => child), [children])

  const getMarker = {
    ul: () => (
      <span className="flex pt-[4px] pr-2">
        <ArrowRight className="text-xl -ml-1 mr-1 text-primary" />
      </span>
    ),
    // ol 的 marker 样式在 markdown.scss 中设置
    ol: () => null,
    tl: () => (
      <span className="flex pt-[3.5px] pr-2">
        {/* @ts-ignore */}
        {childArr[0].props.checked ? (
          <Checked className="text-xl -ml-1 mr-1 text-primary" />
        ) : (
          <Unchecked className="text-xl -ml-1 mr-1 text-primary" aria-hidden />
        )}
      </span>
    ),
  }[type]

  return (
    <li className={clsx(className, 'mdx-li flex items-start my-4')} {...rest}>
      {getMarker()}
      <div className="flex-1 overflow-hidden">{type !== 'tl' ? children : childArr?.slice(2)}</div>
    </li>
  )
}

export default ListItem
