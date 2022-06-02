import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( { onAdd } ) {
  const [text, setText] = React.useState('');

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onAdd(text);
      setText('');
    }
  };
  
   return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange} //get keyword to text
        onKeyDown={handleKeyDown} // enter
      />
    </div>
  );
}

export default Input;
