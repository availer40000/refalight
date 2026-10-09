export default function Music() {
  const releases = [
    {
      name: 'スタートライン',
      cover: '/Screenshot_20261009_090603_Amazon%20Music.jpg',
      spotify:
        'https://open.spotify.com/artist/1anE2wxPgnQdKn1memzJ1k',
      apple:
        'https://music.apple.com/us/album/%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%83%A9%E3%82%A4%E3%83%B3-single/1888731652',
      youtube:
        'https://music.youtube.com/watch?v=4vLtyUZVM00&si=cLR-s2Qqyf44D4As',
      amazon:
        'https://music.amazon.co.jp/albums/B0GV5M94CG?trackAsin=B0GV5PKG22&do=play&ts=1791300314&ref=dm_sh_q9xF4ZyWOAcJxOJZmMHg081e5',
    },
  ];

  return (
    <section id="music" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#38BDF8] text-xs tracking-[0.5em] uppercase mb-4">
          Music
        </p>

        <h2 className="text-white text-4xl font-light mb-4">
          Latest Release
        </h2>

        <div className="h-px w-16 bg-[#38BDF8] mb-10" />

        {releases.map((release) => (
          <div
            key={release.name}
            className="border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <img
              src={release.cover}
              alt={`${release.name} ジャケット`}
              className="w-full max-w-xs rounded-xl mb-6"
            />

            <h3 className="text-white text-2xl font-light mb-6">
              {release.name}
            </h3>

            <div className="flex flex-wrap gap-3">
              <a
                href={release.spotify}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#38BDF8] px-5 py-3 text-sm text-[#38BDF8]"
              >
                Spotify
              </a>

              <a
                href={release.apple}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white"
              >
                Apple Music
              </a>

              <a
                href={release.youtube}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white"
              >
                YouTube Music
              </a>

              <a
                href={release.amazon}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white"
              >
                Amazon Music
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}