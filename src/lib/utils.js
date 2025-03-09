

/*
    let div = $state(null)

    <div {...prepareTransformFrom('my-div', { rotate: 45, scale: 2 })} bind:this={div}>
        ...
    </div>
*/
export function prepareTransformFrom(id, classes, style, from) {
    // elem.classList.add('will-animate-transform')
    classes += ' will-animate-transform'
    
    let transform = ''
    let newStyle = ''
    for (const prop of Object.keys(from)) {
        const val = from[prop]
        const varName = '--' + prop
        const varValue = `${val}${getUnitByProp(prop)}`
        newStyle += `${varName}: ${varValue}; `
        console.log(`Set ${varName}: ${varValue}`)
    }
    newStyle += style;

    return { id, style: newStyle, class: classes }
}

/*
    Requires to use prepareTransformFrom on the same element

    animateTransformTo(div, 2000, { rotate: -90, scale: 0.5 })
*/
export function animateTransformTo(elem, milliseconds, to) {

    if (typeof elem == 'string') {
        elem = document.getElementById(elem)
    }

    if (elem.classList.contains('will-animate-transform') == false) {
        console.error(`Element ${elem.tagName} ${elem.classList} does not contain will-animate-transform`)
    }

    for (const prop of Object.keys(to)) {
        const val = to[prop]
        const varName = '--to-' + prop
        const varValue = val + getUnitByProp(prop)
        elem.style.setProperty(varName, varValue)
    }

    elem.style.setProperty('--animation-duration', `${milliseconds}ms`)
    elem.classList.add('started')
}

export function generateUniqueId(prefix) {
    return prefix + Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
}

export function createKeyframes(code) {
    const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement("style")).sheet;
    
    const keyframes = code
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

export function createAnimation(name, from, to) {
    const uniqueName = name
    createKeyframes(`
        @keyframes ${uniqueName} {
            0% {
                transform: ${from};
            }
            100% {
                transform: ${to};
            }
        }
    `)
    return uniqueName
}

function getUnitByProp(prop) {
    return (
        prop == 'rotate'? 'deg':
        prop == 'scale'? '':
        prop == 'x' || prop == 'y'? 'px':
        ''
    )
}