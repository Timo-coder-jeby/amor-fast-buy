import { Heart, TrendingUp } from "lucide-react";

interface CommunityPost {
  user: string;
  content: string;
  likes: number;
  helpful: number;
}

interface CommunitySectionProps {
  communityPosts: CommunityPost[];
}

const CommunitySection = ({ communityPosts }: CommunitySectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-600 mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600">Real stories from real people using #amor</p>
        </div>
        <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2">
          {communityPosts.map((post, index) => (
            <div key={index} className="p-6 border border-gray-200 hover:border-pink-300 transition-colors rounded-xl bg-white shadow-sm">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">"{post.content}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-pink-600">- {post.user}</span>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{post.helpful} helpful</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
            Share & Help Others
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
