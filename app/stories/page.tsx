import Link from "next/link";
import { stories, storyFilters } from "@/lib/stories";

export default function StoriesPage() {
  return (
    <div className="section-shell py-16 lg:py-20">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Customer stories</div>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.06em] text-[#171A1C] sm:text-5xl">Real voices from the field and partner network.</h1>
        <p className="mt-5 text-base leading-8 text-stone-700">
          This section is built to support testimonials, short reviews, case stories, and video content as URVA grows its digital storytelling and field credibility.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {storyFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-[#D62828] hover:text-[#D62828]"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stories.map((story) => (
          <article key={story.id} className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_18px_50px_rgba(23,26,28,0.04)]">
            <img src={story.image} alt={story.title} className="h-60 w-full object-cover" />
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#D62828]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D62828]">
                  {story.category}
                </span>
                {story.rating ? <span className="text-sm text-amber-500">{'★'.repeat(story.rating)}</span> : <span className="text-xs text-stone-500">{story.duration ?? "Field note"}</span>}
              </div>
              <h2 className="text-xl font-semibold text-[#171A1C]">{story.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">{story.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-stone-500">
                <span>{story.location}</span>
                <span>{story.crop}</span>
              </div>
              <div className="mt-5 border-t border-stone-200 pt-4 text-sm leading-7 text-stone-700">
                <p><span className="font-semibold text-[#171A1C]">Quote:</span> “{story.quote}”</p>
                <p className="mt-3"><span className="font-semibold text-[#171A1C]">Outcome:</span> {story.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-[28px] border border-stone-200 bg-[#F1EFE9] p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D62828]">Content-ready</div>
            <h2 className="mt-3 text-2xl font-semibold text-[#171A1C]">Ready for future blog posts, testimonials, short reviews, and video stories.</h2>
          </div>
          <Link href="/consultation" className="inline-flex rounded-full bg-[#D62828] px-6 py-3 text-sm font-semibold text-white hover:bg-[#b62020]">
            Share Your Story
          </Link>
        </div>
      </div>
    </div>
  );
}
