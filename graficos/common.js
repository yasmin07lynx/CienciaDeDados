const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
};

const tickComfig = {
color: getCSS('--primary-color'),
    size: 15,
    family: getCSS('--font')
}

export{ getCSS, tickComfig}