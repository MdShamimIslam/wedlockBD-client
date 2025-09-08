import { User } from "lucide-react";

const NoProfiles = () => {
  return (
    <div className="text-center py-16">
        <User className="h-24 w-24 text-gray-300 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-600 mb-2"> No profiles found </h3>
        <p className="text-gray-500"> Try adjusting your filters to see more results </p>
    </div>
  )
}

export default NoProfiles;