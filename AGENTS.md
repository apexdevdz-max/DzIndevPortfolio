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

- Keep mobile navigation in its own component with the shared Button controls; retain the Kokonut morphic navigation on desktop so its animated fixed-width segments never clip on phones.
- Size the portfolio typewriter through its textClassName prop and allow phrase wrapping; its wrapper font size alone does not control the animated text.
