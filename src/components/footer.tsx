'use client';

import {
    Layout,
    LayoutContent,
    LayoutFooter,
    Card,
    HStack,
} from '@astryxdesign/core/Layout';
import { Button } from '@astryxdesign/core/Button';

export default function Footer() {
    return (
        <Layout
            style={{width: '100%'}}
            height="fill"
            content={
                <LayoutContent>
                    <Card variant="muted" />
                </LayoutContent>
            }
            footer={
                <LayoutFooter hasDivider>
                    <HStack gap={2} hAlign="end">
                        <Button label="Hủy" variant="secondary">
                            Hủy
                        </Button>
                        <Button label="Lưu" variant="primary">
                            Lưu
                        </Button>
                    </HStack>
                </LayoutFooter>
            }
        />
    )
}