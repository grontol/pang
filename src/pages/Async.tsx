import { foreach } from "@pang/core.js"

export async function Async() {
    await delay(1000)
    
    return <div>
        <span>ASYNC</span>
        {foreach(10, i => (
            <div>{i}</div>
        ))}
        <AsyncChild/>
    </div>
}

async function AsyncChild() {
    await delay(1000)
    
    return <div>
        ASYNC CHILD
    </div>
}

function delay(ms: number) {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}