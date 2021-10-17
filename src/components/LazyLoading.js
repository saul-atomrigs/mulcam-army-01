import { lazy } from 'React';

const Counter = lazy(() => import('./Counter'));


const LazyLoading = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Counter />
            </Suspense>
        </div >
    )
}

export default LazyLoading