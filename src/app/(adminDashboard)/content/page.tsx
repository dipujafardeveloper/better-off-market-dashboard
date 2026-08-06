import { ContentManagementHeader } from "./_components/ContentManagementHeader";
import { FaqEntriesSection } from "./_components/FaqEntriesSection";
import { PropertyCategoriesSection } from "./_components/PropertyCategoriesSection";


export default function ContentPage() {
  return (
    <div className="space-y-6 p-6">
      <ContentManagementHeader />
      <PropertyCategoriesSection />
      <FaqEntriesSection />
    </div>
  );
}