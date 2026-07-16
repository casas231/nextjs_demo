'use client';

import SearchBar from '@/components/search-bar';

import {
  TopNav,
  TopNavHeading,
  TopNavItem,
  TopNavMenu,
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
                    headingHref="/"
                />
            }
            startContent={
                <>
                    <TopNavMenu
                        label="Danh mục"
                        
                        items={[
                            {
                                title: "PC Gaming Intel",
                                description: "PC hiệu năng cao sử dụng chip Intel",
                                icon: <ComputerDesktopIcon />,
                                href: "intel-pc"
                            },
                            {
                                title: "PC Gaming AMD",
                                description: "PC hiệu năng cao sử dụng chip AMD",
                                icon: <ComputerDesktopIcon />,
                                href: "amd-pc"
                            },
                            {
                                title: "Linh kiện máy tính",
                                description: "Linh kiện PC giá tốt nhất",
                                icon: <CpuChipIcon />,
                                href: "linh-kien"
                            },
                            { 
                                title: "Gaming Gear",
                                description: "Nâng cao trải nghiệm chơi game",
                                icon: <SquaresPlusIcon />,
                                href: "gaming-gear"
                            },
                            {
                                title: "Màn hình máy tính",
                                description: "Màn hình máy tính tần số quét cao",
                                icon: <ViewColumnsIcon />,
                                href: "man-hinh"
                            },
                        ]}
                    />
                    <TopNavItem label="Giới thiệu" href="gioi-thieu" />
                    <TopNavItem label="Liên hệ" href="lien-he" />
                </>
            }
            endContent={
                <>
                    <SearchBar />
                    <Button label="Giỏ hàng" variant="ghost" href="gio-hang" />
                    <Button label="Đăng nhập" variant="primary" href="dang-nhap" />
                </>
            }
        />
    )
}