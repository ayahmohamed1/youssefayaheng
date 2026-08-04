Drop your exported artwork here with these exact filenames
(these are referenced from src/data/eventConfig.js):

  curtain-top.png       - top valance/cornice with tassels
  curtain-left.png      - left draped curtain panel
  curtain-right.png     - right draped curtain panel
  staircase.png         - the grand staircase background
  hero-singer.png       - the singer character illustration
  theme-song.mp3        - the "Tap to Listen" audio track

  gold-bird.png         - small gold bird/phoenix icon
  musician-flute.png    - musician playing the flute
  musician-oud.png      - musician playing the oud
  chandelier-small.png  - small chandelier under the quote card

  chandelier-large.png  - the big central chandelier
  oud-left.png          - decorative oud illustration, left edge
  oud-right.png         - decorative oud illustration, right edge
  palace-artwork.png    - palace + fountains illustration at the bottom

Note: I could not extract these directly from your reference screenshots
(they're custom commissioned/AI-illustrated artwork, not something I can
reproduce pixel-for-pixel). Export each element from your original design
file (or crop it from the screenshots) as a transparent PNG and drop it in
here — every component already points at these paths and has graceful
fallbacks (just hides the <img> if the file is missing), so the layout,
colors, type, and functionality all work today; dropping in the art is the
last step to make it pixel-identical.
