import Footer from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import TopBar from '@/components/commons/TopBar';
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
        <img src="https://www.trupanion.com/images/trupanionwebsitelibraries/bg/pomeranians.jpg?sfvrsn=b363d2da_5" style="width: 800px; height: auto;"/>
        <h1>Benefits of using Pawlish's at-home long-haired dog grooming service</h1>
        <p>Understanding your difficulties, Pawlish provides professional long-haired dog grooming services at home, giving you absolute peace of mind and convenience.</p>
        <ul>
        <li>Experienced Staff: Pawlish has a team of groomers who are well-trained and knowledgeable about long-haired dog breeds and appropriate grooming techniques. Many years of experience in the profession help us handle cases of tangled, thick, difficult-to-trim hair quickly and effectively.</li>
        <li>Using professional tools: We are committed to using specialized, high-quality tools that are cleaned before each use, ensuring absolute safety for your pet.</li>
        <li>Save time and effort: With Pawlish's long-haired dog grooming service at home, you will no longer have to spend a lot of time and effort grooming your pet yourself.</li>
        <li>Give your pet a fresh look: Pawlish will give your pet a fresh, beautiful and neat look.</li>
        </ul>
        <h1>F5 your Boss's look with 3 at-home grooming services from Pawlish</h1>
        <p>Do you want your pet to be neat and beautiful but are afraid to take them to the spa? Don't worry, Pawlish offers the optimal solution with 3 professional home grooming services, helping your "Boss" "transform" immediately!</p>
        <h2>Trim hair</h2>
        <p>A service for dogs and cats with long, thick fur that sheds frequently and causes unhygienic conditions. Pawlish will help you meticulously trim your pet's fur, remove loose hair, bring a comfortable, pleasant feeling to your pet, and at the same time help your living space become cleaner.</p>
        <img src="https://www.animalbehaviorcollege.com/wp-content/uploads/2015/02/west-highland-white-terrier-grooming.jpg" style="width: 800px; height: auto;"/>
        <h2>Hair trimming and styling</h2>
        <p>Want your pet to look stylish and trendy? Pawlish's grooming service will help you make it happen! Our team of professional, experienced groomers will advise and create the right style for your pet, based on their breed and preferences.</p>
        <h2>Shave</h2>
        <p>Pawlish's home grooming service is the optimal solution to help your pet "cool down" effectively in the summer. In addition, regular grooming also helps remove loose hair, prevent skin diseases, and give your pet healthy, clean skin. </p>
        <p>With a team of professional, experienced groomers, using specialized, clean tools, Pawlish is committed to providing your pet with the safest, highest quality, and most aesthetic home grooming service!</p>
        <h1>Pawlish's professional at-home long-haired dog grooming service process</h1>
        <p>Our long-haired dog grooming service at home is performed methodically and professionally through the following steps:</p>
        <ul>
        <li>Grooming advice: Pawlish's staff will advise you on the right grooming style for each breed, personality and your needs.</li>
        <li>Health Check: Before proceeding with a long-haired dog grooming at home, we will conduct a preliminary health check of your pet to ensure that your pet is eligible for the service.</li>
        <li>Grooming: Based on your request, the groomer will trim and style your hair as desired.</li>
        <li>Hygiene: After trimming, we will clean your pet's ears, eyes, and nails.</li>
        <li>Satisfaction Guarantee: Pawlish is committed to providing absolute customer satisfaction.</li>
        </ul>
        <img src="https://www.dogster.com/wp-content/uploads/2024/09/Woman-trimming-toy-poodle-with-scissors-in-grooming-salon-Reshetnikov_art-Shutterstock.jpg" style="width: 800px; height: auto;"/>
        <h1>Conclusion</h1>
        <p>Grooming long-haired dogs at home is no longer a worry with Pawlish! Let our professional team "transform" your pet into a new, neater and more adorable look. With many years of experience in the field of pet care, Pawlish is confident to be a trusted address to bring your pet the most professional and reputable long-haired dog grooming service.</p>
        <p>Contact Pawlish now for consultation and service appointment</p>

        <!-- Contact -->
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
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
        <p>Husky is an active, intelligent dog breed and is loved by many people. However, raising a Husky is not as simple as raising other dog breeds. To ensure the health and happiness of your Husky, mastering the experience of raising Husky is extremely necessary. In this article, Pawlish will share important notes to help you care for and raise your Husky in the best way.</p>
        <h1>Learn about the Husky breed</h1>
        <h2>Origin and physical characteristics</h2>
        <p>Husky dog ​​breeding experience shows that Husky originated from the cold Siberian region, where they were mainly used as sled dogs. With this origin, the Husky breed is equipped with a thick double coat, helping them withstand harsh weather. This coat is not only beautiful but also a distinctive feature, with many different colors, from snow white to jet black or silver gray. Husky's eyes are also very special, often blue or dark brown, sometimes a combination of both colors, creating an irresistible charm. In particular, their erect ears and brush-shaped tail further highlight their strong and vibrant appearance.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJbyWYuS5fqYydtBoHEq_265nCKhd_-Mm8PTukVmYEwTOCpNXWkVOXXuCYbK3MIsZIAt5zcmCL2t41RxsDjCZVQ"  style="width: 800px; height: auto;"/>
        <h2>Outstanding personality</h2>
        <p>Experience in raising Husky dogs also shows that this breed is famous for its active and lively personality. Husky likes to run and explore everything around them, which makes them need a spacious living space to be able to move comfortably. However, Husky is also quite stubborn and has an independent personality, which sometimes makes them a challenge for owners who do not have much experience raising Husky dogs. However, with their inherent intelligence, Husky is very easy to train if trained properly and regularly.</p>
        <p>During the process of raising a Husky, you will realize that they are very loyal and always want to please their owners, but it also takes patience and understanding to be able to build a close relationship with this personality-filled dog breed.</p>
        <img src="https://file.hstatic.net/1000238938/file/cho-husky-dep_41cbd0a400a34d8d900fe91c79c1e005_grande.png"  style="width: 800px; height: auto;"/>
        <h1>Husky Dog Raising Experience: Careful Care</h1>
        <h2>Nutrition for Husky</h2>
        <ul>
          <li>Food: Choose high quality grain food, rich in protein and fat.</li>
          <li>Diet: Depends on the age, weight and activity level of your Husky. Consult your veterinarian for appropriate nutrition.</li>
          <li>Number of meals: Husky puppies need to eat many small meals a day. Adult Huskies can eat 1-2 meals/day.</li>
        </ul>
        <h2>Husky Grooming</h2>
        <ul>
          <li>Brushing: You should brush your Husky at least 2-3 times a week to remove loose hair and keep the coat smooth.</li>
          <li>Bathing: Only bathe your Husky when absolutely necessary, about once every 1-2 months.</li>
        </ul>
        <h2>Husky Hygiene</h2>
        <ul>
          <li>Ear hygiene: Periodically clean your Husky's ears with a specialized ear cleaning solution.</li>
          <li>Eye hygiene: Use a soft cloth to clean Husky's eye discharge daily.</li>
          <li>Oral hygiene: Brush your Husky's teeth 2-3 times a week to prevent dental diseases.</li>
        </ul>
        <h2>Common diseases in Husky</h2>
        <p>Huskies are susceptible to diseases such as eye diseases, skin diseases, bone and joint diseases, etc. Therefore, regular vaccination and deworming are extremely important.</p>
        <img src="https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-1454565264.jpg?resize=1200,630" style="width: 800px; height: auto;"/>
        <h1>Husky Dog Raising Experience: Proper Training</h1>
        <p>Training is a key factor in the successful experience of raising a Husky. Huskies are intelligent but also very stubborn, so choosing the right training method is essential.</p>
        <h2>Basic training</h2>
        <p>Experience in raising a Husky dog ​​cannot lack basic training lessons such as: sitting, lying down, standing, and especially going to the toilet in the right place. It is important that you start these lessons from when the Husky is young to form habits and long-term compliance.</p>
        <h2>Tips for training a well-behaved Husky</h2>
        <ul>
          <li>Always be patient and consistent, this is the key factor in the experience of raising a Husky to have a well-behaved and obedient dog.</li>
          <li>Use praise and rewards to encourage your Husky. Small treats or words of praise are great motivators to help your Husky learn quickly.</li>
          <li>Never hit or scold a Husky. Experience in raising Husky dogs shows that using violence will only make the situation worse, causing the Husky to become more fearful or resistant.</li>
        </ul>
        <h1>Pawlish – Accompanying you on your journey of raising a Husky</h1>
        <p>With many years of experience in the field of pet care, Pawlish is proud to be your trusted companion on your journey of raising a Husky.</p>
        <p>We provide a variety of support services such as:</p>
        <ul>
          <li>Spa & Grooming: Husky grooming with a professional, pet-loving team.</li>
          <li>Pet Hotel: A safe and comfortable place for your Husky to rest when you are away from home.</li>
          <li>Providing products and accessories: Providing a variety of products and accessories for Husky with guaranteed quality.</li>
        </ul>
        <p>Coming to Pawlish, you can be completely assured of the quality of service and dedication of our staff.</p>
        <h1>Conclude</h1>
        <p>Raising a Husky is an exciting yet challenging journey. Hopefully, the experiences of raising a Husky that Pawlish shares will help you feel more confident in taking care of your “four-legged friend”. Contact Pawlish now for the best advice and support!</p>
        <p>Contact Pawlish now for advice and support on Husky raising experience!</p>

        <!-- Contact -->
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
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
      image: 'https://thepetlabco.com/learn/_next/image?url=https%3A%2F%2Fblog.thepetlabco.com%2Fwp-content%2Fuploads%2F2024%2F05%2Fshutterstock_1974509900-1.jpg&w=3840&q=75',
      content: `
        <p>French Bulldog is one of the most popular and beloved dog breeds thanks to its friendly, intelligent personality and lovely appearance. However, to raise them in the best way, the owner needs to understand the experience of raising French Bulldogs from daily care to health management. In this article, Pawlish will share the necessary knowledge to help you take care of French Bulldogs properly and scientifically.</p>
        <h1>French Bulldog Nutrition</h1>
        <p>Nutrition plays a key role in ensuring the health and overall development of the French Bulldog. Experience in raising French Bulldogs shows that choosing the right diet will help them grow healthily and avoid common health problems.</p>
        <img src="https://cdn.britannica.com/45/233845-050-6B6A7F3E/Two-French-bulldogs.jpg" style="width: 800px; height: auto;"/>
        <h2>Puppies (2-12 months old)</h2>
        <ul>
          <li>Type of food: You should choose dry food specifically for French Bulldog puppies, rich in protein, calcium and DHA.</li>
          <li>Number of meals/day: Feed puppies 4-5 meals/day, divided evenly into time frames.</li>
          <li>Note when changing food: When you want to change to another type of food, you should do it slowly, mixing the old and new food for about 3-5 days so that the puppy can get used to it.</li>
        </ul>
        <h2>Adult dogs (from 1 year old)</h2>
        <ul>
          <li>Food portion: Reduce the amount of food/meal compared to puppies, feed 2 meals/day.</li>
          <li>Food type: Can be fed dry food or combined with fresh food such as meat, fish, vegetables, etc.</li>
          <li>Note: Do not overfeed French Bulldogs, as this can easily lead to obesity and affect their health.</li>
        </ul>
        <h2>Foods to avoid</h2>
        <p>Some foods can be harmful to French Bulldogs, you should absolutely avoid: grapes, chocolate, onions, garlic, small animal bones. Experience in raising French Bulldogs emphasizes staying away from these foods to protect your pet's health.</p>
        <h2>Drinking water</h2>
        <p>Always make sure to provide enough clean water for your French Bulldog. Change the water twice a day to ensure hygiene. Experience in raising French Bulldogs shows that clean water is an important factor in helping dogs maintain their health.</p>
        <h2>Exercise and play</h2>
        <p>Although they do not need a lot of exercise, French Bulldogs still need regular play and exercise to stay healthy. French Bulldog owners advise that exercise levels should be moderated.</p>
        <ul>
          <li>Appropriate level of exercise: Do not over-exercise your French Bulldog, especially in hot weather. Take your dog for a walk twice a day, about 15-20 minutes each time.</li>
          <li>Suitable play activities: Playing fetch, tug of war, etc. are suitable activities for French Bulldogs.</li>
        </ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/2008-07-28_Dog_at_Frolick_Field.jpg" style="width: 800px; height: auto;"/>
        <h1>Grooming for French Bulldogs</h1>
        <p>Cleanliness is an important factor in helping French Bulldogs avoid skin diseases and parasites.</p>
        <h2>Brushing</h2>
        <ul>
          <li>Frequency: You should brush your French Bulldog 2-3 times a week to remove loose hair and dirt.</li>
          <li>Suitable brush type: Use a soft bristle brush specifically designed for French Bulldogs.</li>
        </ul>
        <h2>Bathing</h2>
        <ul>
          <li>Frequency: You should only bathe your French Bulldog 1-2 times a month, or when it gets really dirty.</li>
          <li>Suitable shampoo: Use shampoo specifically for dogs, with the right pH, and does not irritate the skin.</li>
          <li>How to bathe and dry your dog properly: Bathe your dog with warm water, then dry him with a soft towel. Avoid getting water in his ears.</li>
        </ul>
        <h1>French Bulldog Health Care</h1>
        <p>When learning about the experience of raising French Bulldogs, taking care of their health is a very important factor. French Bulldogs are susceptible to a number of diseases, so you need to pay special attention to their health:</p>
        <ul>
          <Li>According to experience in raising French Bulldogs, some common diseases that you need to pay attention to include: heat stroke, dermatitis, respiratory diseases, etc. This helps you better prepare for caring for and preventing diseases for dogs.</Li>
          <li>Full vaccination schedule: To prevent dangerous diseases, you need to fully vaccinate your French Bulldog according to the veterinarian's schedule.</li>
          <li>Regular health check-ups: You should take your French Bulldog for a regular health check-up every 6 months to detect and treat diseases promptly.</li>
        </ul>
        <img src="https://hips.hearstapps.com/hmg-prod/images/french-bulldogs-667985caac372.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*" style="width: 800px; height: auto;"/>
        <h1>Conclusion</h1>
        <p>Raising a French Bulldog requires special care and attention to ensure that they are healthy and happy. By applying the shared experiences of raising a French Bulldog, you will be able to provide the best living environment for your pet. Remember, proper care will not only help your dog develop comprehensively but also create a long-lasting bond between you and your four-legged friend.</p>

        <p>Contact Pawlish now for consultation and service appointment</p>

        <!-- Contact -->
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
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
      
  <p>Raising a Beagle is an incredibly rewarding experience — they’re loving, playful, and full of personality. However, training a Beagle comes with its own set of challenges due to their strong-willed and curious nature. Let’s dive into the key tips to help you train your Beagle effectively!</p>

  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpVgOTjh2Bqb_fR8O6_30xppY1bQ-GwGPLoFnW6BxFyHgVAgbhg4HUWYifry7gNVB-AoFzXHaYNO-JjRIuk8u1w" 
    alt="Beagle dog running in the field" 
    style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px;"
  />

  <h2>1. Understanding Beagle Behavior</h2>
  <p>Beagles were originally bred as hunting dogs, which explains their strong sense of smell and independent mindset. They’re intelligent but can also be quite stubborn. Knowing this helps set realistic expectations for training.</p>

  <img 
    src="https://cbx-prod.b-cdn.net/COLOURBOX2401371.jpg?width=800&height=800&quality=70" 
    alt="Beagle looking curious" 
    style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px;"
  />

  <h2>2. Essential Training Tips</h2>
  <p>To make training effective, follow these strategies:</p>
  <ul>
    <li><strong>Positive Reinforcement:</strong> Reward good behavior with treats, praise, or playtime. Beagles respond poorly to punishment.</li>
    <li><strong>Consistency is Key:</strong> Stick to a routine. Commands like "sit," "stay," and "come" should be practiced daily.</li>
    <li><strong>Short, Engaging Sessions:</strong> Beagles have short attention spans. Keep training sessions fun and under 10 minutes.</li>
  </ul>

  <h2>3. Meeting Exercise Needs</h2>
  <p>Beagles are high-energy dogs. Without enough physical and mental stimulation, they may turn to destructive behaviors. Make sure to:</p>
  <ul>
    <li>Walk them for at least 30-60 minutes daily.</li>
    <li>Incorporate games like fetch or scent-based treasure hunts.</li>
    <li>Provide puzzle toys for mental engagement.</li>
  </ul>

  <img 
    src="https://www.shutterstock.com/image-photo/happy-playful-beagle-dog-running-600nw-2473552937.jpg" 
    alt="Beagle running happily outside" 
    style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px;"
  />

  <h2>4. Socialization and Behavior</h2>
  <p>Early socialization is crucial to ensure your Beagle grows into a well-behaved companion. Introduce them to different environments, people, and other dogs during their first 3-4 months.</p>

  <h2>5. Common Mistakes to Avoid</h2>
  <p>Many owners unintentionally slow their Beagle’s progress by:</p>
  <ul>
    <li>Overfeeding treats — balance rewards with a healthy diet.</li>
    <li>Skipping daily walks, leading to restlessness.</li>
    <li>Ignoring recall training — Beagles love to explore and may wander off.</li>
  </ul>

  <img 
    src="https://www.shutterstock.com/image-photo/close-young-asian-girl-hold-600nw-2309909129.jpg" 
    alt="Happy Beagle with owner" 
    style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 15px;"
  />

  <h2>Final Thoughts</h2>
  <p>Raising a Beagle is an adventure filled with joy and learning. With patience, consistency, and a touch of humor, you’ll build an unbreakable bond with your furry friend. Happy training!</p>
<p>Contact Pawlish now for consultation and service appointment</p>

        <!-- Contact -->
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>

      `
    }
  };

  const post = posts[Number(id) as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <TopBar />
      <Header />
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-blue-200 bg-opacity-50 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto absolute inset-0 rounded-lg flex flex-col justify-center text-white p-8">
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
      <div className="py-8 max-w-4xl mx-auto mb-8">
        <div
          className="prose max-w-none mt-8 [&>h1]:text-[55px] [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-[30px] [&>h2]:font-bold [&>h2]:mb-4 [&>p]:text-[17px] [&>p]:mb-4 [&>p]:text-gray-700 [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:mb-4 [&>ul>li]:text-[17px] [&>ul>li]:text-gray-700 [&>ul>li]:ml-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer />
    </div>
  );
} 