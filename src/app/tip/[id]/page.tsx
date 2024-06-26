'use client'

import { Delete, More, Pen } from '@/assets'
import { BackButton, TipDeleteModal, TipFixModal } from '@/components'
import { getMe, getTipDetail, getUser } from '@/services'
import { TipBoxType, UserType } from '@/types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Detail({ params }: { params: { id: number } }) {
  const [open, setOpen] = useState<boolean>(false)
  const [fixModal, setFixModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [detailData, setDetailData] = useState<TipBoxType>()
  const [userData, setUserData] = useState<UserType>()
  const [myData, setMyData] = useState<UserType>()
  const route = useRouter()

  const getData = async () => {
    const data: TipBoxType = await getTipDetail(params.id)
    const user: UserType = await getUser(data.writer_id)
    setUserData(user)
    setDetailData(data)
  }

  const MyData = async () => {
    const my = await getMe()
    setMyData(my)
  }

  const DateFormat = () => {
    if (detailData?.created_at) {
      const DateObj = new Date(detailData.created_at)

      const year = String(DateObj.getFullYear())
      let month = String(DateObj.getMonth() + 1)
      let day = String(DateObj.getDate())
      let hour = String(DateObj.getHours())
      let minute = String(DateObj.getMinutes())

      month = Number(month) >= 10 ? month : '0' + month
      day = Number(day) >= 10 ? day : '0' + day
      hour = Number(hour) >= 10 ? hour : '0' + hour
      minute = Number(minute) >= 10 ? minute : '0' + minute
      return year + '.' + month + '.' + day + '.' + ' ' + hour + ':' + minute
    }
  }

  useEffect(() => {
    getData()
    MyData()
  }, [])

  console.log(detailData)

  return (
    <>
      {fixModal && detailData !== undefined && (
        <TipFixModal
          title={detailData.title}
          content={detailData.content}
          id={detailData.id}
          click={setFixModal}
        />
      )}
      {deleteModal && (
        <TipDeleteModal click={setDeleteModal} postId={detailData?.id} />
      )}
      <section className="w-full flex justify-center">
        <article className="flex flex-col w-full max-w-[848px] mt-16 gap-10 px-6">
          <div className="flex justify-between items-center">
            <BackButton />
            {userData?.oauth_id === myData?.oauth_id && (
              <div
                className="cursor-pointer relative"
                onClick={() => setOpen(!open)}
              >
                <More />
                {open && (
                  <div className="absolute top-8 right-1 rounded-xl w-[180px] p-1 border border-gray200 bg-gray50">
                    <button
                      onClick={() => setFixModal(!fixModal)}
                      className="flex items-center text-labelMedium gap-2 p-3 hover:bg-gray100 w-full rounded-lg transition-colors"
                    >
                      <Pen size={16} className="text-gray800" />팁 수정하기
                    </button>
                    <button
                      onClick={() => setDeleteModal(!deleteModal)}
                      className="flex items-center text-labelMedium gap-2 p-3 hover:bg-gray100 w-full rounded-lg transition-colors hover:text-labelLarge hover:text-critical group"
                    >
                      <Delete className="text-gray800 group-hover:text-critical" />
                      팁 삭제하기
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-headlineSmall text-black">
              {detailData?.title}
            </h1>
            <div className="flex items-center gap-2 text-gray600">
              <p
                className="cursor-pointer"
                onClick={() => route.push(`/profile/${detailData?.writer_id}`)}
              >
                {userData?.name}
              </p>
              <p>﹒</p>
              <p>{DateFormat()}</p>
            </div>
          </div>
          <div className="bg-gray200 h-[1px]" />
          <div className="w-[100%] break-words pb-[120px]">
            <span
              className="!text-bodySmall text-gray900"
              dangerouslySetInnerHTML={{
                __html: detailData?.content.replaceAll('\n', '<br />') || '',
              }}
            ></span>
          </div>
        </article>
      </section>
    </>
  )
}
