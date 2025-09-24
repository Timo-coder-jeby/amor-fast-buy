import { CheckCircle } from "lucide-react";

interface KeyIngredient {
  name: string;
  verified: boolean;
}

interface KeyIngredientsProps {
  keyIngredients: KeyIngredient[];
  healthBenefits: string[];
}

const KeyIngredientsAndBenefits = ({ keyIngredients, healthBenefits }: KeyIngredientsProps) => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-8 mx-auto">
      {/* Key Ingredients */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Key Ingredients</h2>

        <div className="space-y-4">
          {keyIngredients.map((ingredient, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-900">{ingredient.name}</span>
              </div>
              {ingredient.verified && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Health Benefits */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Health Benefits</h2>

        <div className="space-y-4">
          {healthBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-3">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-gray-800">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyIngredientsAndBenefits;
