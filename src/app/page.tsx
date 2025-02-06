"use client"
import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MaxKB.ai - 基于大模型和 RAG 的知识库问答系统</title>
        <meta
          name="description"
          content="MaxKB = Max Knowledge Base，是一款基于大语言模型和 RAG 的开源知识库问答系统，广泛应用于智能客服、企业内部知识库、学术研究与教育等场景。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      {/* 顶部导航 */}
      <header
        style={{
          padding: '20px',
          background: '#f8f8f8',
          borderBottom: '1px solid #ddd',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '24px',
                color: '#333',
              }}
            >
              MaxKB.ai
            </Link>
          </div>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="https://cloud.maxkb.ai/ui/#/"
                target="_blank"
                rel="noopener noreferrer"
                style={{textDecoration: 'none', color: '#333'}}
              >
                Max Kb Cloud
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 主体内容 */}
      <main
        style={{
          padding: '40px',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}
      >
        {/* LOGO */}
        <div style={{textAlign: 'center'}}>
          <img
            src="https://github.com/1Panel-dev/maxkb/assets/52996290/c0694996-0eed-40d8-b369-322bf2a380bf"
            alt="MaxKB"
            width="300"
          />
        </div>

        {/* 标题和徽标 */}
        <h3 style={{textAlign: 'center'}}>基于大模型和 RAG 的知识库问答系统</h3>
        <h4 style={{textAlign: 'center'}}>Ready-to-use, flexible RAG Chatbot</h4>
        <hr/>

        {/* 产品介绍 */}
        <section>
          <p>
            MaxKB = Max Knowledge Base，是一款基于大语言模型和 RAG 的开源知识库问答系统，
            广泛应用于智能客服、企业内部知识库、学术研究与教育等场景。
          </p>
          <ul>
            <li>
              <strong>开箱即用</strong>：支持直接上传文档 / 自动爬取在线文档，支持文本自动拆分、向量化和
              RAG（检索增强生成），有效减少大模型幻觉，智能问答交互体验好；
            </li>
            <li>
              <strong>模型中立</strong>：支持对接各种大模型，包括本地私有大模型（Llama 3 / Qwen 2 等）、国内公共大模型（DeepSeek/通义千问
              / 腾讯混元 / 字节豆包 / 百度千帆 / 智谱 AI / Kimi 等）和国外公共大模型（OpenAI / Claude / Gemini
              等）；
            </li>
            <li>
              <strong>灵活编排</strong>：内置强大的工作流引擎和函数库，支持编排 AI 工作过程，满足复杂业务场景下的需求；
            </li>
            <li>
              <strong>无缝嵌入</strong>：支持零编码快速嵌入到第三方业务系统，让已有系统快速拥有智能问答能力，提高用户满意度。
            </li>
          </ul>
          <p>
            MaxKB 三分钟视频介绍：
            <a
              href="https://www.bilibili.com/video/BV18JypYeEkj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              点击观看
            </a>
          </p>
        </section>

        {/* 案例展示 */}
        <section>
          <h3>案例展示</h3>
          <ul>
            <li>
              <a
                href="https://ai.cnhls.com/ui/chat/1fc0f6a9b5a6fb27"
                target="_blank"
                rel="noopener noreferrer"
              >
                华莱士智能客服
              </a>
            </li>
            <li>
              <a
                href="https://maxkb.fit2cloud.com/ui/chat/b4e27a6e72d349a3"
                target="_blank"
                rel="noopener noreferrer"
              >
                JumpServer 小助手
              </a>
            </li>
            <li>
              <a
                href="https://www.szcredit.org.cn/#/index"
                target="_blank"
                rel="noopener noreferrer"
              >
                信用深圳
              </a>
            </li>
            <li>
              <a
                href="http://jwc.anyquestion.cn/ui/chat/b75496390f7d935d"
                target="_blank"
                rel="noopener noreferrer"
              >
                重庆交通大学教务在线
              </a>
            </li>
          </ul>
        </section>

        {/* UI 展示 */}
        <section>
          <h3>UI 展示</h3>
          <table
            style={{
              borderCollapse: 'collapse',
              width: '100%',
              border: '1px solid black',
            }}
          >
            <tbody>
            <tr>
              <td style={{padding: '5px', backgroundColor: '#fff'}}>
                <img
                  src="https://github.com/1Panel-dev/MaxKB/assets/52996290/d87395fa-a8d7-401c-82bf-c6e475d10ae9"
                  alt="MaxKB Demo1"
                  style={{width: '100%'}}
                />
              </td>
              <td style={{padding: '5px', backgroundColor: '#fff'}}>
                <img
                  src="https://github.com/1Panel-dev/MaxKB/assets/52996290/47c35ee4-3a3b-4bd4-9f4f-ee20788b2b9a"
                  alt="MaxKB Demo2"
                  style={{width: '100%'}}
                />
              </td>
            </tr>
            <tr>
              <td style={{padding: '5px', backgroundColor: '#fff'}}>
                <img
                  src="https://github.com/user-attachments/assets/9a1043cb-fa62-4f71-b9a3-0b46fa59a70e"
                  alt="MaxKB Demo3"
                  style={{width: '100%'}}
                />
              </td>
              <td style={{padding: '5px', backgroundColor: '#fff'}}>
                <img
                  src="https://github.com/user-attachments/assets/3407ce9a-779c-4eb4-858e-9441a2ddc664"
                  alt="MaxKB Demo4"
                  style={{width: '100%'}}
                />
              </td>
            </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>开通试用</h3>
          <p>请联系 litongjava001@gmail.com</p>
        </section>
      </main>

      {/* 页脚 */}
      <footer
        style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: '1px solid #ddd',
          marginTop: '40px',
        }}
      >
        <p>&copy; {new Date().getFullYear()} MaxKB.ai. All rights reserved.</p>
      </footer>
    </>
  );
}
