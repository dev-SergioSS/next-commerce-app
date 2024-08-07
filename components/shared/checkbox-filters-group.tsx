'use client'

import React from 'react'
import { FilterCheckboxProps, FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'

type Item = FilterCheckboxProps

interface Props {
  className?: string
  title: string
  items: Item[]
  defaultItems?: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder,
  onChange,
  defaultValue,
}) => {
  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      <div className='mb-5'>
        <Input
          placeholder={searchInputPlaceholder}
          className='bg-gray-50 border-none'
        />
      </div>

      <div className='flex flex-col gap-4 mah-h9-6 pr-2 overflow-auto scrollbar'>
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={() => console.log()}
          />
        ))}
      </div>
    </div>
  )
}
