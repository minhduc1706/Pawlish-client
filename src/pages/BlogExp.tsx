import Footer from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import TopBar from '@/components/commons/TopBar';
import { Link } from 'react-router-dom';
export default function BlogExp() {
  const posts = [
    {
      id: 1,
      title: 'How to groom a long-haired dog at home? Pawlish is here!',
      description:
        'At Pawlish, we understand that taking care of a long-haired dog can be a challenge',
      date: '06/08/2024',
      comments: 'No comments',
      image:
        'https://vcdn1-giadinh.vnecdn.net/2021/11/09/207812257-308076537713445-6475-6662-7552-1636468053.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=vQnyjLxVCwLW086xDIJHSQ',
    },
    {
      id: 2,
      title: 'Experience of raising a Husky: Important things to note',
      description:
        'Husky is a breed of energetic, intelligent and popular with many people. However...',
      date: '01/08/2024',
      comments: 'No comments',
      image:
        'https://www.dogster.com/wp-content/uploads/2023/09/siberian-husky-dog-standing-on-grass_Edalin-Photography_Shutterstock.jpg',
    },
    {
      id: 3,
      title: 'Experience of raising a French Bulldog: Proper care',
      description:
        'French Bulldog is one of the most popular breeds and is loved for its personality',
      date: '01/08/2024',
      comments: 'No comments',
      image:
        'https://thepetlabco.com/learn/_next/image?url=https%3A%2F%2Fblog.thepetlabco.com%2Fwp-content%2Fuploads%2F2024%2F05%2Fshutterstock_1974509900-1.jpg&w=3840&q=75',
    },
    {
      id: 4,
      title: 'Experience of raising a Beagle: Effective training secrets',
      description:
        'Raising a Beagle is an experience that is great but also has its challenges. Beagle is known for its',
      date: '01/08/2024',
      comments: 'No comments',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpVgOTjh2Bqb_fR8O6_30xppY1bQ-GwGPLoFnW6BxFyHgVAgbhg4HUWYifry7gNVB-AoFzXHaYNO-JjRIuk8u1w',
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
          Share Experience
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
                  SHARE EXPERIENCE
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                <Link
                  to={`/blog/experience/post/${post.id}`}
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
