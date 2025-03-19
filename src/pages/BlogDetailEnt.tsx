import { useParams } from 'react-router-dom';


export default function BlogPostDetailEnt() {
  const { id } = useParams();
  
  // This would typically come from an API call
  const posts = {
    1: {
      id: 1,
      title: 'What does the cat\'s sleep position say?',
      description: 'Through the cat\'s sleep position, you can guess the "mysterious" messages that these little ones want to convey.',
      date: '06/08/2024',
      time: '10:00 AM',
      author: 'Maria Garcia',
      comments: 'No comments',
      image: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-61162-800.jpg',
      content: `
        <p>Cats communicate through their body language, including their sleep positions. Here's what different positions mean:</p>
        <h2>1. The Curled Ball</h2>
        <p>When your cat sleeps curled up in a ball, it means they feel safe and secure in their environment.</p>
        <h2>2. The Side Sleeper</h2>
        <p>Sleeping on their side indicates complete trust and relaxation.</p>
        <h2>3. The Belly Up</h2>
        <p>Exposing their belly shows maximum trust and comfort in their surroundings.</p>
      `
    },
    2: {
      id: 2,
      title: 'How to read your dog\'s body language',
      description: 'Although the "language" is different, your dog still tries to convey emotions of joy, sadness, anger, etc.',
      date: '01/08/2024',
      time: '11:30 AM',
      author: 'John Smith',
      comments: 'No comments',
      image: 'https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg',
      content: `
        <p>Understanding your dog's body language is crucial for building a strong bond. Here are key signals to watch for:</p>
        <h2>1. Tail Position</h2>
        <p>A wagging tail doesn't always mean happiness. The position and speed of the wag can indicate different emotions.</p>
        <h2>2. Ear Position</h2>
        <p>Forward ears show interest, while flattened ears might indicate fear or submission.</p>
        <h2>3. Eye Contact</h2>
        <p>Direct eye contact can be a sign of trust, while avoiding eye contact might indicate discomfort.</p>
      `
    },
    3: {
      id: 3,
      title: 'Saluki dog - The royal dog of Egypt',
      description: 'Let\'s learn about the Saluki dog, known as the royal dog of Egypt, with PAWLISH.',
      date: '01/08/2024',
      time: '03:15 PM',
      author: 'Alex Thompson',
      comments: 'No comments',
      image: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2024/01/BN3HYR.jpg',
      content: `
        <p>The Saluki is one of the oldest dog breeds, with a rich history dating back to ancient Egypt. Here's what makes them special:</p>
        <h2>1. Historical Significance</h2>
        <p>Salukis were considered royal dogs in ancient Egypt and were often mummified alongside pharaohs.</p>
        <h2>2. Physical Characteristics</h2>
        <p>Known for their grace and speed, Salukis are built for endurance and hunting.</p>
        <h2>3. Modern Day</h2>
        <p>Today, they make excellent companions while maintaining their hunting instincts.</p>
      `
    },
    4: {
      id: 4,
      title: 'Interesting things about the Pug dog breed',
      description: 'With its cute but also adorable appearance, the Pug dog has quickly won the hearts of many people.',
      date: '01/08/2024',
      time: '05:00 PM',
      author: 'Emily Brown',
      comments: 'No comments',
      image: 'https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg',
      content: `
        <p>Pugs are one of the most beloved dog breeds worldwide. Here's what makes them special:</p>
        <h2>1. Personality</h2>
        <p>Pugs are known for their charming personality and love of human companionship.</p>
        <h2>2. Physical Features</h2>
        <p>Their distinctive wrinkled face and curly tail make them instantly recognizable.</p>
        <h2>3. Care Requirements</h2>
        <p>While they're relatively low-maintenance, their facial wrinkles need regular cleaning.</p>
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