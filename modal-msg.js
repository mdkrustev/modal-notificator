const style = `.mn-buttons{display:flex;padding-top:15px;justify-content:center}.mn-button{background:#888;color:#FFF;cursor:pointer;margin:5px;padding:10px;border-radius:5px}.mn-button:hover{background:#000}.mn{width:100%;height:100%;background:rgba(0,0,0,.4);position:fixed;top:0;left:0}.mn-panel{background:#fff;padding:30px;top:100px;position:relative;margin:0 auto;transform:translateY(-500px);opacity:0;transition:.5s;width:350px;border-radius:5px;box-shadow:0 0 15px rgba(0,0,0,.4);border:1px solid #f1f1f1}.mn-panel.success{color:#1aa61a;border-color:#1aa61a;background:#fafffa}.mn-panel.error{color:#cc3c23;border-color:#cc3c23;background:#fff5f5}.mn-panel.warning{border-color:#d27b12;color:#d27b12;background:#fff8f0}.mn-panel-title{font-weight:700;font-size:20px;text-align:center;padding-top:10px;padding-bottom:10px}.mn-panel-title i{width:20px;top:-2px;margin-right:3px;position:relative;font-style:normal}.mn-panel-title i::after{font-size:16px;text-align:center;width:20px;height:20px;line-height:20px;border-radius:100%;display:inline-block;font-style:normal;color:#fff}i.icon-success::after{content:'✓';background:#1aa61a}i.icon-error::after{content:'⛔'}i.icon-warning::after{content:'⚠️'}.mn-panel-msg{font-size:14px; text-align:center}.mn-panel.open{opacity:1;transform:translateY(0)}.close-mn{position:absolute;right:10px;top:5px;cursor:pointer;font-size:20px}.close-mn:hover{color:#bbb}`
window.addEventListener('DOMContentLoaded', () => {
    const styleHtml = document.createElement('style');
    styleHtml.innerText = style
    document.head.appendChild(styleHtml)
})
function dce(t, o, p) {
    t = t || 'div'
    o = o || {}
    const el = document.createElement(t)
    Object.keys(o).forEach(k => el[k] = o[k])
    if (p) p.appendChild(el)
    return el
}
function modalNotificator(p) {
    const
        title = p.title || null,
        msg = p.message || null,
        type = p.type || null,
        oldmn = document.querySelector('.mn'),
        buttons = p.buttons || [];
    if (oldmn) oldmn.remove()
    const mn = dce('div', {className: 'mn'})
    const mnPanel = dce('div', {className: 'mn-panel'}, mn)
    let icon = ''
    if (type) {
        icon = `<i class="icon-${type}"></i>`;
        mnPanel.classList.add(type)
    }
    const closemnFunc = () => {
        mnPanel.classList.remove('open')
        setTimeout(() => {
            mn.remove()
        }, 400)
    }
    dce('div', {className: 'mn-panel-title', innerHTML: `${icon} ${(title || '')}`}, mnPanel)
    dce('div', {className: 'mn-panel-msg', innerHTML: msg || ''}, mnPanel)
    const closemn = dce('div', {className: 'close-mn', innerHTML: '&times;'}, mnPanel)
    const mnButtons = dce('div', {className: 'mn-buttons'}, mnPanel)

    if(buttons.length > 0) {
        buttons.forEach(b => {
            dce('div',{className: 'mn-button', innerHTML: b.title || 'OK'}, mnButtons).addEventListener('click', function () {
                closemnFunc()
                if(b.onClick) b.onClick()
            })
        })
    } else {
        dce('div',{className: 'mn-button', innerHTML: 'OK'}, mnButtons).addEventListener('click', function () {
            closemnFunc()
        })
    }
    closemn.addEventListener('click', (event) => {
        closemnFunc()
    });
    setTimeout(function () {
        mnPanel.classList.add('open')
        document.body.addEventListener('click', () => {
            if (event.target === mn) {
                closemnFunc()
            }
        })
    }, 80)
    document.body.appendChild(mn)
}
