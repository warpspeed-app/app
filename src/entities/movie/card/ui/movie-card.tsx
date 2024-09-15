import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Star, Plus } from "lucide-react";
import { FC } from "react";

export interface MovieCardProps {
  name: string;
  description: string;
  rating: number;
  country: string;
  year: string | number;
  coverUrl: string;
}

export const MovieCard: FC<MovieCardProps> = ({
  name = "Inception",
  description = "A thief who enters the dreams of others to steal secrets from their subconscious.",
  rating = 8.8,
  country,
  year,
  coverUrl = "/placeholder.svg?height=400&width=300",
}) => {
  return (
    <Card className="md:w-48 lg:w-56 bg-white dark:bg-neutral-900 shadow-lg overflow-hidden group">
      <div className="relative">
        <img
          src={coverUrl}
          alt={name}
          className="object-cover w-full md:h-52 lg:h-64"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="default" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add to library
          </Button>
        </div>
        <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded-md flex items-center">
          <Star className="h-4 w-4 mr-1 fill-current" />
          {rating.toFixed(1)}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="md:text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200">
            {name}
          </h2>

          <p className="text-xs gap-2 text-gray-800 dark:text-gray-500">
            {year}, {country}
          </p>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
