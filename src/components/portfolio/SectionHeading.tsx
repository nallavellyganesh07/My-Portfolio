import Reveal from "./Reveal";

interface Props {
  number?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <Reveal>
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title.split(" ").map((word, i, arr) => (
          <span key={i} className={i === arr.length - 1 ? "text-gradient" : ""}>
            {word}{i < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </div>
  </Reveal>
);

export default SectionHeading;
