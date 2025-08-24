import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Всі піцци' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* filter */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* products */}

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title={'Піци'}
                categoryId={1}
                items={[
                  {
                    id: 0,
                    name: 'Чізбургер-піцца',
                    pric: 550,
                    imageUrl:
                      'https://grigliata.com.ua/wp-content/uploads/2023/04/Margarita.jpg',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Маргарита',
                    pric: 500,
                    imageUrl:
                      'https://grigliata.com.ua/wp-content/uploads/2023/04/Margarita.jpg',
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Комбо'}
                categoryId={2}
                items={[
                  {
                    id: 0,
                    name: 'Чізбургер-піцца',
                    pric: 550,
                    imageUrl:
                      'https://grigliata.com.ua/wp-content/uploads/2023/04/Margarita.jpg',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Маргарита',
                    pric: 500,
                    imageUrl:
                      'https://grigliata.com.ua/wp-content/uploads/2023/04/Margarita.jpg',
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title={'Закуски'}
                categoryId={3}
                items={[
                  {
                    id: 0,
                    name: 'Чізбургер-піцца',
                    pric: 550,
                    imageUrl:
                      'https://grigliata.com.ua/wp-content/uploads/2023/04/Margarita.jpg',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Маргарита',
                    pric: 500,
                    imageUrl:
                      'https://grigliata.com.ua/wp-content/uploads/2023/04/Margarita.jpg',
                    items: [{ price: 500 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
