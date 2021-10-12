import { TagCloud } from 'react-tagcloud'

const data = [
    { value: 'song', count: 38 },
    { value: 'dance', count: 30 },
    { value: 'visual', count: 28 },
    { value: 'pretty', count: 25 },
    { value: 'like', count: 33 },
    { value: 'fantastic', count: 18 },
    { value: 'love', count: 20 },
    { value: 'kpop', count: 20 },
    { value: 'choreo', count: 20 },
    { value: 'concept', count: 20 },

]

const SimpleTagcloud = () => {
    return (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => alert(`'${tag.value}' was selected!`)} />
    )
}

export default SimpleTagcloud