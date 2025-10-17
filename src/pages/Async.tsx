import { foreach } from "@pang/core.js"
import { onMount } from "@pang/lifecycle.js"
import { state } from "@pang/reactive.js"

export async function Async() {
    await delay(1000)
    
    onMount(() => {
        console.log("Async mount")
    })
    
    return <div>
        <span>ASYNC</span>
        
        {foreach(100, (i) => (
            <AsyncChild id={i}/>
        ))}
    </div>
}

async function AsyncChild(props: { id: number }) {
    const color = state("#FFFFFF")
    
    console.log("AsyncChild", props.id)
    
    await delay(1000 * Math.random())
    
    onMount(() => {
        console.log("Async child mount", props.id)
        color.value = "#FF0000"
    })
    
    return <div
        style={{ background: color.value }}
    >
        ASYNC CHILD {props.id}
        <Child id={props.id}/>
    </div>
}

async function Child(props: { id: number }) {
    const color = state("#FFFFFF")
    
    await delay(1000 * Math.random())
    
    onMount(() => {
        console.log("Child mount", props.id)
        color.value = "#00FF00"
    })
    
    return <div style={{ background: color.value }}>CHILD {props.id}<GrandChild id={props.id}/> </div>
}

async function GrandChild(props: { id: number }) {
    const color = state("#FFFFFF")
    
    await delay(1000 * Math.random())
    
    onMount(() => {
        console.log("Child mount", props.id)
        color.value = "#0000FF"
    })
    
    return <div style={{ background: color.value }}>GRANDCHILD {props.id}</div>
}

function delay(ms: number) {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}