import { Container, Filters, Title, TopBar } from '@/components/shared'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title
          text='Всі піцци'
          size='lg'
          className='font-extrabold'
        />
      </Container>

      <TopBar />

      <Container className='pb-14'>
        <div className='flex gap-[60px]'>
          {/* filter */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* products */}
          <div className=''>list</div>
        </div>
      </Container>
    </>
  )
}
