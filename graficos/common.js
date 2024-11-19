const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
};

const tickComfig = {
color: getCSS('--primary-color')
    size: 15,
    family: getCSS('--font')
}

export{ getCSS, tickComfig}