import Footer from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import TopBar from '@/components/commons/TopBar';
import { Link } from 'react-router-dom';

export default function BlogSer() {
  const posts = [
    {
      id: 1,
      title: 'Pet service at home District 11: Dedicated care, good price',
      description:
        'Do you consider your pet as a member of your family? Do you want to give them...',
      date: '14/03/2025',
      comments: 'No comments',
      image:
        'https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw=',
    },
    {
      id: 2,
      title: 'Pet service at home District 12: Peace of mind for pets',
      description:
        'When life gets busy, taking care of your pet also needs to be flexible and convenient.',
      date: '14/03/2025',
      comments: 'No comments',
      image:
        'https://www.atozvet.com/wp-content/uploads/2017/07/Prevention-and-Treatment-For-Pet-Disease-Midland-TX-scaled.jpg',
    },
    {
      id: 3,
      title: 'Pet service at home in Go Vap: Prestige, quality',
      description:
        "Is your pet itchy or smelly and you don't know what to do? Let Pawlish help!",
      date: '14/03/2025',
      comments: 'No comments',
      image:
        'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_1280.jpg',
    },
    {
      id: 4,
      title: 'Pet service at home in Binh Thanh district: Prestige, quality',
      description:
        'Too much work and lack of time can prevent you from taking proper care of your pet.',
      date: '01/08/2024',
      comments: 'No comments',
      image:
        'https://kimipet.vn/wp-content/uploads/2021/07/cach-cat-long-cho-bang-tong-do.jpg',
    }
  ];

  return (
    <div>
      <TopBar />
      <Header />
      {/* Banner */}
      <div className="relative w-full h-48">
        <img
          src="https://www.shutterstock.com/image-photo/gray-fluffy-cat-is-concept-600nw-1086193616.jpg"
          alt="background cats"
          className="w-full h-full object-cover brightness-40"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-gray-200 text-6xl font-bold">
          Home Service
        </h1>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 w-3xl col-span-2 ml-50 mt-10 mb-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt="post thumbnail"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  HOME SERVICE
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                <Link
                  to={`/blog/service/post/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  READ MORE
                </Link>

                <div className="mt-2 text-gray-400 text-xs">
                  {post.date} • {post.comments}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* side nav */}
        <div className="p-8 rounded-lg shadow-md w-96 mt-10 mr-10 mb-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 mb-4 border rounded-md focus:outline-blue-500"
          />
          <h2 className="font-bold text-lg mb-2">CATEGORIES</h2>
          <ul className="mb-4">
            <li className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <Link to="/blog/experience">
                Share Experience
              </Link>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <Link to="/blog/service">
                Home Service
              </Link>
            </li>
            <li className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <Link to="/blog/entertainment">
                Entertainment Corner
              </Link>

            </li>
          </ul>
          <h2 className="font-bold text-lg mb-2">NEW ARTICLES</h2>
          <ul>
            <li className="mb-8">Pawlish - Dog Walking Service in District 7<br /><span className="text-gray-400 text-sm">📅 11 March 2025</span></li>
            <li className="mb-8">Top Tips for Choosing a Pet Spa in District 7 - Pawlish<br /><span className="text-gray-400 text-sm">📅 10 March 2025</span></li>
            <li className="mb-8">Pet Spa - Pawlish: The Most Reliable Service 2025<br /><span className="text-gray-400 text-sm">📅 19 March 2025</span></li>
            <li className="mb-8">Grooming at District 7 - Pawlish: Pet Care<br /><span className="text-gray-400 text-sm">📅 15 March 2025</span></li>
            <li className="mb-8">District 7 pet spa - pawlish: the pinnacle of boss care<br /><span className="text-gray-400 text-sm">📅 15 March 2025</span></li>
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  );
}
