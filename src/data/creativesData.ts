
export interface CreativeData {
  id: number;
  type: "video" | "image";
  videoUrl?: string;
  thumbnail: string;
  roas: number;
  hookRate: number;
  ctr: number;
}

export const creativesData: CreativeData[] = [
  {
    id: 1,
    type: "video",
    videoUrl: "/lovable-uploads/video-1.mp4",
    thumbnail: "/lovable-uploads/3af88cd0-1100-4178-a110-332208b4964c.png",
    roas: 4.2,
    hookRate: 85,
    ctr: 3.4
  },
  {
    id: 2,
    type: "video", 
    videoUrl: "/lovable-uploads/video-2.mp4",
    thumbnail: "/lovable-uploads/2f423ce1-a0eb-4fe6-9fca-52e98352b921.png",
    roas: 3.8,
    hookRate: 78,
    ctr: 2.9
  },
  {
    id: 3,
    type: "image",
    thumbnail: "/lovable-uploads/37f86f36-4ad6-44f3-b624-ddd5ead092c0.png",
    roas: 5.1,
    hookRate: 92,
    ctr: 4.1
  },
  {
    id: 4,
    type: "video",
    videoUrl: "/lovable-uploads/video-4.mp4", 
    thumbnail: "/lovable-uploads/15e81cc9-46f1-4a30-af8a-e4aefeb71f63.png",
    roas: 3.6,
    hookRate: 74,
    ctr: 2.7
  },
  {
    id: 5,
    type: "image",
    thumbnail: "/lovable-uploads/664cb3fb-6045-474b-a673-d32ac9eb4897.png",
    roas: 4.5,
    hookRate: 88,
    ctr: 3.2
  }
];
