import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { CpuChipIcon } from '@heroicons/react/20/solid';

export default function Tiny() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }

  };
  return (
    <>

    <h2 className='text-2xl font-bold text-center'>WYSIWYG</h2>
      <Editor
        apiKey='6du1oa25hr8obbidscpzs8ofhplaknxqh2v6jj5pr3df15re'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}