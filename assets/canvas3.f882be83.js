import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{P as b}from"./vendor.6c0cdefa.js";import{M as P,c as T,s as x}from"./sketch2.9468b602.js";const A=m=>{const t=document.createElement("div");t.className="audioController";const n=document.createElement("h3");n.textContent="Audio Controller";const e=document.createElement("button");e.textContent="Play",e.className="audioPlayButton";const c=document.createElement("button");c.textContent="Stop",c.className="audioStopButton";const i=document.createElement("button");i.textContent="+",i.className="audioGainPlusButton";const l=document.createElement("button");l.textContent="-",l.className="audioGainMinusButton",m.appendChild(t),t.appendChild(n),t.appendChild(e),t.appendChild(c),t.appendChild(i),t.appendChild(l)};var H="../../assets/beat.1ed1a389.wav";const k=m=>{let t=!1,n,e;const c=async o=>{const r=await(await fetch(H)).arrayBuffer();return await o.decodeAudioData(r)},i=(o,s,r)=>{n=o.createBufferSource(),n.buffer=s,n.connect(e).connect(r).connect(o.destination),n.start(),t=!0};(()=>{const o=document.querySelector(".audioPlayButton");if(!(o instanceof HTMLButtonElement))throw new Error("Error");o.addEventListener("click",async()=>{const a=new AudioContext,u=a.createAnalyser();u.fftSize=2048;const w=u.frequencyBinCount,d=new Uint8Array(w);if(u.getByteTimeDomainData(d),e=a.createGain(),t===!0)return;const v=await c(a);i(a,v,u);const y=document.querySelector(".p5Canvas");if(!(y instanceof HTMLCanvasElement))throw new Error("Error");let C=T*.5,p=0;const E=()=>{u.getByteTimeDomainData(d),[...Array(d.length).keys()].forEach(S=>{const B=d[S]/128*1,g=Math.abs(Math.cos(p*.005)*window.innerWidth*.5),M=window.innerHeight*.5-C,L=P.degTorad(p*.5);y.style.transform=`translate(${g}px, ${M}px) rotate(${L}rad) scale(${B}, ${B})`}),p=requestAnimationFrame(E)};E()});const s=document.querySelector(".audioStopButton");if(!(s instanceof HTMLButtonElement))throw new Error("Error");s.addEventListener("click",async()=>{const a=document.querySelector("main");if(!(a instanceof HTMLElement))throw new Error("Error");m.removeChild(a),n.stop(),t=!1});const r=document.querySelector(".audioGainPlusButton");if(!(r instanceof HTMLButtonElement))throw new Error("Error");r.addEventListener("click",()=>{e.gain.value<1&&(e.gain.value+=.05)});const f=document.querySelector(".audioGainMinusButton");if(!(f instanceof HTMLButtonElement))throw new Error("Error");f.addEventListener("click",()=>{e.gain.value>.05&&(e.gain.value-=.05)})})()},h=document.body;window.addEventListener("load",()=>{A(h),new b(x),k(h)});
