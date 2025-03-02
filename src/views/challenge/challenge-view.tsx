import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import H1 from '@/components/ui/typography/h1';

export default function ChallengeView() {
  return (
    <div className='container p-8'>
      <H1>챌린지</H1>

      <div className='flex flex-col'>
        <Card className='p-4' style={{ marginTop: '16px' }}>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col space-y-2'>
              <p className='text-xl font-bold' style={{ marginBottom: '4px' }}>
                Falsum Atlantis.
              </p>
              <div className='flex flex-row space-x-2 items-center'>
                <Badge variant='default'>
                  <p className='text-sm'>DX</p>
                </Badge>
                <Badge variant='default'>
                  <p className='text-sm'>MASTER</p>
                </Badge>
                <div className='inline-block bg-[#f87171] border-secondary border-2 p-2 rounded-md'>
                  <p className='text-sm'>14 (14.5)</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4'>
              <div className='flex flex-row items-center space-x-2'>
              <Badge variant='default'>
                  <p className='text-sm'>랭크</p>
                </Badge>
                <p className='text-2xl font-bold'>SSS+</p>
              </div>
              <Button variant='default'>
                <p className='text-sm font-bold'>완료하기</p>
              </Button>
            </div>
          </div>
        </Card>
        <Card className='p-4' style={{ marginTop: '16px' }}>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col space-y-2'>
              <p className='text-xl font-bold' style={{ marginBottom: '4px' }}>
                MarbleBlue.
              </p>
              <div className='flex flex-row space-x-2 items-center'>
                <Badge variant='default'>
                  <p className='text-sm'>DX</p>
                </Badge>
                <Badge variant='default'>
                  <p className='text-sm'>MASTER</p>
                </Badge>
                <div className='inline-block bg-[#f87171] border-secondary border-2 p-2 rounded-md'>
                  <p className='text-sm'>14 (14.5)</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4'>
              <div className='flex flex-row items-center space-x-2'>
              <Badge variant='default'>
                  <p className='text-sm'>랭크</p>
                </Badge>
                <p className='text-2xl font-bold'>SSS+</p>
              </div>
              <Button variant='default'>
                <p className='text-sm font-bold'>완료하기</p>
              </Button>
            </div>
          </div>
        </Card>
        <Card className='p-4' style={{ marginTop: '16px' }}>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col space-y-2'>
              <p className='text-xl font-bold' style={{ marginBottom: '4px' }}>
                Rooftop Run: Act1
              </p>
              <div className='flex flex-row space-x-2 items-center'>
                <Badge variant='default'>
                  <p className='text-sm'>STD</p>
                </Badge>
                <Badge variant='default'>
                  <p className='text-sm'>Re:MASTER</p>
                </Badge>
                <div className='inline-block bg-[#f87171] border-secondary border-2 p-2 rounded-md'>
                  <p className='text-sm'>13 (13.2)</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center space-x-4'>
              <div className='flex flex-row items-center space-x-2'>
              <Badge variant='default'>
                  <p className='text-sm'>콤보 마크</p>
                </Badge>
                <p className='text-2xl font-bold'>AP</p>
              </div>
              <Button variant='default'>
                <p className='text-sm font-bold'>완료하기</p>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
