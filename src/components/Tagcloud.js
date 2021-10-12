import { TagCloud } from 'react-tagcloud'

const data = [
    { value: 'song', count: 40 },
    { value: 'dance', count: 30 },
    { value: 'visual', count: 28 },
    { value: 'pretty', count: 25 },
    { value: 'like', count: 33 },
    { value: 'fantastic', count: 18 },
    { value: 'love', count: 20 },
    { value: 'kpop', count: 9 },
    { value: 'choreo', count: 8 },
    { value: 'concept', count: 11 },
    { value: 'love', count: 20 },
    { value: 'perfect', count: 12 },
    { value: 'comeback', count: 8 },
    { value: 'happy', count: 4 },

]

const SimpleTagcloud = () => {
    return (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => alert(`'${tag.value}'을 클릭하셨습니다!`)} />
    )
}

export default SimpleTagcloud