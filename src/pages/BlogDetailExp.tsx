import { useParams } from 'react-router-dom';


export default function BlogPostDetailExp() {
  const { id } = useParams();

  // This would typically come from an API call
  const posts = {
    1: {
      id: 1,
      title: 'How to groom a long-haired dog at home? Pawlish is here!',
      description: 'At Pawlish, we understand that taking care of a long-haired dog can be a challenge',
      date: '06/08/2024',
      time: '09:30 AM',
      author: 'Lisa Anderson',
      comments: 'No comments',
      image: 'https://vcdn1-giadinh.vnecdn.net/2021/11/09/207812257-308076537713445-6475-6662-7552-1636468053.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=vQnyjLxVCwLW086xDIJHSQ',
      content: `
        <p>At Pawlish, we understand that caring for a long-haired dog can be a challenge, especially when it comes to grooming your long-haired dog at home. While long, silky fur is beautiful, it requires a lot of time and effort to groom regularly. Grooming your dog at home can be risky if you don't have the right techniques and tools. Let Pawlish take care of the problem for you with their professional at-home long-haired dog grooming service!</p>
        <h1>Concerns of long-haired dog owners</h1>
        <p>Long-haired dogs are often very cute and loved by many people. However, caring for their fur is not easy. Owners of long-haired dogs often encounter the following difficulties:</p>
        <ul>
          <li>Time-consuming and labor-intensive: Grooming, detangling and trimming long-haired dogs need to be done regularly to avoid matted, tangled hair that creates conditions for bacteria and fungi to grow.</li>
          <li>Difficulty in finding tools: To trim long-haired dogs at home, you need to be fully equipped with specialized tools such as scissors, trimming scissors, combs, tweezers, etc. Choosing the right tool for each dog breed and coat size is also a difficult problem.</li>
          <li>Worry about hurting your pet: Grooming your dog yourself, especially long-haired dogs, is risky. If you are not careful, you can accidentally hurt your pet's skin, causing pain or bleeding.</li>
        </ul>
      `
    },
    2: {
      id: 2,
      title: 'Experience of raising a Husky: Important things to note',
      description: 'Husky is a breed of energetic, intelligent and popular with many people. However...',
      date: '01/08/2024',
      time: '11:15 AM',
      author: 'James Wilson',
      comments: 'No comments',
      image: 'https://www.dogster.com/wp-content/uploads/2023/09/siberian-husky-dog-standing-on-grass_Edalin-Photography_Shutterstock.jpg',
      content: `
        <p>Huskies are beautiful and intelligent dogs, but they require special care and attention. Here's what you need to know:</p>
        <h2>1. Exercise Requirements</h2>
        <p>Huskies need plenty of exercise. Plan for at least 1-2 hours of physical activity daily.</p>
        <h2>2. Climate Considerations</h2>
        <p>Their thick coat makes them sensitive to heat. Ensure proper cooling in warm weather.</p>
        <h2>3. Training Tips</h2>
        <p>Start training early and be consistent. Huskies respond well to positive reinforcement.</p>
      `
    },
    3: {
      id: 3,
      title: 'Experience of raising a French Bulldog: Proper care',
      description: 'French Bulldog is one of the most popular breeds and is loved for its personality',
      date: '01/08/2024',
      time: '02:45 PM',
      author: 'Sophie Chen',
      comments: 'No comments',
      image: 'https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2Fwp-image-197542%2F6f56803730ad9db220f54a75082781a4%2FFrench-Bulldog-Breed-Information.jpg&w=3840&q=75',
      content: `
        <p>French Bulldogs are charming companions that require specific care. Here's what you should know:</p>
        <h2>1. Health Considerations</h2>
        <p>Be aware of their breathing issues and maintain a healthy weight.</p>
        <h2>2. Temperature Management</h2>
        <p>They are sensitive to extreme temperatures. Keep them cool in summer and warm in winter.</p>
        <h2>3. Exercise Needs</h2>
        <p>Moderate exercise is sufficient. Avoid strenuous activities in hot weather.</p>
      `
    },
    4: {
      id: 4,
      title: 'Experience of raising a Beagle: Effective training secrets',
      description: 'Raising a Beagle is an experience that is great but also has its challenges. Beagle is known for its',
      date: '01/08/2024',
      time: '04:30 PM',
      author: 'Robert Taylor',
      comments: 'No comments',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpVgOTjh2Bqb_fR8O6_30xppY1bQ-GwGPLoFnW6BxFyHgVAgbhg4HUWYifry7gNVB-AoFzXHaYNO-JjRIuk8u1w',
      content: `
        <p>Beagles are friendly and energetic dogs that make great family pets. Here's how to care for them:</p>
        <h2>1. Training Challenges</h2>
        <p>Beagles can be stubborn. Use positive reinforcement and be patient.</p>
        <h2>2. Exercise Requirements</h2>
        <p>They need regular exercise to maintain health and prevent boredom.</p>
        <h2>3. Socialization</h2>
        <p>Early socialization is crucial for well-adjusted behavior.</p>
      `
    }
  };

  const post = posts[Number(id) as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-blue-200 bg-opacity-50 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto absolute inset-0 rounded-lg flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-5xl font-bold text-left mb-4 ">{post.title}</h1>
          <div className="flex items-center space-x-4 text-lg">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.time}</span>
            <span>•</span>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
      <div className="py-8 max-w-4xl mx-auto">
        <div
          className="prose max-w-none mt-8 [&>h1]:text-[35px] [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-[30px] [&>h2]:font-bold [&>h2]:mb-4 [&>p]:text-[17px] [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:mb-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
} 