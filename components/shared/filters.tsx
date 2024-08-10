import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {/* title */}
      <Title
        text='Фільтрація'
        size='sm'
        className='mb-5 font-bold'
      />

      {/* checkboxes */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox
          text='Можна збирати'
          value='1'
        />
        <FilterCheckbox
          text='Новинки'
          value='2'
        />
      </div>

      {/* price slider */}
      <div className='mt-5 border-y border-y-neutral-100 py-7 pb-6'>
        <p className='font-bold mb-3'>Ціна від і до:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type='number'
            placeholder='1000'
            min={100}
            max={1000}
            defaultValue={1000}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[0, 1000]}
        />
      </div>

      {/* Ingredients */}
      <Title
        text='Фільтрація'
        size='sm'
        className='mb-5 font-bold'
      />

      {/* checkboxes */}
      <CheckboxFiltersGroup
        title='Ingredients'
        limit={5}
        items={[
          { text: 'Троянди', value: '10' },
          { text: 'Фіалки', value: '11' },
          { text: 'Лілії', value: '3' },
          { text: 'Ландиші', value: '4' },
          { text: 'Мімози', value: '5' },
          { text: 'Волошки', value: '6' },
          { text: 'Ромашки', value: '7' },
        ]}
        defaultItems={[
          { text: 'Троянди', value: '10' },
          { text: 'Фіалки', value: '11' },
          { text: 'Лілії', value: '3' },
          { text: 'Ландиші', value: '4' },
          { text: 'Мімози', value: '5' },
          { text: 'Волошки', value: '6' },
          { text: 'Ромашки', value: '7' },
        ]}
        className='mt-5'
      />
    </div>
  )
}
