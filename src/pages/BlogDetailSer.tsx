import { useParams } from 'react-router-dom';


export default function BlogPostDetailSer() {
  const { id } = useParams();
  
  // This would typically come from an API call
  const posts = {
    1: {
      id: 1,
      title: 'Pet service at home District 11: Dedicated care, good price',
      description: 'Do you consider your pet as a member of your family? Do you want to give them...',
      date: '14/03/2025',
      time: '10:30 AM',
      author: 'Sarah Johnson',
      comments: 'No comments',
      image: 'https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw=',
      content: `
        <p>At Pawlish, we understand that your pets are cherished family members deserving the best care possible. Our home pet service in District 11 brings professional pet care right to your doorstep.</p>
        <h2>Why Choose Our Home Service?</h2>
        <p>1. Convenience: No need to transport your pet - we come to you</p>
        <p>2. Personalized Care: One-on-one attention in familiar surroundings</p>
        <p>3. Professional Equipment: We bring all necessary tools and supplies</p>
        <h2>Our Services Include:</h2>
        <p>- Basic grooming and bathing</p>
        <p>- Nail trimming and ear cleaning</p>
        <p>- Health check-ups</p>
        <p>- Specialized treatments</p>
        <h2>Competitive Pricing</h2>
        <p>We offer transparent pricing with no hidden fees. Our services are competitively priced while maintaining high-quality standards.</p>
      `
    },
    2: {
      id: 2,
      title: 'Pet service at home District 12: Peace of mind for pets',
      description: 'When life gets busy, taking care of your pet also needs to be flexible and convenient.',
      date: '14/03/2025',
      time: '09:15 AM',
      author: 'Michael Chen',
      comments: 'No comments',
      image: 'https://www.atozvet.com/wp-content/uploads/2017/07/Prevention-and-Treatment-For-Pet-Disease-Midland-TX-scaled.jpg',
      content: `
        <p>Pawlish brings professional pet care services directly to homes in District 12, ensuring your pets receive the attention they deserve even during your busiest days.</p>
        <h2>Our Home Service Benefits</h2>
        <p>1. Time-saving solution for busy pet owners</p>
        <p>2. Stress-free experience for your pets</p>
        <p>3. Flexible scheduling options</p>
        <h2>Available Services</h2>
        <p>- Full grooming packages</p>
        <p>- Pet sitting services</p>
        <p>- Basic health monitoring</p>
        <p>- Emergency care coordination</p>
      `
    },
    3: {
      id: 3,
      title: 'Pet service at home in Go Vap: Prestige, quality',
      description: "Is your pet itchy or smelly and you don't know what to do? Let Pawlish help!",
      date: '14/03/2025',
      time: '11:45 AM',
      author: 'Emma Wilson',
      comments: 'No comments',
      image: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_1280.jpg',
      content: `
        <p>Pawlish's premium home pet care service in Go Vap district delivers professional solutions for all your pet care needs.</p>
        <h2>Expert Solutions For:</h2>
        <p>- Skin conditions and allergies</p>
        <p>- Odor problems</p>
        <p>- Matted fur and coat issues</p>
        <h2>Why Choose Pawlish?</h2>
        <p>1. Experienced pet care specialists</p>
        <p>2. Premium products and equipment</p>
        <p>3. Customized treatment plans</p>
      `
    },
    4: {
      id: 4,
      title: 'Pet service at home in Binh Thanh district: Prestige, quality',
      description: 'Too much work and lack of time can prevent you from taking proper care of your pet.',
      date: '01/08/2024',
      time: '02:30 PM',
      author: 'David Lee',
      comments: 'No comments',
      image: 'https://kimipet.vn/wp-content/uploads/2021/07/cach-cat-long-cho-bang-tong-do.jpg',
      content: `
        <p>Let Pawlish take care of your pets while you focus on your busy schedule. Our home service in Binh Thanh district provides comprehensive pet care solutions.</p>
        <h2>Services Offered:</h2>
        <p>- Professional grooming</p>
        <p>- Health check-ups</p>
        <p>- Behavioral training tips</p>
        <h2>Our Commitment</h2>
        <p>1. Punctual service delivery</p>
        <p>2. Professional staff</p>
        <p>3. Quality assurance</p>
      `
    }
  };

  const post = posts[Number(id) as keyof typeof posts] || posts[1];

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