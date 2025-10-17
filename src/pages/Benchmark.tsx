import { state } from "@pang/reactive.js";
import { foreach } from "@pang/core.js";

export function Benchmark() {
    return Mount()
}

export function ReactivePropagation() {
    const observer = new MutationObserver(m => {
        console.log("Mutations", m.length)
    })
    
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })
    
    const items = Array.from({ length: 10000 }, () => state(0));

    const updateAll = () => {
        const start = performance.now();
        for (const item of items) item.value += 1;
        
        setTimeout(() => {
            queueMicrotask(() => {
                console.log("Update latency:", performance.now() - start, "ms");
            });
        })
    };

    return (
        <div>
            <button onclick={updateAll}>Update All</button>
            
            {foreach(items, count => (
                <span>{count.value}</span>
            ))}            
        </div>
    );
}


export function FanOut() {
    const observer = new MutationObserver(m => {
        console.log("Mutations", m.length)
    })
    
    observer.observe(document.body, { childList: true, subtree: true, characterData: true })
    
    const item = state(0)
    
    function update() {
        const start = performance.now();
        
        item.value += 1
        
        setTimeout(() => {
            queueMicrotask(() => {
                console.log("Update latency:", performance.now() - start, "ms");
            });
        })
    }
    
    return <div>
        <button onclick={update}>Update</button>
        
        {foreach(10000, () => (
            <span>{item.value}</span>
        ))} 
    </div>
}

export function Mount() {
    const items = state<number[]>([]);

    const mount = () => {
        const start = performance.now();
        const arr = Array.from({ length: 5000 }, (_, i) => i);
        items.value = arr
        
        setTimeout(() => {
            queueMicrotask(() => {
                console.log("Mount latency:", performance.now() - start, "ms");
            });
        })
    };

    const unmount = () => {
        const start = performance.now();
        items.value = []
        
        setTimeout(() => {
            queueMicrotask(() => {
                console.log("Unmount latency:", performance.now() - start, "ms");
            });
        })
    };

    return (
        <>
            <button onclick={mount}>Mount 5000 items</button>
            <button onclick={unmount}>Unmount</button>
            <div>
                {foreach(items, i => (
                    <span>{i} </span>
                ))}
            </div>
        </>
    );
}

/*

Solid:
Mount latency: 72.60000000149012 ms
Unmount latency: 41.900000002235174 ms
Mount latency: 66.69999999925494 ms
Unmount latency: 39.70000000298023 ms
Mount latency: 57 ms
Unmount latency: 39.400000002235174 ms
Mount latency: 26.200000002980232 ms
Unmount latency: 41.099999997764826 ms
Mount latency: 50.400000002235174 ms
Unmount latency: 40.099999997764826 ms
Mount latency: 57.399999998509884 ms
Unmount latency: 39.5 ms
Mount latency: 49.79999999701977 ms
Unmount latency: 39.600000001490116 ms
Mount latency: 65.30000000074506 ms
Unmount latency: 38.5 ms
Mount latency: 54.400000002235174 ms
Unmount latency: 39.900000002235174 ms
Mount latency: 66.5 ms
Unmount latency: 40.5 ms

Pang:
Mount latency: 98.20000000298023 ms
Unmount latency: 259.1000000014901 ms
Mount latency: 67.10000000149012 ms
Unmount latency: 325.30000000074506 ms
Mount latency: 67.5 ms
Unmount latency: 353.5 ms
Mount latency: 57.30000000074506 ms
Unmount latency: 328.80000000074506 ms
Mount latency: 63.100000001490116 ms
Unmount latency: 333 ms
Mount latency: 57.80000000074506 ms
Unmount latency: 330 ms
Mount latency: 58.600000001490116 ms
Unmount latency: 334.1000000014901 ms
Mount latency: 57.19999999925494 ms
Unmount latency: 332.0999999977648 ms
Mount latency: 57.29999999701977 ms
Unmount latency: 329 ms
Mount latency: 57.099999997764826 ms
Unmount latency: 336.80000000074506 ms
Mount latency: 156 ms
Unmount latency: 339.9000000022352 ms

Nama                : Saiful Anwar
Tempat/Tgl Lahir    : Demak, 15-07-91
Jenis Kelamin       : Laki-laki
Alamat              : Kepitu
    RT/RW           : 002 / 005
    Kel/Desa        : Kunir
    Kecamatan       : Demept
Agama               : Islam
Status Perkawinan   : Belum Kawin
Pekerjaan           : Wiraswasta
Kewarganegaraan     : WNI

*/