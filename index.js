/**
 *
 * @returns {HTMLElement[]}
 */
function getShorts() {
  let shorts = [].concat(
    Array.from(document.querySelectorAll('a[href^="/shorts/"]'))
      ?.filter((a) => a?.id === "thumbnail")
      ?.map((i) => i?.parentElement?.parentElement?.parentElement),
    Array.from(document.querySelectorAll("[is-shorts]"))
  )

  return shorts
}

function deleteShortsFromFeed() {
  const shorts = getShorts()

  shorts?.forEach((short) => {
    short.remove()
  })
}

window?.addEventListener("scroll", deleteShortsFromFeed)
