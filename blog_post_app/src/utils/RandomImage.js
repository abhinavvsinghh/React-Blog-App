// Function to get a random image URL from a predefined list
export function getRandomImage() {
  const imageUrls = [
    "images/img-1.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}
