'use client';
​
import {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Stack} from '@astryxdesign/core/Layout';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
​
​
export default function SearchBar() {
    const [query, setQuery] = useState('');
​
    return (
        <div style={{width: '100%'}}>
            <Stack direction="horizontal" gap={3}>
                <TextInput
                    label=""
                    value={query}
                    onChange={setQuery}
                    placeholder="Tìm kiếm…"
                    startIcon={MagnifyingGlassIcon}
                    hasClear
                    isLabelHidden
                />
                <Button
                    label="Search"
                    variant="primary"
                    icon={<Icon icon="search" color="inherit" />}
                    isIconOnly
                />
            </Stack> 
        </div>
    );
}