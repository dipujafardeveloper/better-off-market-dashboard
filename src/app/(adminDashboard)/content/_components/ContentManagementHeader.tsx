// components/content-management/ContentManagementHeader.tsx
export function ContentManagementHeader({
  title = "Content Management",
}: {
  title?: string;
}) {
  return <h1 className="lg:text-3xl md:text-2xl text-xl font-medium text-[#191C1E]">{title}</h1>;
}