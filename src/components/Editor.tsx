import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import {
  BubbleMenu,
  EditorContent,
  useEditor,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import js from "highlight.js/lib/languages/javascript";
import { lowlight } from "lowlight";
import { initialContent } from "./initialContent";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

import "highlight.js/styles/tokyo-night-dark.css";
import { BubbleButton } from "./BubbleButton";

lowlight.registerLanguage("js", js);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowLight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 rounded-lg shadow-black/20 overflow-hidden flex flex-col py-2 px-1 gap-1"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === "/";
          }}
        >
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="text"
              className="w-12 border border-zinc-600 rounded-md"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm text-zinc-200 font-bold">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text
              </span>
            </div>
          </button>

          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="text"
              className="w-12 border border-zinc-600 rounded-md"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm text-zinc-200 font-bold">Heading 1</span>
              <span className="text-xs text-zinc-400">Big section heading</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-zinc-700 shadow-xl border border-zinc-600 rounded-lg shadow-black/20 overflow-hidden flex divide-x divide-zinc-600"
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-5 h-5" />
          </BubbleButton>

          <BubbleButton>
            Comment
            <RxChatBubble className="w-5 h-5" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-5 h-5" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-5 h-5" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
