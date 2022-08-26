import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop({children}) {
    const location = useLocation()
    const {pathname} = location

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
  return children
}

export default ScrollToTop