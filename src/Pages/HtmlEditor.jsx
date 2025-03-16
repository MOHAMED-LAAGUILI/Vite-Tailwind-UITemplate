import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { dracula } from "@uiw/codemirror-theme-dracula";


export default function HtmlEditor() {
  const [htmlCode, setHtmlCode] = useState(`
    <h1>Welcome to the HTML Editor</h1>
    <p>Edit the code and see the preview update instantly!</p>
  `);

      return (
       
        
          
            <div className="flex flex-col w-full h-screen bg-gray-100 dark:bg-gray-900 p-4">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                Live HTML Editor
              </h1>
        
              <div className="flex flex-col md:flex-row gap-4 h-full">
                {/* Editor */}
                <div className="flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 overflow-hidden h-full">
                  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">HTML Code</h2>
                  <CodeMirror
                    value={htmlCode}
                    height="100%"
                    extensions={[html()]}
                    theme={dracula}
                    onChange={(value) => setHtmlCode(value)}
                    className="border-none rounded-md"
                  />
                </div>
        
                {/* Live Preview */}
                <div className="flex-1 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 overflow-auto border h-full">
                  <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Live Preview</h2>
                  <div
                    className="dark:text-white w-full h-full p-2 bg-gray-50 dark:bg-gray-700 rounded-md overflow-hidden"
                    style={{ wordWrap: 'break-word', overflow: 'auto' }}
                    dangerouslySetInnerHTML={{ __html: htmlCode }}
                  />
                </div>
              </div>
            </div>
        
    
  )
}
