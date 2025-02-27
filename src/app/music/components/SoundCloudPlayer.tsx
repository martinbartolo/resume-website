import { cn } from "~/utils/utils";

interface SoundCloudPlayerProps {
  trackUrl: string;
  className?: string;
}

export function SoundCloudPlayer({
  trackUrl,
  className,
}: SoundCloudPlayerProps) {
  return (
    <div className={cn("mx-auto max-w-2xl rounded-xl p-4", className)}>
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          trackUrl,
        )}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
      />
    </div>
  );
}
