import { Heart, Star } from "lucide-react"
import useUserStats from "../../hooks/useUserStats";
import storyImg from "../../assets/images/story.jpeg";
import useSuccessStory from "../../hooks/useSuccessStory";
import { secCl } from "../../utils/options";

const Story = () => {
  const userStats = useUserStats();
  const [stories] = useSuccessStory();
  const { successStories,totalBiodatas} = userStats || {} ;
  const happyMembers = totalBiodatas - successStories;

  const totalRatings = stories.reduce((sum, story) => sum + (story.ratings || 0), 0);
  const avgRating = stories.length > 0 ? totalRatings / stories.length : 0;

  const fullStars = Math.floor(avgRating);
  const hasHalfStar = avgRating - fullStars >= 0.5;

  return (
        <div className={`${secCl} px-4 sm:px-6 lg:px-8`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8 md:px-6 lg:px-0">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-tight">Our Story</h2>
              <p className="lg:text-lg text-gray-600 mb-6 leading-relaxed">
                WedlockBD was founded with a simple yet powerful vision: to help people find their perfect life partner in a safe, secure, and culturally respectful environment. We understand that marriage is not just the union of two individuals, but the coming together of two families, two hearts, and two dreams.
              </p>
              <p className="lg:text-lg text-gray-600 mb-6 leading-relaxed">
                Our platform combines traditional Bengali marriage values with cutting-edge technology to create meaningful connections. We believe that every person deserves to find their soulmate, and we are here to make that journey as smooth, joyful, and successful as possible.
              </p>
              <p className="lg:text-lg text-gray-600 mb-8 leading-relaxed">
                With over {totalBiodatas} active members and {successStories}+ successful marriages, we have become Bangladesh is most trusted matrimony platform. Our commitment to quality, safety, and genuine connections sets us apart in the industry.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    if (star <= fullStars) {
                      return <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />;
                    } else if (star === fullStars + 1 && hasHalfStar) {
                      return <Star key={star} className="h-6 w-6 text-yellow-400 fill-current opacity-50" />;
                    } else {
                      return <Star key={star} className="h-6 w-6 text-gray-300" />;
                    }
                  })}
                </div>
                <span className="text-gray-600 lg:text-lg">
                  Rated {avgRating.toFixed(1)}/5 by our members
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-3xl font-bold text-primary-500 mb-2">{happyMembers}+</div>
                  <div className="text-gray-600">Happy Members</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-3xl font-bold text-secondary-500 mb-2">{successStories}+</div>
                  <div className="text-gray-600">Successful Marriages</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <img
                  src={storyImg}
                  alt="Happy Couple"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-4 md:p-8 rounded-2xl shadow-xl">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 mb-2">3+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="absolute -top-8 -right-8 bg-gradient-to-r from-pink-500 to-blue-500 text-white p-3 md:p-6 rounded-2xl shadow-xl">
                  <Heart className="h-8 w-8 mb-2" />
                  <div className="font-semibold">Trusted Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Story