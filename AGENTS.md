<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application conventions
- Keep café business facts, replaceable image imports, sample menu entries, and metadata helpers in `src/components/cafe/content.ts` so owner content updates stay centralized.
- Reuse café sections across the home and separate content routes, with shared header/footer in the root layout, to keep navigation and presentation consistent.
- Use external Google Maps directions links rather than embedding a map; visiting directions needs no map credentials or billed in-app lookups.
- Keep sample menu content frontend-only until a confirmed owner-managed editing workflow is requested; do not imply a stored or definitive business menu.
