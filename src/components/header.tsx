'use client';

import SearchBar from '@/components/search-bar';

import {
  TopNav,
  TopNavHeading,
  TopNavItem,
  TopNavMegaMenu,
  TopNavMegaMenuItem,
  TopNavMegaMenuFeaturedCard,
} from '@astryxdesign/core/TopNav';
import {NavIcon} from '@astryxdesign/core/NavIcon';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {
  CpuChipIcon,
  ComputerDesktopIcon,
  SquaresPlusIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline';


export default function Header() {
    return (
        <TopNav
            label="T1Computer"
            heading={
            <TopNavHeading
                heading="T1Computer"
                logo={<NavIcon icon={<Icon icon={CpuChipIcon} size="lg" />} />}
                headingHref="#"
            />
            }
            startContent={
            <>
                <TopNavItem label="Giới thiệu" href="#introduce" />
                <TopNavMegaMenu
                label="Danh mục"
                items={
                    <>
                    <TopNavMegaMenuItem
                        title="PC Gaming Intel"
                        description="PC hiệu năng cao sử dụng chip Intel"
                        icon={<ComputerDesktopIcon />}
                        href="#intel-pc"
                    />
                    <TopNavMegaMenuItem
                        title="PC Gaming AMD"
                        description="PC hiệu năng cao sử dụng chip AMD"
                        icon={<ComputerDesktopIcon />}
                        href="#amd-pc"
                    />
                    <TopNavMegaMenuItem
                        title="Linh kiện máy tính"
                        description="Linh kiện PC giá tốt nhất"
                        icon={<CpuChipIcon />}
                        href="#linh-kien"
                    />
                    <TopNavMegaMenuItem
                        title="Chuột, bàn phím, tai nghe"
                        description="Nâng cao trải nghiệm chơi game"
                        icon={<SquaresPlusIcon />}
                        href="#chuot-ban-phim-tai-nghe"
                    />
                    <TopNavMegaMenuItem
                        title="Màn hình"
                        description="Màn hình tần số quét cao"
                        icon={<ViewColumnsIcon />}
                        href="#man-hinh"
                    />
                    </>
                }
                featured={
                    <TopNavMegaMenuFeaturedCard
                    title="Sale PC chào mừng năm học mới"
                    description="Sale lên đến 50% cho một số sản phẩm."
                    image="https://ttgshop.vn/media/banner/ttg-khuyen-mai-hs-sv.jpg"
                    imageAlt="Sale banner"
                    linkLabel="Đọc thông báo"
                    linkHref="#announcement"
                    />
                }
                />
                <TopNavItem label="Liên hệ" href="#contact" />
            </>
            }
            endContent={
            <>
                <SearchBar />
                <Button label="Giỏ hàng" variant="ghost" />
                <Button label="Đăng nhập" variant="primary" />
            </>
            }
        />
    )
}