/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

const EMOJI_FONT_REGEX = /AppleColorEmoji/;

function createBlobPromise(content, fontSize) {
    const offscreenCanvas = new OffscreenCanvas(fontSize + 3, fontSize + 3);
    const ctx = offscreenCanvas.getContext("2d");
    ctx.font = `${fontSize}px serif`;
    ctx.fillText(content, 0, fontSize);
    return offscreenCanvas.convertToBlob();
}

function layer(context, selectedLayer) {
    if (selectedLayer.content) {
        const { fontSize, fontFamily } = selectedLayer.textStyles[0].textStyle;

        if (!fontFamily || !fontFamily.match(EMOJI_FONT_REGEX)) return Promise.resolve(null);

        return Promise.all([
            createBlobPromise(selectedLayer.content, fontSize),
            createBlobPromise(selectedLayer.content, fontSize * 2),
            createBlobPromise(selectedLayer.content, fontSize * 3)
        ]).then(results => {
            return results.map(blob => URL.createObjectURL(blob));
        }).then(([x1, x2, x3]) => {
            return {
                code: `{\n  "1x": "${x1}",\n  "2x": "${x2}",\n  "3x": "${x3}"\n}`,
                language: "json"
            }
        });
    }

    return Promise.resolve(null);
}

export default {
    layer
};