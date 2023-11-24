const oApp = document.getElementById('app')

function handleRouter () {
    const hash = window.location.hash.substring(1);
    console.log(hash);
    switch(hash) {
        // case '':
        case '/':
        case '/home':
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
    window.location.hash = '#/list'
 }

function handleToHomeBtnClick() {
    window.location.hash = '#/'
}

function bindEvent() {
    const oToListBtn = document.getElementById('toListBtn')
    const oToHomeBtn = document.getElementById('toHomeBtn')
    oToListBtn && oToListBtn.addEventListener('click', handleToListBtnClick, false)
    oToHomeBtn && oToHomeBtn.addEventListener('click', handleToHomeBtnClick, false)
}
window.addEventListener('hashchange', handleRouter)

handleRouter()
bindEvent()