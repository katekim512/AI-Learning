import { useEffect } from 'react'

function useLockBodyScroll(props: boolean) {
  useEffect(() => {
    document.body.style.overflow = props ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [props])
}

export default useLockBodyScroll
