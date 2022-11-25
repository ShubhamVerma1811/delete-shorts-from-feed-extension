function deleteShortsFromFeed() {
  const shorts = [...document.querySelectorAll('a[href^="/shorts/"]')]
    ?.filter((a) => a?.id === 'thumbnail')
    ?.map((i) => i?.parentElement?.parentElement?.parentElement);
  shorts?.forEach((short) => (short.style.display = 'none'));
}

window?.addEventListener?.('scroll', deleteShortsFromFeed);
