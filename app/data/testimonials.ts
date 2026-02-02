import { useState } from "react";
export interface TestimonialList {
    feedback: string;
    clientName: string;
    location: string;
  }

export const testimonials: Array<TestimonialList> = [
  {
    feedback:
      "Dreamy pre-wedding shoot with Photofactoryfilms! Their attention to detail and passion for their craft made our moments truly unforgettable.",
    clientName: "Anirudh and Kavya",
    location: "Udupi",
  },
  {
    feedback:
      "Birthday magic captured! Photofactoryfilms turned memories into a visual masterpiece. Their approach to storytelling is unmatched.",
    clientName: "Abhishek and Priya",
    location: "Goa",
  },
  {
    feedback:
      "Our wedding moments were turned into timeless memories by Photofactoryfilms. Exceptional work, beyond expectations!",
    clientName: "Rohit and Neha",
    location: "Bangalore",
  },
];
