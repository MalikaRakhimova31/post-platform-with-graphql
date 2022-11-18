import MainButton from 'components/atoms/MainButton'
import InputBar from 'components/atoms/SearchBar'
import { SearchIcon } from 'components/Icons'
import styles from './Organisms.module.scss'
import { useRouter } from 'next/router'
import CustomTabs from 'components/moleculas/CustomTabs'
import {tabLabelName} from '../mock/tabData'
import CustomizedTables from 'components/moleculas/CustomTable'
import { useSelector } from 'react-redux'

export default function Posts() {
    const router = useRouter()
    const labels = ['ID', 'Title', 'Time', 'Status']
    const postData = useSelector(state => state.post.data)
    return (
        <div>
            <div className='flex w-full justify-between align-middle' >
                <InputBar
                    placeholder='Search'
                    value=''
                    onChange={() => {}}
                    icon={<SearchIcon />}
                    name='search'
                />
                <MainButton text='Create Post' handleClick={() => router.push('/create-post')}/>
            </div>
            <CustomTabs tabLabel={tabLabelName} />
        </div>
    )
}