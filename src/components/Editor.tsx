import CodeBlockLowLight from "@tiptap/extension-code-block-lowlight";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
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
            <BubbleButton>
              <RxFontBold className="w-5 h-5" />
            </BubbleButton>
            <BubbleButton>
              <RxFontItalic className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton>
              <RxStrikethrough className="w-5 h-5" />
            </BubbleButton>

            <BubbleButton>
              <RxCode className="w-5 h-5" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
