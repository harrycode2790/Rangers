
import { useState, useEffect } from "react"
const useScript = (src, {cleanup = false, appendTo = 'body'} = {}) => {
    // create your loaded state variable 
    const [loaded , setloaded] = useState(false)

    useEffect(() => {
        // if there is no src 
        if(!src){
            return
        }

        let script = document.querySelector(`script[src="${src}"]`)
        let shouldAppend = false

        // create a new script when the when is no other script 
        if(!script){
            script = document.createElement('script')
            script.src = src
            script.async = true
            // eslint-disable-next-line no-unused-vars
            shouldAppend = true

        }else if (script.hasAttribute('data-loaded')){
            setloaded(true)
            return
        } 

        const onScriptLoad = () => {
            script.setAttribute('data-loaded', true)
            setloaded(true)

        }

        const onScriptError = () => {
            if(cleanup) {
                script.remove()
            }
            setloaded(false)

        }

        script.addEventListener('load', onScriptLoad)
        script.addEventListener('error', onScriptError)

        // now append the element tag to head or body
        if(shouldAppend){
            document[appendTo === 'body' ? 'body' : 'head'].appendChild(script)
        }

        return () => {
            if(cleanup){
                script.removeEventListener('load', onScriptLoad)
                script.removeEventListener('error', onScriptError)
                script.remove()
            }
        }

    },[src, cleanup, appendTo])

    return loaded
}

export default useScript