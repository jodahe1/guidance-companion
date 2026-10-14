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

## Project rules
- Hotel facts, rooms, facilities, gallery and FAQ live in `src/data/hotel.ts`; photos map in `src/data/images.ts` — edit content there, not in pages.
- Unverified facts render via `<Verify/>` so they stay visibly flagged until the hotel confirms them.
- Forms are front-end only: they validate and open a pre-filled email draft; never claim a booking was sent or confirmed without a real backend.
- Original photos from gambellahotel.com are hosted as Lovable Assets (pointers in `src/assets/hotel`).
