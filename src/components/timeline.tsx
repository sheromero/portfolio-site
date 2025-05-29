export default function Timeline({ experience }: { experience: any[] }) {
  return (
    <div className="space-y-6">
      {experience.map((item, idx) => (
        <div key={idx} className="relative pl-6">
          <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary"></div>
          <h3 className="text-lg font-semibold">
            {item.role || item.degree} @ {item.company || item.institution}
          </h3>
          <span className="text-sm text-muted-foreground">{item.period}</span>
          <p className="mt-2 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  )
}