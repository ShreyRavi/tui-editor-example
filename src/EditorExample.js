import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import {tableOfContentsPlugin, tableOfContentsPluginCustomHTMLRenderer} from 'tui-table-of-contents';

const EditorExample = () => {
  return (
    <div>
      <h1>ToastUI Editor Table of Contents Example</h1>
      <small>v1.0.0</small>
      <Editor
          height="500px"
          initialEditType="wysiwyg"
          plugins={[tableOfContentsPlugin]}
          viewer={true}
          customHTMLRenderer={tableOfContentsPluginCustomHTMLRenderer}
          usageStatistics={false}
      />
    </div>
  );
};

export default EditorExample;
