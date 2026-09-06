import { createHash } from "node:crypto";
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const REGISTRY_BEFORE = 'const wDn=[{id:"general",label:"General",icon:"settings-gear"},{id:"usage",label:"Usage & Billing",icon:"chart-bars"},{id:"beta",label:"Updates",icon:"cloud-download"}]';
const REGISTRY_AFTER = 'const wDn=[{id:"general",label:"General",icon:"settings-gear"},{id:"router",label:"Router",icon:"git-branch"},{id:"usage",label:"Usage & Billing",icon:"chart-bars"},{id:"beta",label:"Updates",icon:"cloud-download"}]';
const GENERAL_BEFORE = 'Q=x==="general"?a.jsx(Te,{children:a.jsx(Sa,{auth:t})}):null';
const GENERAL_AFTER = 'Q=x==="general"?a.jsx(Te,{children:a.jsx(Sa,{auth:t})}):x==="router"?a.jsx(RRouterPanel,{}):null';
const USAGE_BEFORE = 'Z=x==="usage"?a.jsx(Te,{children:a.jsx(Na,{})}):null';
const USAGE_AFTER = 'Z=x==="usage"?a.jsx(Te,{children:a.jsx(RRouterUsage,{})}):null';
const COMPONENT_ANCHOR = 'function Sa(s){';
const COMPONENT_SOURCE = String.raw`
const RRouterProviders=[
  {value:"cursor",label:"Cursor",description:"Use your signed-in Cursor account.",kind:"account"},
  {value:"claude-code",label:"Claude Code",description:"Use your existing Claude Code sign-in and Grok Bot's connected plugins.",kind:"local",localKey:"claude-code"},
  {value:"codex",label:"Codex",description:"Use your existing ChatGPT sign-in from Codex with Grok Bot's connected plugins.",kind:"local",localKey:"codex"},
  {value:"openrouter",label:"OpenRouter",description:"Route through your OpenRouter account and selected model.",kind:"key",secret:"OPENROUTER_API_KEY"},
  {value:"proxy-gateway",label:"OpenAI-compatible / Proxy Gateway",description:"Route through local Proxy Gateway at 127.0.0.1:20128 or another reviewed OpenAI-compatible endpoint.",kind:"proxy"}
],RRouterOptions=RRouterProviders.map(s=>({value:s.value,label:s.label})),RRouterEmptyUsage={requests:0,inputTokens:0,outputTokens:0,cacheReadTokens:0,cacheWriteTokens:0,lastUsedAt:null},RRouterInputClass="sand-9f619 sand-h8yej3 sand-5f5z56 sand-u97haq sand-lrnmfh sand-uve7l6 sand-16b7oty sand-1rgtt3y sand-o7x2bt sand-mkeg23 sand-1y0btm7 sand-qz0629 sand-1043rbw sand-13l7odt sand-1wd3ewq sand-jb2p0i sand-4z9k3i sand-frs9s4 sand-tt52l0 sand-1odjw0f sand-1t137rt sand-ltfok3";
async function RRouterRefreshLocalWorkspace(){try{await window.desktop.forceGatewayReconnect()}catch{}window.dispatchEvent(new Event("sand-local-workspace-changed"))}
function RRouterState(){
  const[s,e]=de.useState({provider:"cursor",usage:null,local:null,error:null});
  de.useEffect(()=>{let t=!0;const n=r=>{t&&e(r.detail)};window.addEventListener("sand-router-provider-changed",n);window.desktop.agent.getInferenceRouter().then(r=>{t&&e({...r,error:null})}).catch(r=>{t&&e(i=>({...i,error:String(r?.message??r)}))});return()=>{t=!1;window.removeEventListener("sand-router-provider-changed",n)}},[]);
  const t=async n=>{const r=s;e(i=>({...i,provider:n,error:null}));try{const i=await window.desktop.agent.setInferenceRouter(n),o={...i,error:null};e(o);window.dispatchEvent(new CustomEvent("sand-router-provider-changed",{detail:o}));await RRouterRefreshLocalWorkspace()}catch(i){e({...r,error:String(i?.message??i)})}};
  return[s,t]
}
function RRouterSecrets(){const[s,e]=de.useState([]),[t,n]=de.useState(0);de.useEffect(()=>{let r=!0;window.desktop.secrets.list().then(i=>{r&&e(Array.isArray(i?.keys)?i.keys:[])});return()=>{r=!1}},[t]);return[s,()=>n(r=>r+1)]}
function RRouterNumber(s){return new Intl.NumberFormat().format(s)}
function RRouterOrigin(s){try{return new URL(s.trim()).origin}catch{return null}}
function RRouterCredential({provider:s,state:e,keys:t,onSaved:n}){const[r,i]=de.useState(""),[o,l]=de.useState(!1);if(s.kind==="account")return a.jsx(se,{as:"span",color:"secondary",size:"sm",children:"Signed in"});if(s.kind==="local"){const c=e.local?.[s.localKey],d=c?.installed&&c?.authenticated;return a.jsx(se,{as:"span",color:d?"primary":"secondary",size:"sm",children:d?"Ready":c?.installed?"Sign in with "+(s.value==="codex"?"codex login":"claude"):"Not installed"})}const c=t.includes(s.secret),d=async()=>{if(r.trim().length===0)return;l(!0);try{await window.desktop.secrets.upsert({[s.secret]:r.trim()}),i(""),n()}finally{l(!1)}};return a.jsxs("div",{className:"sand-9f619 sand-78zum5 sand-6s0dn4 sand-h8yej3",style:{width:360},children:[a.jsx("input",{"aria-label":s.secret,className:RRouterInputClass,disabled:o,onChange:u=>i(u.currentTarget.value),placeholder:c?"Replace saved key":"Paste API key",style:{fontSize:13,height:34,minWidth:0,padding:"0 10px",width:270},type:"password",value:r}),a.jsx(oe,{disabled:o||r.trim().length===0,onClick:d,shape:"rectangular",size:"sm",variant:"secondary",children:o?"Saving…":"Save"})]})}
function RRouterProxyGateway(){
  const[s,e]=de.useState(null),[t,n]=de.useState(""),[r,i]=de.useState(""),[o,l]=de.useState("chat-completions"),[c,d]=de.useState(""),[m,h]=de.useState(!1),q=de.useRef(""),z=de.useRef(null),E=de.useRef(""),V=de.useRef(0),R=()=>{V.current+=1;q.current="";z.current=null;d("")},g=v=>{e(v);if(q.current.trim()&&(z.current===null||RRouterOrigin(v.baseUrl)!==z.current))R();E.current=v.baseUrl;n(v.baseUrl);i(v.model);l(v.protocol)};
  de.useEffect(()=>{let v=!0;window.desktop.proxyGateway.status().then(y=>{v&&g(y)});return()=>{v=!1}},[]);
  const f=async()=>{const v=V.current,y=z.current,A=()=>{if(V.current!==v||z.current!==y)return;R()};h(!0);try{g(await window.desktop.proxyGateway.save({baseUrl:t,model:r,protocol:o,allowRemoteHttps:!1,allowTailscaleHttp:!1,...(c.trim()?{apiKey:c}:{})},A));await RRouterRefreshLocalWorkspace()}finally{h(!1)}},b=async()=>{h(!0);try{g(await window.desktop.proxyGateway.remove());R();await RRouterRefreshLocalWorkspace()}finally{h(!1)}},w=async()=>{h(!0);try{g(await window.desktop.proxyGateway.status({testConnection:!0}))}finally{h(!1)}};
  return a.jsx(re,{title:"Proxy Gateway connection",children:a.jsxs("div",{className:"sand-provider-usage-card",style:{display:"grid",gap:10},children:[
    a.jsxs("label",{children:[a.jsx("strong",{children:"Base URL"}),a.jsx("input",{"aria-label":"Proxy Gateway Base URL",className:RRouterInputClass,disabled:m,onChange:v=>{const y=v.currentTarget.value;if(q.current.trim()&&(z.current===null||RRouterOrigin(y)!==z.current))R();E.current=y;n(y)},spellCheck:!1,type:"url",value:t}),a.jsx("small",{children:"Any HTTP(S) OpenAI-compatible endpoint is accepted, including custom path prefixes. If the path is omitted, /v1 is appended."})]}),
    a.jsxs("label",{children:[a.jsx("strong",{children:"Model ID"}),a.jsx("input",{"aria-label":"Proxy Gateway model",className:RRouterInputClass,disabled:m,list:"sand-proxy-gateway-models",onChange:v=>i(v.currentTarget.value),placeholder:"provider/model-id",spellCheck:!1,value:r}),a.jsx("datalist",{id:"sand-proxy-gateway-models",children:s?.probe?.models?.map(v=>a.jsx("option",{value:v},v))}),a.jsx("small",{children:"If unknown, save the key first, run Test & load models, choose one, then save again. Manual entry stays available when /v1/models omits a model."})]}),
    a.jsxs("label",{children:[a.jsx("strong",{children:"API key"}),a.jsx("input",{"aria-label":"Proxy Gateway API key",autoComplete:"new-password",className:RRouterInputClass,disabled:m,onChange:v=>{const y=v.currentTarget.value;V.current+=1;q.current=y;z.current=y.trim()?RRouterOrigin(E.current):null;d(y)},placeholder:s?.configured?"Saved key (enter to replace)":"Proxy API key",type:"password",value:c}),a.jsx("small",{children:s?.configured?"A required proxy/client API key is saved. Leave this blank to keep it.":"Required. Use the Proxy Gateway proxy/client API key, not the management key."})]}),
    a.jsxs("label",{children:[a.jsx("strong",{children:"Protocol"}),a.jsxs("select",{"aria-label":"Proxy Gateway protocol",className:RRouterInputClass,disabled:m,onChange:v=>l(v.currentTarget.value),value:o,children:[a.jsx("option",{value:"chat-completions",children:"Chat Completions (full tools)"}),a.jsx("option",{value:"responses",children:"Responses (not for Local Docker)"}),a.jsx("option",{value:"auto",children:"Auto (Chat first)"})]}),a.jsx("small",{children:"Use Chat Completions or Auto for the full Local Docker tool loop; explicit Responses is blocked for native-agent turns."})]}),
    a.jsx("small",{children:"Use the current stable Proxy Gateway release (v0.5.35 when reviewed); older builds have known authorization bypasses. Local Docker enables built-in agent, shell, file, browser, and computer tools; account-bound cloud features remain unavailable without sign-in."}),
    a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[a.jsx(oe,{disabled:m||!s?.configured,onClick:b,shape:"rectangular",size:"sm",variant:"secondary",children:"Delete credential"}),a.jsx(oe,{disabled:m||!s?.configured,onClick:w,shape:"rectangular",size:"sm",variant:"secondary",children:"Test & load models"}),a.jsx(oe,{disabled:m||!t.trim()||(!s?.configured&&!c.trim()),onClick:f,shape:"rectangular",size:"sm",variant:"primary",children:m?"Saving…":"Save Proxy Gateway"})]}),
    a.jsx("small",{children:s==null?"Loading status…":s.configured?s.isPersistent?"Credential is encrypted by the operating system.":"Credential is held for this session only.":"Not configured."}),s?.probe?a.jsx("small",{children:s.probe.message+" ("+s.probe.latencyMs+" ms)"}):null
  ]})})
}
function RRouterUsageRows({usage:s}){return a.jsxs("div",{children:[a.jsx(ie,{label:"Requests",variant:"card",children:a.jsx(se,{as:"span",color:"secondary",size:"sm",children:RRouterNumber(s.requests)})}),a.jsx(ie,{divided:!0,label:"Input tokens",variant:"card",children:a.jsx(se,{as:"span",color:"secondary",size:"sm",children:RRouterNumber(s.inputTokens)})}),a.jsx(ie,{divided:!0,label:"Output tokens",variant:"card",children:a.jsx(se,{as:"span",color:"secondary",size:"sm",children:RRouterNumber(s.outputTokens)})}),a.jsx(ie,{divided:!0,label:"Cache tokens",variant:"card",children:a.jsx(se,{as:"span",color:"secondary",size:"sm",children:RRouterNumber(s.cacheReadTokens+s.cacheWriteTokens)})}),a.jsx(ie,{divided:!0,label:"Last used",variant:"card",children:a.jsx(se,{as:"span",color:"secondary",size:"sm",children:s.lastUsedAt?new Date(s.lastUsedAt).toLocaleString():"Not used yet"})})]})}
function RBoxRuntime(){const[s,e]=de.useState({mode:"remote",status:null,error:null,busy:!0});de.useEffect(()=>{let t=!0;window.desktop.agent.getBoxRuntime().then(n=>{t&&e({...n,error:null,busy:!1})}).catch(n=>{t&&e(r=>({...r,error:String(n?.message??n),busy:!1}))});return()=>{t=!1}},[]);const g=s.status?.detail,detail=s.mode==="remote"?"Run shell, computer use and files in the always-on sandbox managed by Grok Bot.":s.mode==="local-docker"?(g??"Shell, files and computer use run in a local Docker container."):(g??"SSH into an always-on remote Linux sandbox and tunnel its gateway to localhost:1340."),w=v=>{if(v===s.mode)return;e(i=>({...i,mode:v,busy:!0,error:null}));window.desktop.agent.setBoxRuntime(v).then(i=>{e({...i,error:null,busy:!1});RRouterRefreshLocalWorkspace()}).catch(i=>{e(o=>({...o,error:String(i?.message??i),busy:!1}))})},refresh=()=>window.desktop.agent.getBoxRuntime().then(n=>e({...n,error:null,busy:!1})).catch(n=>e(i=>({...i,error:String(n?.message??n),busy:!1}))),modes=[["remote","Cloud VM"],["local-docker","Local Docker"],["sandbox-computer","Sandbox Computer"]];return a.jsxs("div",{children:[a.jsx("div",{"aria-label":"Computer runtime",role:"radiogroup",style:{display:"flex",flexWrap:"wrap",gap:6},children:modes.map(v=>a.jsx("button",{"aria-checked":s.mode===v[0],disabled:s.busy,onClick:()=>w(v[0]),role:"radio",style:{appearance:"none",background:s.mode===v[0]?"var(--color-accent-primary, #4f8cff)":"rgba(255,255,255,.14)",border:0,borderRadius:8,color:s.mode===v[0]?"#fff":"inherit",cursor:s.busy?"wait":"pointer",fontSize:12,fontWeight:s.mode===v[0]?600:400,opacity:s.busy?0.65:1,padding:"6px 12px",transition:"background .15s ease"},type:"button",children:v[1]},v[0]))}),a.jsx("p",{style:{fontSize:12,margin:"8px 0 0"},children:detail}),s.mode==="sandbox-computer"?a.jsx(RSandboxConfig,{onSaved:refresh}):null,s.error?a.jsx(se,{as:"p",color:"red",size:"sm",children:s.error}):null]})}
function RSandboxConfig({onSaved:t}){const[s,e]=de.useState(null),[o,l]=de.useState(!1),[r,i]=de.useState("");de.useEffect(()=>{let m=!0;window.desktop.agent.getSandboxComputerConfig().then(v=>{m&&e(v)}).catch(()=>{});return()=>{m=!1}},[]);const f=v=>{i(v)},onf=[["host","Host",RRouterInputClass,220],["port","Port",RRouterInputClass,60],["user","SSH user",RRouterInputClass,140],["sshKey","SSH private key path",RRouterInputClass,300]];return a.jsxs("div",{children:[a.jsx("div",{style:{display:"grid",gap:8,marginTop:10},children:onf.map(([k,lab,cls,wd])=>a.jsx(oe,{key:k,variant:"card",label:lab,children:a.jsx("input",{"aria-label":lab,className:cls,disabled:o,onChange:u=>e(p=>p==null?p:k==="port"?{...p,port:Number(u.currentTarget.value)||22}:{...p,[k]:u.currentTarget.value})},style:{fontSize:13,height:34,minWidth:0,padding:"0 10px",width:wd},type:k==="port"?"number":"text",value:k==="port"?String(s?.port??22):(s?.[k]??"")})},k))}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",justifyContent:"flex-end"},children:[a.jsx(oe,{disabled:o||!s?.host?.trim(),onClick:async()=>{l(!0);const vals={host:s?.host??"",port:s?.port??22,user:s?.user??"",sshKey:s?.sshKey??""};try{await window.desktop.agent.setSandboxComputerConfig(vals);await window.desktop.agent.setBoxRuntime("sandbox-computer")}catch(err){f(err?.message??String(err))}finally{i("");l(!1);t&&t()}},shape:"rectangular",size:"sm",variant:"primary",children:o?"Connecting…":"Save & connect"}),r?a.jsx(se,{as:"span",color:"red",size:"sm",children:r}):null]})]})}
function RRouterPanel(){const[s,e]=RRouterState(),[t,n]=RRouterSecrets(),r=RRouterProviders.find(i=>i.value===s.provider)??RRouterProviders[0],i=s.usage?.providers?.[s.provider]??RRouterEmptyUsage,o=r.value==="codex"?"Uses the private ChatGPT login already stored by Codex on this Mac. Requests are made by Grok Bot directly.":r.kind==="local"?"Uses Claude Code's existing login on this Mac.":r.kind==="key"?"Stored securely with your other Grok Bot secrets.":"Uses the account already connected to Grok Bot.";return a.jsx(Te,{children:a.jsxs("div",{className:k("sand-settings-general","sand-9f619 sand-78zum5 sand-dt5ytf sand-3qzy4x"),children:[a.jsx(re,{title:"Routing",children:a.jsx(ie,{description:r.description,label:"Provider",variant:"card",children:a.jsx(ye,{"aria-label":"Routing provider",onValueChange:l=>{if(l!==null)void e(l)},options:RRouterOptions,placement:"bottom-end",size:"lg",value:s.provider,variant:"filled"})})}),a.jsx(re,{title:"Computer",children:a.jsx(RBoxRuntime,{})}),r.kind==="proxy"?a.jsx(RRouterProxyGateway,{}):a.jsx(re,{title:r.kind==="key"?"OpenRouter account":"Account",children:a.jsx(ie,{description:o,label:r.kind==="key"?"API key":"Status",variant:"card",children:a.jsx(RRouterCredential,{provider:r,state:s,keys:t,onSaved:n})})}),s.error?a.jsx(se,{as:"p",color:"red",size:"sm",children:s.error}):null,a.jsx(re,{title:"Usage for "+r.label,children:a.jsx(RRouterUsageRows,{usage:i})})]})})}
function RRouterUsageSummary({provider:s,usage:e,current:t,divided:n}){const r=[RRouterNumber(e.requests)+" requests",RRouterNumber(e.inputTokens)+" input",RRouterNumber(e.outputTokens)+" output",RRouterNumber(e.cacheReadTokens+e.cacheWriteTokens)+" cached"].join(" · "),i=t?"Current route":e.lastUsedAt?new Date(e.lastUsedAt).toLocaleString():"Not used yet";return a.jsx(ie,{divided:n,description:r,label:s.label,variant:"card",children:a.jsx(se,{as:"span",color:t?"primary":"secondary",size:"sm",children:i})})}
function RRouterUsage(){const[s]=RRouterState(),e=RRouterProviders.find(t=>t.value===s.provider)??RRouterProviders[0],t=RRouterProviders.filter(n=>n.value===s.provider||(s.usage?.providers?.[n.value]?.requests??0)>0);return a.jsxs("div",{className:k("sand-usage-section","sand-9f619 sand-78zum5 sand-dt5ytf sand-ou54vl"),children:[a.jsx(re,{title:"Current provider",children:a.jsx(ie,{description:e.description,label:e.label,variant:"card",children:a.jsx(se,{as:"span",color:"secondary",size:"sm",children:"Selected"})})}),a.jsx(re,{title:"Tracked activity",children:a.jsx("div",{children:t.map((n,r)=>a.jsx(RRouterUsageSummary,{provider:n,usage:s.usage?.providers?.[n.value]??RRouterEmptyUsage,current:n.value===s.provider,divided:r>0},n.value))})}),s.provider==="cursor"?a.jsx(Na,{}):null]})}
`;

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function replaceExactlyOnce(source, before, after, label) {
  const first = source.indexOf(before);
  if (first < 0 || source.indexOf(before, first + 1) >= 0) throw new Error(`Original renderer ${label} anchor is missing or ambiguous.`);
  return source.slice(0, first) + after + source.slice(first + before.length);
}

export function patchOriginalSettingsRegistry(source) {
  return replaceExactlyOnce(source, REGISTRY_BEFORE, REGISTRY_AFTER, "settings registry");
}

export function patchOriginalSettingsPanel(source) {
  let patched = replaceExactlyOnce(source, COMPONENT_ANCHOR, `${COMPONENT_SOURCE}${COMPONENT_ANCHOR}`, "component insertion");
  patched = replaceExactlyOnce(patched, GENERAL_BEFORE, GENERAL_AFTER, "Router panel switch");
  patched = replaceExactlyOnce(patched, USAGE_BEFORE, USAGE_AFTER, "Usage panel switch");
  return patched;
}

export async function applyOriginalRendererRouterPatch({ stageRoot }) {
  const assetsRoot = path.join(stageRoot, "dist", "renderer", "assets");
  const registryCandidates = [];
  const panelCandidates = [];
  for (const name of await readdir(assetsRoot)) {
    if (!name.endsWith(".js")) continue;
    const target = path.join(assetsRoot, name);
    const source = await readFile(target, "utf8");
    if (source.includes(REGISTRY_BEFORE)) registryCandidates.push({ name, target, source });
    if (source.includes(COMPONENT_ANCHOR) && source.includes(GENERAL_BEFORE) && source.includes(USAGE_BEFORE)) panelCandidates.push({ name, target, source });
  }
  if (registryCandidates.length !== 1 || panelCandidates.length !== 1) {
    throw new Error(`Expected one original Settings registry and panel chunk, found ${registryCandidates.length}/${panelCandidates.length}.`);
  }
  const changes = [];
  for (const [role, candidate, transform] of [
    ["registry", registryCandidates[0], patchOriginalSettingsRegistry],
    ["panel", panelCandidates[0], patchOriginalSettingsPanel],
  ]) {
    const patched = transform(candidate.source);
    await writeFile(candidate.target, patched);
    changes.push({
      role,
      path: `dist/renderer/assets/${candidate.name}`,
      original: { bytes: Buffer.byteLength(candidate.source), sha256: sha256(candidate.source) },
      patched: { bytes: Buffer.byteLength(patched), sha256: sha256(patched) },
    });
  }
  const record = {
    schemaVersion: 1,
    mode: "original-renderer-settings-extension",
    chunks: changes,
    features: ["settings-router-provider", "settings-local-docker-vm", "settings-sandbox-computer", "usage-current-provider"],
    transformations: ["settings-registry", "router-panel", "usage-panel"],
  };
  const provenancePath = path.join(stageRoot, "dist", "renderer-router-extension.json");
  await writeFile(provenancePath, `${JSON.stringify(record, null, 2)}\n`);
  return { ...record, provenancePath, provenanceBytes: (await stat(provenancePath)).size };
}
