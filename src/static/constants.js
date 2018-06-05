export const DOCS_MD_URL =
  'https://raw.githubusercontent.com/Pathoschild/StardewMods/develop/ContentPatcher/README.md'

export const DOCS_BASE_URL =
  'https://github.com/Pathoschild/StardewMods/raw/develop/ContentPatcher'

export const DOCS_REF =
  'https://api.github.com/repos/Pathoschild/StardewMods/git/refs/heads/develop'

export const getDocsHtml = (markdown, baseUrl) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <body>
      <article class="markdown-body entry-content" itemprop="text">
        ${markdown}
        <small>
          Sourced from <a href=${baseUrl} target="_blank" >${baseUrl}</a>
        </small>
      </article>
    </body>
    </html>
  `
}

export const GAME_REF =
  'https://api.github.com/repos/Pathoschild/StardewValley/git/refs/heads/fixed'

// These are mostly static, maybe use CDN?
export const GAME_CONTENT =
  'https://api.github.com/repos/Pathoschild/StardewValley/git/trees'