import { Arrow, Bag, DecorationImg_1, GradientImg, User } from '@/assets'
import { ApplicationBox, Button, TipBox } from '@/components'
import { ApplicationPreviewType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const applicationData: ApplicationPreviewType[] = [
  {
    post_id: 0,
    post_title: '개인적으로 완벽한 포트폴리오',
    post_post_type: 'Portfolio',
    user_oauth_id: '이강혁',
    post_major: 'Backend',
    post_created_at: '2024-05-16 01:00:01+00',
  },
  {
    post_id: 1,
    post_title: '완벽에 가까운 포트폴리오',
    post_post_type: 'Portfolio',
    user_oauth_id: '이강혁',
    post_major: 'Backend',
    post_created_at: '2024-05-16 01:00:01+00',
  },
  {
    post_id: 2,
    post_title: '자기소개의 완벽한 예',
    post_post_type: 'PersonalStatement',
    user_oauth_id: '강진현',
    post_major: 'Frontend',
    post_created_at: '2024-05-16 01:00:01+00',
  },
  {
    post_id: 3,
    post_title: '자기소개의 완벽한 예',
    post_post_type: 'PersonalStatement',
    user_oauth_id: '강진현',
    post_major: 'Frontend',
    post_created_at: '2024-05-16 01:00:01+00',
  },
]

const tipData = [
  {
    title: '지원서 작성 팁 3가지',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
    name: '이강혁',
    date: '2024-05-16 01:00:01+00',
  },
  {
    title: '지원서 작성 팁 3가지',
    content: 'eiusmod tembna aliqua. Ut enim',
    name: '이강혁',
    date: '2024-05-16 01:00:01+00',
  },
  {
    title: '지원서 작성 팁 3가지',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim',
    name: '이강혁',
    date: '2024-05-16 01:00:01+00',
  },
]

export default function ProfilePage() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-center h-[180px] w-full relative">
        <Image
          src={GradientImg}
          alt="Profile Banner"
          width={1920}
          height={180}
          className="w-full h-full object-cover border-b-2 border-gray100"
          priority
        />
        <Image
          src={DecorationImg_1}
          alt="User Profile"
          width={240}
          height={240}
          className="size-[120px] absolute -bottom-[60px] rounded-full border border-gray100"
          priority
        />
      </div>
      <section className="flex flex-col items-center gap-10 p-[60px_40px_120px] sm:px-6 max-w-[880px] w-full">
        <div className="flex flex-col items-center gap-1 py-6">
          <p className="text-titleMedium">마이클</p>
          <p className="text-bodySmall text-gray600">팔로잉 24 | 팔로워 40</p>
        </div>
        <div className="flex gap-3">
          <Button kind="gray" size="small">
            로그아웃
          </Button>
          <Button kind="blue" size="small">
            정보 수정하기
          </Button>
        </div>
        <article className="flex flex-col gap-6 w-full">
          <h5 className="text-titleSmall">기본 정보</h5>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                <User size={28} className="text-blue500" />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                <p className="text-bodySmall">기수</p>
                <p className="text-labelMedium text-gray600">8기</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                <Bag size={28} className="text-blue500" />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                <p className="text-bodySmall">전공</p>
                <p className="text-labelMedium text-gray600">Frontend</p>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full h-[1px] bg-gray200"></div>
        <article className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-titleSmall">공유한 지원서 자료</h5>
            <Link href="#" className="flex items-center text-gray600">
              <p className="text-labelLarge">더보기</p>
              <Arrow direction="right" size={16} />
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-2">
            {applicationData.map((value, index) => (
              <ApplicationBox key={index} {...value} />
            ))}
          </div>
        </article>
        <div className="w-full h-[1px] bg-gray200"></div>
        <article className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-titleSmall">공유한 지원서 팁</h5>
            <Link href="#" className="flex items-center text-gray600">
              <p className="text-labelLarge">더보기</p>
              <Arrow direction="right" size={16} />
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-2">
            {tipData.map((value, index) => (
              <TipBox key={index} {...value} />
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
