import Image from "next/image"
import Link from "next/link"

const Menu = () => {
    const menuItem = [
        {
            title: "メニュー",
            items: [
                {
                    icon: "/calendar.png",
                    label: "イベント配信",
                    href: "/calendar"
                },
                {
                    icon: "/pictures.png",
                    label: "メディア配信",
                    href: "/media"
                },
                {
                    icon: "/clock.png",
                    label: "スケジュール設定",
                    href: "/schedule"
                },
                {
                    icon: "/pc.png",
                    label: "デバイス設定",
                    href: "/devide"
                },
                {
                    icon: "/people.png",
                    label: "ユーザー設定",
                    href: "/users"
                },
                {
                    icon: "/gear.png",
                    label: "その他の設定",
                    href: "/settings"
                },
                {
                    icon: "/question.png",
                    label: "サポート",
                    href: "/support"
                },
            ]
        },
        {
            title: "その他",
            items: [
                {
                    icon: "/profile.png",
                    label: "プロファイル",
                    href: "/profile"
                },
                {
                    icon: "/setting.png",
                    label: "設定",
                    href: "/settings"
                },
                {
                    icon: "/signout.png",
                    label: "サインアウト",
                    href: "/signout"
                },
            ]
        },
    ]
  return (
    <div className='mt-4 text-sm'>
        {menuItem.map(i=>(
            <div className='flex flex-col gap-2' key={i.title}>
                <span className='hidden lg:block text-gray-400 font-light my-4'>{i.title}</span>
                {i.items.map(item=>(
                    <Link href={item.href} key={item.label} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 hover:bg-gray-800 hover:text-white rounded-md'>
                        <Image src={item.icon} alt="" width={32} height={32} />
                        <span className='hidden lg:block'>{item.label}</span>
                    </Link>
                ))}
            </div>
        ))}
        <span>

        </span>
    </div>
  )
}

export default Menu