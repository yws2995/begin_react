import React from 'react';

function Wrapper({children}) {      //내부의 내용이 보요지게 하기 위해서 wrapper의 props.children을 렌더링해주어야 한다.
    const style = {
        border: '2px solid black',
        padding: '16px',
    };
    return (
        <div style = {style}>
            {children}
        </div>
    )
}

export default Wrapper;