import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const EditorExample = () => {
  return (
    <div>
      <h1>ToastUI Editor Table of Contents Example</h1>
      <small>v1.0.0</small>

      <Editor
          previewStyle="vertical"
          hideModeSwitch={true}
          height="500px"
          initialEditType="wysiwyg"
          plugins={[]}
          usageStatistics={false}
        />
    </div>
  );
};

export default EditorExample;
