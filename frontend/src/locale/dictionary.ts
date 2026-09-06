/**
 * English -> Simplified Chinese translation dictionary used by the deep
 * translation engine. Keys are canonical English UI strings; values are their
 * Simplified Chinese equivalents.
 *
 * This dictionary powers DOM-level deep translation so the entire reconstructed
 * renderer (including byte-injected surfaces such as the Router settings panel)
 * can show Simplified Chinese when the Electron system language is Chinese.
 */
import type { AppLanguage } from "./locale";

export type TranslationDictionary = Readonly<Record<string, string>>;

export const ZH_TRANSLATIONS: TranslationDictionary = {
  // ---- Welcome / no-login (injected) ----
  "Continue without signing in": "在不登录的情况下继续",
  "Finish Proxy Gateway setup": "完成代理网关设置",
  "Configure Proxy Gateway": "配置代理网关",
  "Local Proxy Gateway is ready. Continue without signing in.": "本地代理网关已就绪，可以跳过登录继续使用。",
  "Checking your local Proxy Gateway workspace…": "正在检查本地代理网关工作区…",
  "Finish the Local Proxy Gateway setup to continue without signing in.": "请先完成本地代理网关设置，再跳过登录继续使用。",
  "Finish the local Proxy Gateway setup to continue without signing in.": "请先完成本地代理网关设置，再跳过登录继续使用。",
  "OpenAI-compatible / Proxy Gateway": "OpenAI 兼容 / 代理网关",
  "Route through local Proxy Gateway at 127.0.0.1:20128 or another reviewed OpenAI-compatible endpoint.": "通过本机 127.0.0.1:20128 的代理网关或其他经过审核的 OpenAI 兼容端点路由。",
  "Your local Proxy Gateway workspace": "你的本地代理网关工作区",
  "Router": "路由",

  // ---- Top-level navigation / chrome ----
  "Settings": "设置",
  "Account": "账户",
  "About": "关于",
  "Help Center": "帮助中心",
  "Plugins": "插件",
  "Updates": "更新",
  "Usage & Billing": "用量与账单",
  "General": "常规",
  "Search": "搜索",
  "New chat": "新建会话",
  "No chats yet": "还没有会话",

  // ---- Auth / sign in ----
  "Sign in": "登录",
  "Sign out": "退出登录",
  "Sign out?": "确定退出登录？",
  "Continue in your browser": "在浏览器中继续",
  "Reopen link": "重新打开链接",
  "Cancel": "取消",
  "Close": "关闭",
  "Use your signed-in Cursor account.": "使用已登录的 Cursor 账户。",
  "Use your existing Claude Code sign-in and Grok Bot's connected plugins.": "使用已有的 Claude Code 登录状态以及 Grok Bot 已连接的插件。",
  "Use your existing ChatGPT sign-in from Codex with Grok Bot's connected plugins.": "使用 Codex 中已有的 ChatGPT 登录状态，并配合 Grok Bot 已连接的插件。",
  "Route through your OpenRouter account and selected model.": "通过你的 OpenRouter 账户和所选模型进行路由。",

  // ---- Sandbox Computer (injected box-runtime surface) ----
  "Sandbox Computer": "常开沙箱计算机",
  "Local Docker": "本地 Docker",
  "Cloud VM": "云端虚拟机",
  "Computer runtime": "运行载体",
  "Run shell, computer use and files in the always-on sandbox managed by Grok Bot.": "在由 Grok Bot 托管的常开沙箱中运行 Shell、电脑使用与文件操作。",
  "Shell, files and computer use run in a local Docker container.": "Shell、文件与电脑使用在本机 Docker 容器中运行。",
  "SSH into an always-on remote Linux sandbox and tunnel its gateway to localhost:1340.": "通过 SSH 连接一台常开的远程 Linux 沙箱，并将其网关隧道映射到 localhost:1340。",
  "Sandbox Computer is ready.": "常开沙箱计算机已就绪。",
  "SSH tunnel is up; waiting for the remote gateway.": "SSH 隧道已建立，正在等待远程网关。",
  "Not connected. The SSH tunnel is off.": "未连接。SSH 隧道处于关闭状态。",
  "SSH tunnel is starting.": "SSH 隧道正在启动。",
  "Host": "主机",
  "Port": "端口",
  "SSH user": "SSH 用户名",
  "SSH private key path": "SSH 私钥路径",
  "Save & connect": "保存并连接",
  "Connecting…": "正在连接…",

  // ---- Feedback ----
  "Send Feedback": "发送反馈",
  "Copied": "已复制",
  "Copy version info": "复制版本信息",

  // ---- Account / sidebar ----
  "Hidden Bots": "隐藏的机器人",
  "Log out": "退出登录",
  "Weekly usage": "每周用量",
  "Spend this cycle": "本周期花费",
  "On-demand": "按需",
  "Included": "已包含",
  "Change limit": "更改限额",
  "Get Grok Bot for iOS": "获取 iOS 版 Grok Bot",
};

export const EMPTY_TRANSLATION: Readonly<Record<AppLanguage, TranslationDictionary>> = {
  en: {},
  zh: ZH_TRANSLATIONS,
};