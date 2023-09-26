window.copyToClipboard = async function (text) {
    await navigator.clipboard.writeText(text);
}