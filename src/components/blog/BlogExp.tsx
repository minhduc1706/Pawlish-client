import Footer from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import TopBar from '@/components/commons/TopBar';

export default function BlogExp() {
  const posts = [
    {
      id: 1,
      title: 'Cắt tỉa lông chó lông dài tại nhà? Đã có Pawlish lo!',
      description:
        'Tại Pawlish, chúng tôi hiểu rằng việc chăm sóc một chú chó lông dài có thể là một thách thức',
      date: '06/08/2024',
      comments: 'Không có bình luận',
      image:
        'https://vcdn1-giadinh.vnecdn.net/2021/11/09/207812257-308076537713445-6475-6662-7552-1636468053.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=vQnyjLxVCwLW086xDIJHSQ',
    },
    {
      id: 2,
      title: 'Kinh nghiệm nuôi chó Husky: Lưu ý quan trọng cần biết',
      description:
        'Chó Husky là giống chó năng động, thông minh và được nhiều người yêu thích. Tuy nhiên...',
      date: '01/08/2024',
      comments: 'Không có bình luận',
      image:
        'https://www.dogster.com/wp-content/uploads/2023/09/siberian-husky-dog-standing-on-grass_Edalin-Photography_Shutterstock.jpg',
    },
    {
      id: 3,
      title: 'Kinh nghiệm nuôi chó Bulldog Pháp: Chăm sóc đúng cáchcách',
      description:
        'Chó Bulldog Pháp là một trong những giống chó phổ biến và được yêu thích nhờ vào tính cách thân',
      date: '01/08/2024',
      comments: 'Không có bình luận',
      image:
        'https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2Fwp-image-197542%2F6f56803730ad9db220f54a75082781a4%2FFrench-Bulldog-Breed-Information.jpg&w=3840&q=75',
    },
    {
      id: 4,
      title: 'Kinh nghiệm nuôi chó Beagle: Bí quyết huấn luyện hiệu quả',
      description:
        'Nuôi chó Beagle là một trải nghiệm tuyệt vời nhưng cũng không thiếu thử thách. Chó Beagle nổi tiếng với',
      date: '01/08/2024',
      comments: 'Không có bình luận',
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
          className="w-full h-full object-cover brightness-50"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Chia Sẻ Kinh Nghiệm
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
                  CHIA SẺ KINH NGHIỆM
                </span>
              </div>

              <div className="p-8">
                <h2 className="text-lg font-bold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{post.description}</p>
                <a href="#" className="text-blue-500 mt-3 block font-semibold">
                  XEM THÊM »
                </a>

                <div className="mt-2 text-gray-400 text-xs">
                  {post.date} • {post.comments}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-lg shadow-md w-96 mt-10 mr-10 mb-10">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full p-2 mb-4 border rounded-md focus:outline-blue-500"
          />
          <h2 className="font-bold text-lg mb-2">DANH MỤC</h2>
          <ul className="mb-4">
            <li className="flex items-center gap-2">
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
              <a>
              Chia Sẻ Kinh Nghiệm
              </a>
            </li>
            <li className="flex items-center gap-2">
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
              <a>
              Góc Giải Trí
              </a>
              
            </li>
            <li className="flex items-center gap-2">
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
              <a>
              Dịch Vụ Tại Nhà
              </a>
            </li>

          </ul>
          <h2 className="font-bold text-lg mb-2">BÀI VIẾT MỚI</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-blue-600 font-semibold">Trông Giữ Thú Cưng Quận 7 - PET SERVICE</a><br /><span className="text-gray-400 text-sm">📅 11 Th3 2025</span></li>
            <li className="mb-2"><a href="#" className="text-blue-600 font-semibold">Spa Uy Tín Quận 7 – Top Mẹo Chọn spa thú cưng Từ Pet Service</a><br /><span className="text-gray-400 text-sm">📅 10 Th3 2025</span></li>
            <li><a href="#" className="text-blue-600 font-semibold">Spa Thú Cưng – Pet Service: Dịch Vụ Uy Tín Nhất 2025</a><br /><span className="text-gray-400 text-sm">📅 06 Th3 2025</span></li>
          </ul>
        </div>

      </div>
      <Footer />
    </div>
  );
}
