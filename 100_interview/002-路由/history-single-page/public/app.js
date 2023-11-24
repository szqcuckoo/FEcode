/**
 * 1. 输入 URL http://localhost:3300/list
 * 2. 向服务器请求 http://localhost:3300/list 接口
 * 3. 保证服务器程序响应一个 index.html 回来
 * 4. 根据 list ==> 显示 list 页面应该显示的 DOM 接口
 */

const oApp = document.getElementById('app')
function handleRouter() {
    const { state } = window.history;
    console.log(state);
    switch (state) {
        // case '':
        case '/':
        case '/home':
        case null:
            oApp.innerHTML = `
                <h1>Home</h1>
                <button id="toListBtn">To List</button>
            `;
            bindEvent()
            break;
        case '/list':
            oApp.innerHTML = `
                <h1>list</h1>
                <button id="toHomeBtn">To Home</button>
            `;
            bindEvent()
            break;
        default:
            oApp.innerHTML = `
                <h1>404 NotFound</h1>
            `
            break;
    }
}


function handleToListBtnClick() {
    window.history.pushState("/list", '', '/list')
    handleRouter()
}

function handleToHomeBtnClick() {
    window.history.pushState("/home", '', '/')
    handleRouter()
}

function bindEvent() {
    const oToListBtn = document.getElementById('toListBtn')
    const oToHomeBtn = document.getElementById('toHomeBtn')
    oToListBtn && oToListBtn.addEventListener('click', handleToListBtnClick, false)
    oToHomeBtn && oToHomeBtn.addEventListener('click', handleToHomeBtnClick, false)
}


handleRouter()
bindEvent()