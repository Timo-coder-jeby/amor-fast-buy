import { CheckCircle } from "lucide-react";
import { Accordion } from "radix-ui";

interface SeniorFeaturesProps {
  features: string[];
}

const SeniorFeatures = ({ features }: SeniorFeaturesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <Accordion.Root type="single" collapsible defaultValue="features">
          <Accordion.Item value="features">
            <Accordion.Trigger className="text-lg font-semibold text-gray-900 flex items-center justify-between w-full py-2 hover:text-pink-600 transition-colors [&[data-state=open]>svg]:rotate-180">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">👥</span>
                Senior-Friendly Features
              </div>
              <svg className="h-4 w-4 shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Accordion.Trigger>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <ul className="space-y-3 mt-4 pb-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
};

export default SeniorFeatures;
